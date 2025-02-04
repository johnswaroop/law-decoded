'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function LegalTermsPage() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 py-16 max-w-5xl">
                <div className="space-y-4 text-center mb-16">
                    <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                        Legal Terms & Conditions
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Our commitment to transparency and legal compliance
                    </p>
                </div>
                
                <div className="grid gap-8">
                    {[
                        {
                            title: "Terms of Use",
                            content: "Welcome to Law Decoded. By accessing and using this website, you accept and agree to be bound by these terms and conditions. Our platform is designed to provide legal information and resources while maintaining the highest standards of user experience and professionalism."
                        },
                        {
                            title: "User Conduct",
                            content: "Users of Law Decoded must adhere to our community guidelines and maintain professional conduct. Any misuse of our platform or violation of these terms may result in account suspension or termination."
                        },
                        {
                            title: "Content Usage",
                            content: "All content provided on Law Decoded is for informational purposes only. While we strive for accuracy, we recommend consulting with legal professionals for specific legal matters."
                        },
                        {
                            title: "Privacy & Data",
                            content: "Your privacy is paramount. We implement robust data protection measures and handle all user information in accordance with our Privacy Policy and applicable data protection laws."
                        },
                        {
                            title: "Intellectual Property",
                            content: "The content, features, and functionality of Law Decoded are protected by intellectual property rights. Users may not reproduce or distribute our content without explicit permission."
                        }
                    ].map((section, index) => (
                        <section 
                            key={index} 
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-md"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                {index + 1}. {section.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {section.content}
                            </p>
                        </section>
                    ))}
                </div>

                <footer className="mt-16 border-t border-gray-100 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="space-y-2">
                            <p className="text-sm text-gray-500">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-500">
                                © {new Date().getFullYear()} Law Decoded
                            </p>
                        </div>
                        <Button 
                            variant="outline"
                            onClick={scrollToTop}
                            className="min-w-[120px]"
                        >
                            Back to Top
                        </Button>
                    </div>
                </footer>
            </div>
        </main>
    );
}
