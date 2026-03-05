import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const whatsappNumber = "+919042081692";
    const message = "Hi Shree VV Masala, I'd like to know more about your products!";

    return (
        <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer group"
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 bg-white text-stone-800 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-xl pointer-events-none">
                Chat with us!
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
