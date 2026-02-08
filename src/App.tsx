import { useState } from 'react'
import { Header } from './layout/Header'
import { SectionContainer } from './components/SectionContainer'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './components/sections/Home';
import { IncomeTax } from './components/sections/IncomeTax';
import { GST } from './components/sections/GST';
import { TDS } from './components/sections/TDS';
import { Registrations } from './components/sections/Registrations';
import { CMA } from './components/sections/CMA';
import { Investment } from './components/sections/Investment';
import { EPF } from './components/sections/EPF';
import { Accounting } from './components/sections/Accounting';
import { Contact } from './components/sections/Contact';
import { FloatingCTA } from './components/FloatingCTA';

const NAV_ITEMS = [
  "Home",
  "Income Tax",
  "GST",
  "TDS & TCS",
  "Registrations",
  "CMA & Net Worth",
  "Investment",
  "EPF",
  "Accounting",
  "Contact"
];

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return <Home key="Home" />;

      case "Income Tax":
        return <IncomeTax key="Income Tax" />;
      case "GST":
        return <GST key="GST" />;
      case "TDS & TCS":
        return <TDS key="TDS & TCS" />;
      case "Registrations":
        return <Registrations key="Registrations" />;
      case "CMA & Net Worth":
        return <CMA key="CMA & Net Worth" />;
      case "Investment":
        return <Investment key="Investment" />;
      case "EPF":
        return <EPF key="EPF" />;
      case "Accounting":
        return <Accounting key="Accounting" />;
      case "Contact":
        return <Contact key="Contact" />;
      default:
        return (
          <SectionContainer key={activeSection} title={activeSection}>
            <div className="flex flex-col items-center justify-center h-64 text-slate-400">
              <p className="text-lg">Detailed content for {activeSection} will be implemented in the next iteration.</p>
            </div>
          </SectionContainer>
        );
    }
  };

  return (
    <HelmetProvider>
      <div className="h-screen w-screen flex flex-col overflow-hidden bg-white">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} navItems={NAV_ITEMS} />

        <main className="flex-grow relative overflow-hidden pt-4 pb-4">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>

        <FloatingCTA />
        <footer className="h-8 bg-slate-50 border-t border-slate-200 flex items-center justify-center text-xs text-slate-400 shrink-0">
          &copy; {new Date().getFullYear()} Devang B. Shah & Co. All rights reserved.
        </footer>
      </div>
    </HelmetProvider>
  )
}

export default App
