'use client'

import React from 'react';

export default function Youtube() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-8 mx-auto max-w-7xl px-6 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16 mt-16 mb-24">
            <div className="mx-auto max-w-7xl px-6 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 bg-bannerBiru rounded-xl pb-16">
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow ">
                    <iframe className="rounded-xl w-full h-60 aspect-video"
                    src="https://player.vimeo.com/video/1083470515?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479">
                    </iframe>
                </div>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto mt-10 sm:mt-0">
                    <h1 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">
                        Yuk Kenalan dengan SINGALAM
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
                        Selamat datang di Sistem Informasi dan Gerakan Layanan Malang! Tempat mencurahkan segala isi hati tanpa perlu khawatir dan bingung berkepanjangan
                    </p>
                    <div className="mt-6 flex items-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-biruNgalam px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                        Lihat Tutorial
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
