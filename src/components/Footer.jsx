'use client';

import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-700 w-full mt-auto bottom-0 flex flex-col items-center">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="w-full px-6 pb-8 pt-8 sm:pt-8 lg:px-8 lg:pt-10 max-w-screen-xl">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <img className="h-10 w-auto" src="public/images/logo2.png" />
                </div>
                <div className="mt-4 border-t border-white/10 pt-4 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                    </div>
                    <p className="mt-8 text-xs leading-5 text-gray-300 md:order-1 md:mt-0">
                        &copy; 2025 Pendekar Naga. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
