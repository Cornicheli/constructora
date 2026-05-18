import { FaWhatsapp } from 'react-icons/fa';

export const WhatsappChat = () => {
    return (
        <a
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:shadow-xl"
            href="http://wa.me/541136821653"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp">
            <FaWhatsapp size={28} />
        </a>
    );
};
