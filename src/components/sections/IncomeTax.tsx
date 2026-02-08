import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { FileText, Shield, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { SEO } from '../SEO';

export const IncomeTax: React.FC = () => {
  return (
    <SectionContainer title="Income Tax Services">
      <SEO
        title="Income Tax Services"
        description="Comprehensive Income Tax filing, rectification, assessment, and planning services for individuals, professionals, and businesses."
        keywords="Income Tax Filing, ITR Return, Tax Planning, Income Tax Notice Reply, ITR-U, Tax Audit"
        canonicalUrl="/#income-tax"
      />
      <div className="space-y-6 text-slate-700">
        <p className="text-lg leading-relaxed max-w-3xl">
          We provide comprehensive Income Tax services for individuals and businesses across India, ensuring full compliance and optimal tax planning.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
              <FileText size={24} />
            </div>
            <h3 className="text-xl font-semibold text-primary-800">Filing of Income Tax Returns</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Salaried Individuals",
              "Traders",
              "Service Providers",
              "Professionals",
              "MSMEs",
              "Manufacturers",
              "Investors",
              "NRIs"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center p-2 rounded-md hover:bg-slate-50 transition-colors">
                <CheckCircle2 size={16} className="text-primary-500 mr-2 shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary-800">Assessment & Proceedings</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Shield size={18} className="text-primary-500 mr-2 mt-1 shrink-0" />
                <span className="font-medium">Assessment Proceedings u/s 143(3)</span>
              </li>
              <li className="pl-7 text-sm text-slate-600 flex items-center"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>Drafting replies to notices</li>
              <li className="pl-7 text-sm text-slate-600 flex items-center"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>Reconciliation statements</li>
              <li className="pl-7 text-sm text-slate-600 flex items-center"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>Relevant case laws</li>
              <li className="flex items-start pt-2">
                <Shield size={18} className="text-primary-500 mr-2 mt-1 shrink-0" />
                <span className="font-medium">Immunity Proceedings u/s 270AA(9)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-soft transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary-800">Other Services</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <AlertCircle size={18} className="text-indigo-500 mr-2 mt-1 shrink-0" />
                <span>ITR-U (Updated Returns) for last 5 previous years</span>
              </li>
              <li className="flex items-start">
                <FileText size={18} className="text-indigo-500 mr-2 mt-1 shrink-0" />
                <span>Rectification of Return u/s 154</span>
              </li>
              <li className="flex items-start">
                <AlertCircle size={18} className="text-indigo-500 mr-2 mt-1 shrink-0" />
                <span>Defective / Revised / Belated Return filing</span>
              </li>
              <li className="flex items-start">
                <TrendingUp size={18} className="text-indigo-500 mr-2 mt-1 shrink-0" />
                <span>Tax Planning & Management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
