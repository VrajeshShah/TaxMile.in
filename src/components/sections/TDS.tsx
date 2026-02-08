import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { FileDigit } from 'lucide-react';
import { SEO } from '../SEO';

export const TDS: React.FC = () => {
    return (
        <SectionContainer title="TDS & TCS Services">
            <SEO
                title="TDS & TCS Services"
                description="Reliable TDS & TCS return filing for Salary (24Q), Non-Salary (26Q), NRI Payments (27Q), and TCS (27EQ). TAN & PAN services."
                keywords="TDS Return Filing, 24Q, 26Q, 27Q, TCS Return, TAN Registration, Form 16"
                canonicalUrl="/#tds"
            />
            <div className="space-y-6 text-slate-700 h-full overflow-y-auto pr-2 pb-10">
                <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                            <FileDigit size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-800">TDS Returns & Compliance</h3>
                    </div>
                    <ul className="space-y-3">
                        {[
                            "24Q – Salary TDS",
                            "26Q – Non-Salary TDS",
                            "27Q – TDS on payments to NRI",
                            "27EQ – TCS Return",
                            "26QB – TDS on sale of property above ₹50 Lakhs",
                            "TAN & PAN Services"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center p-3 rounded-md hover:bg-slate-50 transition-colors">
                                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                                <span className="text-lg font-medium text-slate-800">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionContainer>
    );
};
