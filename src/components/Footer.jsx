'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-700 w-full mt-auto bottom-0 flex flex-col items-center">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="w-full px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 max-w-screen-xl">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <img className="h-10 w-auto" src="public/images/logo2.png" />
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Solusi</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Usulan</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Inovasi</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Dukungan</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Status Server</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Karir</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Perusahaan</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Tentang</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Press</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Legalitas</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Privasi</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Ketentuan</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {/* Social media icons */}
                    </div>
                    <p className="mt-8 text-xs leading-5 text-gray-300 md:order-1 md:mt-0">
                        &copy; 2024 Ngikut Hackathon. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
