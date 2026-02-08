import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { Phone, Mail, MapPin, Clock, Award, Building2, ExternalLink } from 'lucide-react';
import { SEO } from '../SEO';

export const Contact: React.FC = () => {
    return (
        <SectionContainer title="Contact Us" className="md:!pt-20">
            <SEO
                title="Contact Us"
                description="Contact Devang B. Shah & Co (TaxMile.in) for expert tax consultancy. Call 8460877626 or visit our office in Vadodara."
                keywords="Contact Tax Consultant, TaxMile Contact, Devang B. Shah Number, Tax Consultant Vadodara Address"
                canonicalUrl="/#contact"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full overflow-y-auto pr-2 pb-20">
                {/* Contact Information Card */}
                <div className="bg-white p-8 rounded-xl shadow-card border border-slate-100 space-y-8">

                    {/* Devang B. Shah */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary-800">Devang B. Shah</h3>
                                <p className="text-sm text-slate-500 font-medium">Accountant & Tax Consultant</p>
                            </div>
                        </div>
                        <div className="pl-14 space-y-1 text-slate-600 text-sm leading-relaxed">
                            <p>Post Graduate Certification in Finance (Taxation Laws)</p>
                            <p>Direct Tax Laws & Practice</p>
                            <p className="font-semibold text-primary-700 mt-1">Practising Since: 2018</p>
                            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100">
                                <Phone size={14} className="text-slate-400" />
                                <a href="tel:+918460877626" className="text-primary-600 font-medium hover:underline">8460877626</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={14} className="text-slate-400" />
                                <a href="mailto:Shahdevang1995@gmail.com" className="text-primary-600 font-medium hover:underline">Shahdevang1995@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100"></div>

                    {/* Mansi Devang Shah */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-pink-50 rounded-lg text-pink-600">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary-800">Mansi Devang Shah</h3>
                                <p className="text-sm text-slate-500 font-medium">B.Com (Accountant)</p>
                            </div>
                        </div>
                        <div className="pl-14 space-y-1 text-slate-600 text-sm leading-relaxed">
                            <p className="font-semibold text-primary-700 mt-1">Practising Since: 2023</p>
                            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100">
                                <Mail size={14} className="text-slate-400" />
                                <a href="mailto:Mansishah271097@gmail.com" className="text-primary-600 font-medium hover:underline">Mansishah271097@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Office & Firm Details Card */}
                <div className="bg-white p-8 rounded-xl shadow-card border border-slate-100 space-y-8">
                    {/* Firm Registration Details */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-50 rounded-lg text-slate-700">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-primary-800">Devang B. Shah & Co</h3>
                        </div>
                        <div className="pl-14 space-y-2 text-sm text-slate-600">
                            <div className="p-3 bg-slate-50 rounded border border-slate-200">
                                <p><span className="font-semibold text-slate-700">MSME Reg. No:</span> UDYAM-GJ-24-0015025</p>
                                <p><span className="font-semibold text-slate-700">Prof. Tax Reg No:</span> PEC020309162</p>
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <MapPin size={20} className="text-red-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-slate-800 mb-1">Regd Office</h4>
                                <a
                                    href="https://maps.app.goo.gl/Pn9tsyrCGxyBMAxh6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-600 leading-relaxed text-sm hover:text-primary-600 hover:underline block group"
                                >
                                    F-10 Nandashray Enclave, Nr Poonam Complex,<br />
                                    Kaldarshan Char Rasta, Waghodia Road,<br />
                                    Vadodara – 390019
                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 mt-2 group-hover:text-primary-700">
                                        View on Google Maps <ExternalLink size={12} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Timing */}
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <Clock size={20} className="text-orange-500 mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-slate-800 mb-1">Office Timing</h4>
                                <div className="text-slate-600 space-y-1 text-sm">
                                    <p>10:30 AM to 1:00 PM</p>
                                    <p>3:00 PM to 7:30 PM</p>
                                    <p className="text-red-500 font-medium italic mt-2">(Sunday Closed)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
