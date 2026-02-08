import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { LineChart, FileCheck2 } from 'lucide-react';
import { SEO } from '../SEO';

export const CMA: React.FC = () => {
    return (
        <SectionContainer title="CMA Data & Net Worth Certificate">
            <SEO
                title="CMA Data & Net Worth Certificate"
                description="Preparation of CMA Data for bank loans (CC/OD) and Net Worth Certificates for visa applications."
                keywords="CMA Data, Project Report, Net Worth Certificate, Bank Loan Documents, Visa Financial Proof"
                canonicalUrl="/#cma"
            />
            <div className="space-y-6 text-slate-700 h-full overflow-y-auto pr-2 pb-10">
                <div className="bg-white p-8 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                            <LineChart size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-primary-800">CMA Data</h3>
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Credit Monitoring Arrangement</span>
                        </div>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed pl-2 md:pl-20">
                        Used by banks for Cash Credit (CC), Overdraft (OD), and MSME loans. Also known as Projection Report. We prepare detailed and realistic financial projections to support your funding requirements.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-green-50 rounded-full text-green-600">
                            <FileCheck2 size={32} />
                        </div>
                        <h3 className="text-2xl font-semibold text-primary-800">Net Worth Certificate</h3>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed pl-2 md:pl-20">
                        Used primarily for Visa applications, detailing assets and liabilities to reflect net worth. We ensure accurate valuation and presentation of your financial standing.
                    </p>
                </div>
            </div>
        </SectionContainer>
    );
};
