import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { Building2, Globe, Users, Briefcase, FileBadge, ScrollText, CheckCircle2 } from 'lucide-react';
import { SEO } from '../SEO';

export const Registrations: React.FC = () => {
    return (
        <SectionContainer title="Registrations & Incorporation">
            <SEO
                title="Business Registration Services"
                description="Company incorporation and registration services: Private Limited, LLP, Partnership, HUF, MSME, and Import Export Code (IEC)."
                keywords="Company Registration, Private Limited, LLP Incorporation, MSME Registration, IEC Code, Partnership Firm"
                canonicalUrl="/#registrations"
            />
            <div className="space-y-6 text-slate-700 h-full overflow-y-auto pr-2 pb-20">
                <p className="text-lg leading-relaxed max-w-3xl">
                    We assist in setting up your business entity with the right legal structure and necessary registrations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Entity Incorporation */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">Entity Incorporation</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center p-2 rounded hover:bg-slate-50 transition-colors">
                                <Building2 size={18} className="text-indigo-500 mr-3 shrink-0" />
                                <span className="font-medium">Private Limited Company</span>
                            </li>
                            <li className="flex items-center p-2 rounded hover:bg-slate-50 transition-colors">
                                <Users size={18} className="text-indigo-500 mr-3 shrink-0" />
                                <span className="font-medium">Limited Liability Partnership (LLP)</span>
                            </li>
                            <li className="flex items-center p-2 rounded hover:bg-slate-50 transition-colors">
                                <Users size={18} className="text-indigo-500 mr-3 shrink-0" />
                                <span className="font-medium">Partnership Firm</span>
                            </li>
                            <li className="flex items-center p-2 rounded hover:bg-slate-50 transition-colors">
                                <Users size={18} className="text-indigo-500 mr-3 shrink-0" />
                                <span className="font-medium">HUF Incorporation</span>
                            </li>
                        </ul>
                    </div>

                    {/* Commercial Registrations */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                                <FileBadge size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">Commercial Registrations</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                { text: "MSME / Udyam Registration", icon: Briefcase },
                                { text: "Import Export Code (IEC)", icon: Globe },
                                { text: "Shop & Establishment", icon: Building2 }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center p-2 rounded hover:bg-slate-50 transition-colors">
                                    <item.icon size={18} className="text-teal-500 mr-3 shrink-0" />
                                    <span className="font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Other Documents */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
                                <ScrollText size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">Other Documents</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center p-2 rounded hover:bg-slate-50 transition-colors">
                                <ScrollText size={18} className="text-rose-500 mr-3 shrink-0" />
                                <span className="font-medium">AOP Deed Drafting</span>
                            </li>
                            <li className="flex items-center p-2 rounded hover:bg-slate-50 transition-colors">
                                <CheckCircle2 size={18} className="text-rose-500 mr-3 shrink-0" />
                                <span className="font-medium">Turnover Certificate</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
