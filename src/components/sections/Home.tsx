import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { BadgeIndianRupee, ShieldCheck, Award, Users } from 'lucide-react';
import { SEO } from '../SEO';

export const Home: React.FC = () => {
    const highlights = [
        { text: "Income Tax & GST Experts", icon: BadgeIndianRupee, color: "bg-blue-50 text-blue-600" },
        { text: "Compliance Made Simple", icon: ShieldCheck, color: "bg-green-50 text-green-600" },
        { text: "Trusted Professional Advisory", icon: Award, color: "bg-purple-50 text-purple-600" },
        { text: "Client-Centric Approach", icon: Users, color: "bg-orange-50 text-orange-600" }
    ];

    return (
        <SectionContainer title="Welcome to TaxMile.in">
            <SEO
                title="Home"
                description="Devang B. Shah & Co (TaxMile.in) - Your Trusted Partner for Tax, Compliance & Financial Growth. Expert services in Income Tax, GST, TDS, and more."
                canonicalUrl="/"
            />
            <div className="space-y-12 max-w-5xl mx-auto h-full flex flex-col justify-center">
                <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                        Your Trusted Partner for <span className="text-primary-600">Tax, Compliance & Financial Growth</span>
                    </h3>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Devang B. Shah & Co (TaxMile.in) is a professional tax consultancy firm providing reliable, compliant, and practical solutions in Income Tax, GST, TDS, Accounting, Investments, and Business Registrations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                        <div key={index} className="flex items-center p-5 bg-white rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-5 shrink-0 ${item.color}`}>
                                <item.icon size={24} />
                            </div>
                            <span className="text-lg font-semibold text-slate-800">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};
