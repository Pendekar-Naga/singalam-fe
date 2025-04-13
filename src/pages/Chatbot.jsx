import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loadingDots, setLoadingDots] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);

  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const parseMarkdown = (content) => {
    const htmlContent = marked.parse(content);
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isWaiting) {
      const interval = setInterval(() => {
        setLoadingDots((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 500);
      return () => clearInterval(interval);
    } else {
      setLoadingDots("");
    }
  }, [isWaiting]);

  const handleSend = async (message = input) => {
    if (message.trim()) {
      const userMessage = { role: "user", content: message };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      const assistantMessage = { role: "assistant", content: "Sek yo" };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsWaiting(true);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/chat_stream`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_SECRET_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
            signal: AbortSignal.timeout(60000),
          }
        );

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedContent = "";

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          accumulatedContent += chunk;

          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].content = accumulatedContent;
            return newMessages;
          });

          setIsWaiting(false);
        }
      } catch (error) {
        console.error(error);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Sorry, there was an error processing your request.",
          },
        ]);
        setIsWaiting(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    "Cara membuat KTP",
    "Cara membuat SIM",
    "Cara membuat Paspor",
    "Cara mendaftar BPJS",
    "Cara membuat KK baru"
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4">
        {messages.length === 0 ? (
          // Initial view when no messages
          <div className="flex-1 flex flex-col items-center justify-center">
            {/* Updated header with horizontally aligned icon and text */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <img src="/images/chatbot.png" alt="Chatbot Icon" className="w-16 h-16" />
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Ada yang bisa dibantu?</h1>
            </div>
            
            <div className="w-full max-w-xl">
              <div className="flex items-center bg-gray-100 rounded-full p-3 mb-6">
                <input
                  type="text"
                  placeholder="Tanya MalangBot"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-grow bg-transparent outline-none text-gray-800 px-4"
                />
                <button onClick={() => handleSend()} className="text-gray-400 hover:text-gray-600">
                  <FaPaperPlane className="text-xl" />
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(action)}
                    className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                  >
                    <span className="text-black">✦</span>
                    <span>{action}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Chat view when there are messages
          <div className="flex-1 flex flex-col pt-4 mt-20">
            <div className="flex-1 overflow-y-auto" ref={chatContainerRef}>
              {messages.map((message, index) => (
                <div key={index} className={`flex w-full ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}>
                  <div className={`max-w-xs md:max-w-lg rounded-lg p-4 ${
                    message.role === "user" 
                      ? "bg-blue-600 text-white rounded-br-none" 
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}>
                    <span dangerouslySetInnerHTML={parseMarkdown(message.content)} />
                  </div>
                </div>
              ))}
              {isWaiting && (
                <div className="flex w-full justify-start mb-4">
                  <div className="max-w-xs md:max-w-lg rounded-lg p-4 bg-gray-100 text-gray-800 rounded-bl-none">
                    Lagi ngetik{loadingDots}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        {/* Input field always at bottom when there are messages */}
        {messages.length > 0 && (
          <div className="sticky bottom-0 bg-white py-4">
            <div className="flex items-center bg-gray-100 rounded-full p-3">
              <input
                type="text"
                placeholder="Tanya MalangBot"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow bg-transparent outline-none text-gray-800 px-4"
              />
              <button onClick={() => handleSend()} className="text-gray-400 hover:text-gray-600">
                <FaPaperPlane className="text-xl" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;