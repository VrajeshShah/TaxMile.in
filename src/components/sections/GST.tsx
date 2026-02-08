import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { Building2, AlertTriangle, Undo2, BadgeIndianRupee, FileSpreadsheet, FileText, Scale, CheckCircle2 } from 'lucide-react';
import { SEO } from '../SEO';

export const GST: React.FC = () => {
    return (
        <SectionContainer title="GST Services">
            <SEO
                title="GST Services"
                description="Expert GST registration, GSTR filing, reconciliation, annual returns (GSTR-9/9C), and notice handling services."
                keywords="GST Registration, GSTR Filing, GSTR 9, GST Refund, GST Notice, GST Compliance"
                canonicalUrl="/#gst"
            />
            <div className="space-y-6 text-slate-700 h-full overflow-y-auto pr-2 pb-20">
                <p className="text-lg leading-relaxed max-w-3xl">
                    End-to-end Goods & Services Tax (GST) compliance, from registration to annual returns and litigation support.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Registration & Filing */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">Registration & Filing</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                "GST Registration (Regular, Composition, Rule 14A)",
                                "GSTR-1 & GSTR-3B Filing",
                                "GSTR 2A & 2B Reconciliation",
                                "QRMP Scheme & CMP-08",
                                "GSTR-4 Annual Return",
                                "GSTR-9 & 9C Annual Returns"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <CheckCircle2 size={16} className="text-green-600 mr-2 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Notices & Litigation */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                                <AlertTriangle size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">Notices & Litigation</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <Scale size={16} className="text-amber-500 mr-2 mt-1 shrink-0" />
                                <span>Reply to Show Cause Notices (SCN)</span>
                            </li>
                            <li className="flex items-start">
                                <Scale size={16} className="text-amber-500 mr-2 mt-1 shrink-0" />
                                <span>GST Cancellation & Revocation</span>
                            </li>
                            <li className="flex items-start">
                                <Scale size={16} className="text-amber-500 mr-2 mt-1 shrink-0" />
                                <span>Departmental Audit Support</span>
                            </li>
                        </ul>
                    </div>

                    {/* Refunds */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                                <BadgeIndianRupee size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">GST Refunds</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                "Inverted Duty Structure Refund",
                                "Export Refund (LUT)",
                                "Electronic Cash Ledger Refund"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <Undo2 size={16} className="text-emerald-500 mr-2 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Other Services */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                <FileText size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">Others</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FileSpreadsheet size={16} className="text-purple-500 mr-2 mt-1 shrink-0" />
                                <span>E-Way Bill Generation</span>
                            </li>
                            <li className="flex items-start">
                                <FileSpreadsheet size={16} className="text-purple-500 mr-2 mt-1 shrink-0" />
                                <span>ITC Management</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
