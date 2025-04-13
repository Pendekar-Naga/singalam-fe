'use client'

import React from 'react';

export default function Banner() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-8 mx-auto max-w-7xl px-6 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16">

            <div className="mx-auto max-w-7xl px-6  lg:flex lg:items-center lg:gap-x-10 lg:px-8 bg-bannerBiru rounded-xl py-8">
                <div className="mx-auto max-w-4xl lg:mx-0 lg:flex-auto md:w-2/3">
                    <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">
                        Kamu lagi buru-buru?
                        MalangBot siap membantu!
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
                        Butuh jawaban cepat soal layanan pemerintahan? Tanya NgalamBot! Dari informasi KTP hingga paspor, NgalamBot selalu siap menjawab pertanyaan Anda secara langsung, kapan saja. Chat sekarang!
                    </p>
                    <div className="mt-6 flex items-center gap-x-6">
                        <a
                            href="/chabot"
                            className="rounded-md bg-biruNgalam px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Chat MalangBot
                        </a>
                    </div>
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow md:w-1/3">
                    <img alt="MalangBot" src="public/images/bot.png" className="w-72 h-auto mx-auto lg:w-80" />
                </div>
            </div>
            </div>
        </div>
    )
}
