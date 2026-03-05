import { motion } from 'framer-motion';

const OfferBanner = () => {
    return (
        <div className="relative h-full w-full bg-white overflow-hidden flex flex-col md:flex-row items-center pt-20 md:pt-0">
            {/* Background decorative texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
                {/* Left Side: Offer Main (7 cols) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="lg:col-span-7 text-center md:text-left"
                >
                    <div className="flex flex-wrap justify-center md:justify-start items-baseline gap-4 mb-4">
                        <h2 className="text-6xl md:text-8xl font-black text-red-600 tracking-tighter uppercase">FREE</h2>
                        <span className="text-4xl md:text-6xl font-serif text-stone-800 tracking-tighter uppercase italic">+ 15%</span>
                    </div>

                    <div className="flex justify-center md:justify-start gap-12 mb-8">
                        <div className="text-center">
                            <p className="text-2xl md:text-3xl font-black text-stone-900 uppercase tracking-tighter leading-none border-b-4 border-gold pb-1">DELIVERY</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl md:text-3xl font-black text-stone-900 uppercase tracking-tighter leading-none border-b-4 border-gold pb-1">FLAT OFF</p>
                        </div>
                    </div>

                    <div className="mb-10">
                        <p className="text-3xl md:text-5xl font-serif text-maroon italic mb-2 tracking-tight">ON ORDERS ABOVE</p>
                        <h4 className="text-5xl md:text-7xl font-black text-gold tracking-tighter italic">₹999/-</h4>
                    </div>

                    <div className="flex flex-col items-center md:items-start group">
                        <p className="text-stone-500 font-bold uppercase tracking-[0.2em] text-xs mb-3">use this coupon code</p>
                        <div className="relative">
                            <div className="bg-maroon text-white px-10 py-4 rounded-2xl shadow-2xl transition-all duration-300 group-hover:bg-brown-dark">
                                <p className="text-4xl md:text-5xl font-black tracking-widest">SVV15</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Products (5 cols) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="lg:col-span-5 flex flex-col items-center justify-center space-y-4"
                >
                    <div className="relative flex items-end justify-center pt-20">
                        <img
                            src="/products/chilli 500.png"
                            className="w-48 md:w-72 z-10 transform -rotate-6 transition-transform hover:rotate-0 drop-shadow-2xl"
                            alt="Chilli Powder"
                        />
                        <img
                            src="/products/turmeric 500.png"
                            className="w-48 md:w-72 -ml-20 rounded-lg relative z-0 transform rotate-6 transition-transform hover:rotate-0 drop-shadow-2xl"
                            alt="Turmeric Powder"
                        />
                    </div>
                    <div className="bg-gold/10 px-8 py-3 rounded-full border border-gold/20 mt-8">
                        <span className="text-maroon font-serif italic text-2xl">Taste of Tradition</span>
                    </div>
                </motion.div>

            </div>

            <p className="hidden md:block absolute bottom-8 right-8 text-[10px] text-stone-300 font-bold uppercase tracking-[0.5em] transform rotate-90 origin-right">Shree VV Masala Tradition</p>
        </div>
    );
};

export default OfferBanner;
