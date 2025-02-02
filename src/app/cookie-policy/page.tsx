'use client';

import React from 'react';

export default function CookiePolicyPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Cookie Policy
                </h1>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                    Learn how we use cookies to enhance your browsing experience and protect your privacy
                </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl">
                <div className="grid grid-cols-1 divide-y divide-gray-100">
                    <section className="p-10">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                                Understanding Cookies
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
                            </p>
                        </div>
                    </section>

                    <section className="p-10">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                            Cookie Categories
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Essential',
                                    desc: 'Required for core website functionality and security. Cannot be disabled.',
                                    icon: '🔒'
                                },
                                {
                                    title: 'Analytics',
                                    desc: 'Help us understand user behavior and improve our services.',
                                    icon: '📊'
                                },
                                {
                                    title: 'Functional',
                                    desc: 'Enable enhanced features and remember your preferences.',
                                    icon: '⚙️'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 p-8 rounded-xl">
                                    <span className="text-4xl mb-4 block">{item.icon}</span>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="p-10">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            Your Cookie Choices
                        </h2>
                        <div className="bg-gray-50 rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Browser Settings</h3>
                                    <p className="text-gray-600">
                                        Control cookies through your browser preferences. Each browser has different controls for managing cookies.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Cookie Consent</h3>
                                    <p className="text-gray-600">
                                        You can adjust your cookie preferences anytime through our cookie consent manager.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="border-t border-gray-100 p-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <p className="text-sm text-gray-500">
                                © {new Date().getFullYear()} Law Decoded
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
