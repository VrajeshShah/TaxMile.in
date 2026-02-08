import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  navItems: string[];
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, navItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-soft z-50 flex items-center justify-between px-4 md:px-8 transition-all duration-300">
      {/* Brand */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('Home')}>
        <img
          src="/logo.png"
          alt="Devang B. Shah & Co Logo"
          className="h-10 md:h-12 w-auto object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-primary-700 leading-none">Taxmile.in</h1>
          <span className="text-[10px] md:text-sm text-slate-500 font-medium whitespace-nowrap">by Devang B. Shah & Co</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden xl:flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveSection(item)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${activeSection === item
              ? 'bg-primary-50 text-primary-700 shadow-sm'
              : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
              }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="xl:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-4 flex flex-col gap-2 xl:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveSection(item);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeSection === item
                ? 'bg-primary-50 text-primary-700'
                : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
