import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { BookOpen, FileCheck } from 'lucide-react';
import { SEO } from '../SEO';

export const Accounting: React.FC = () => {
    return (
        <SectionContainer title="Accounting Services">
            <SEO
                title="Accounting Services"
                description="Professional accounting and bookkeeping services ensuring financial compliance and accurate record-keeping."
                keywords="Accounting Services, Bookkeeping, Financial Accounting, Compliance, Ledger Maintenance"
                canonicalUrl="/#accounting"
            />
            <div className="space-y-8 text-slate-700 h-full overflow-y-auto pr-2 pb-10">
                <div className="bg-white p-8 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                    <p className="text-lg leading-relaxed mb-8 text-slate-600">
                        We offer professional accounting services tailored to ensure financial clarity and compliance for your business.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-start p-4 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="p-3 bg-blue-50 rounded-full text-blue-600 mr-4 shrink-0">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-primary-800 mb-1">Accounting & Bookkeeping Services</h4>
                                <p className="text-slate-600">Comprehensive maintenance of financial records, ledgers, and day-to-day transactions.</p>
                            </div>
                        </li>
                        <li className="flex items-start p-4 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="p-3 bg-green-50 rounded-full text-green-600 mr-4 shrink-0">
                                <FileCheck size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-primary-800 mb-1">Compliance-focused Financial Accounting</h4>
                                <p className="text-slate-600">Ensuring all accounts meet statutory requirements and standards for seamless audits and filing.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </SectionContainer>
    );
};
