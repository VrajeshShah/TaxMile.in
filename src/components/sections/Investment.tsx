import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { TrendingUp, PieChart, Coins, BarChart3, LineChart, Wallet, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SEO } from '../SEO';

export const Investment: React.FC = () => {
    return (
        <SectionContainer title="Investment Services">
            <SEO
                title="Investment Services"
                description="Strategic investment planning including Mutual Funds (SIP/Lumpsum), Portfolio Management, and Tax harvesting."
                keywords="Mutual Funds, SIP, Portfolio Management, Tax Harvesting, Investment Planning, Wealth Creation"
                canonicalUrl="/#investment"
            />
            <div className="space-y-6 text-slate-700 h-full overflow-y-auto pr-2 pb-20">
                <p className="text-lg leading-relaxed max-w-3xl">
                    Grow your wealth with our expert investment advisory services. We focus on risk-adjusted returns and long-term financial goals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Wealth Creation */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">Wealth Creation</h3>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <li className="flex items-center p-3 bg-slate-50 rounded-lg">
                                <Coins size={20} className="text-emerald-500 mr-3 shrink-0" />
                                <span className="font-medium">Mutual Funds (SIP)</span>
                            </li>
                            <li className="flex items-center p-3 bg-slate-50 rounded-lg">
                                <Wallet size={20} className="text-emerald-500 mr-3 shrink-0" />
                                <span className="font-medium">Lumpsum Investment</span>
                            </li>
                            <li className="flex items-center p-3 bg-slate-50 rounded-lg">
                                <ArrowUpRight size={20} className="text-emerald-500 mr-3 shrink-0" />
                                <span className="font-medium">SWP & STP</span>
                            </li>
                            <li className="flex items-center p-3 bg-slate-50 rounded-lg">
                                <ShieldCheck size={20} className="text-emerald-500 mr-3 shrink-0" />
                                <span className="font-medium">NJ E-Wealth Account</span>
                            </li>
                        </ul>
                    </div>

                    {/* Analysis & Optimization */}
                    <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-violet-50 rounded-lg text-violet-600">
                                <PieChart size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-800">Portfolio Optimization</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <BarChart3 size={20} className="text-violet-500 mr-3 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-medium text-slate-800">Advanced Scheme Selection</h4>
                                    <p className="text-sm text-slate-500">Using Alpha, Beta, SD, & Sharpe Ratio analytics</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <LineChart size={20} className="text-violet-500 mr-3 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-medium text-slate-800">Tax & Loss Harvesting</h4>
                                    <p className="text-sm text-slate-500">Strategies to minimize tax liability on gains</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <PieChart size={20} className="text-violet-500 mr-3 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-medium text-slate-800">Portfolio Rebalancing</h4>
                                    <p className="text-sm text-slate-500">Periodic review to align with financial goals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
