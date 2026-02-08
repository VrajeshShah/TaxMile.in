import { SectionContainer } from '../SectionContainer';
import { FileSignature, Users, UserCheck, FileText, Landmark, ScrollText, IndianRupee } from 'lucide-react';
import { SEO } from '../SEO';

export const EPF: React.FC = () => {
    return (
        <SectionContainer title="EPF Services (Employees Only)">
            <SEO
                title="EPF Services"
                description="Employee Provident Fund (EPF) services: Advance Withdrawal, Final Settlement, KYC, Nomination, and Pension Payment Order (PPO)."
                keywords="EPF Withdrawal, PF Claim, UAN KYC, Form 15G, PF Settlement, Pension PPO"
                canonicalUrl="/#epf"
            />
            <div className="space-y-6 text-slate-700 h-full overflow-y-auto pr-2 pb-20">
                <p className="text-lg leading-relaxed max-w-3xl">
                    Dedicated services for employees to manage their Provident Fund (PF) claims, withdrawals, and compliance issues.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Claims & Withdrawals */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                                <IndianRupee size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">Claims & Withdrawals</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <Landmark size={20} className="text-orange-500 mr-3 shrink-0" />
                                <span className="font-medium text-slate-700">EPF Advance Withdrawal</span>
                            </li>
                            <li className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <FileText size={20} className="text-orange-500 mr-3 shrink-0" />
                                <span className="font-medium text-slate-700">EPF Final Settlement</span>
                            </li>
                            <li className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <ScrollText size={20} className="text-orange-500 mr-3 shrink-0" />
                                <span className="font-medium text-slate-700">Pension Payment Order (PPO)</span>
                            </li>
                        </ul>
                    </div>

                    {/* KYC & Compliance */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                <UserCheck size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">KYC & Compliance</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <FileSignature size={18} className="text-blue-500 mr-3 shrink-0" />
                                <span>Tax Planning & Form 15G / 15H</span>
                            </li>
                            <li className="flex items-center">
                                <UserCheck size={18} className="text-blue-500 mr-3 shrink-0" />
                                <span>Nomination Update</span>
                            </li>
                            <li className="flex items-center">
                                <Users size={18} className="text-blue-500 mr-3 shrink-0" />
                                <span>Joint Declaration Form</span>
                            </li>
                            <li className="flex items-center">
                                <FileText size={18} className="text-blue-500 mr-3 shrink-0" />
                                <span>KYC Updation (Aadhaar/PAN/Bank)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
