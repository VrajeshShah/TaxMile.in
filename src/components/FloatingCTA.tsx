import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
    const phoneNumber = "918460877626"; // Assuming country code + number
    const whatsappMessage = "Hello, I am interested in your services.";

    // handleContactClick removed as it was unused. Navigation is handled via hrefs and direct onClick.

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            {/* WhatsApp */}
            <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
                title="Chat on WhatsApp"
            >
                <MessageCircle size={28} />
            </a>

            {/* Call */}
            <a
                href={`tel:+${phoneNumber}`}
                className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
                title="Call Us"
            >
                <Phone size={24} />
            </a>

            {/* Visit (Link to Contact or Map) */}
            <button
                onClick={() => window.location.hash = "#Contact"}
                className="flex items-center justify-center w-14 h-14 bg-slate-700 text-white rounded-full shadow-lg hover:bg-slate-800 transition-all hover:scale-110"
                title="Visit Us"
            >
                <MapPin size={24} />
            </button>
        </div>
    );
};
