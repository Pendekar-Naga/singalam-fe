import React from 'react';
import { Toast } from 'flowbite-react';
import { FaTelegramPlane } from 'react-icons/fa';

const LaporToast = ({ message, onClose }) => {
    return (
        <div className=" fixed top-20 right-1/2 transform translate-x-1/2 md:top-auto md:bottom-5 md:right-5 md:translate-x-0 z-50">
          <Toast onClick={onClose} className="cursor-pointer bg-black">
            <FaTelegramPlane className="h-5 w-5 text-white dark:text-white" />
            <div className="pl-4 text-sm font-normal">{message}</div>
          </Toast>
        </div>
      );
    };

export default LaporToast;
