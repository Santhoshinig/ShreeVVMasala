import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-maroon rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    {/* Info Side */}
                    <div className="lg:w-2/5 p-12 bg-gradient-to-br from-maroon to-brown-dark text-white">
                        <h2 className="text-4xl font-serif mb-8 text-gold">Get in Touch</h2>
                        <p className="text-white/70 mb-12 text-lg">
                            Have questions about our products or want to partner with us? Reach out anytime.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                                    <Phone className="text-gold" />
                                </div>
                                <div>
                                    <p className="text-gold/60 text-sm font-bold uppercase tracking-widest">Call Us</p>
                                    <p className="text-xl font-serif">+91 90420 81692</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                                    <Mail className="text-gold" />
                                </div>
                                <div>
                                    <p className="text-gold/60 text-sm font-bold uppercase tracking-widest">Email Us</p>
                                    <p className="text-xl font-serif">kanishkahomefoods@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                                    <MapPin className="text-gold" />
                                </div>
                                <div>
                                    <p className="text-gold/60 text-sm font-bold uppercase tracking-widest">Visit Us</p>
                                    <p className="text-lg leading-tight font-serif">#456, Moola Pillaiyar Koil Street, Kandampatty, Salem-636 005.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-3/5 p-12 bg-white">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-maroon font-bold text-sm uppercase tracking-wider">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 rounded-xl bg-stone-50 border-2 border-stone-100 focus:border-gold outline-none transition-all font-sans"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-maroon font-bold text-sm uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full px-6 py-4 rounded-xl bg-stone-50 border-2 border-stone-100 focus:border-gold outline-none transition-all font-sans"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-maroon font-bold text-sm uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 rounded-xl bg-stone-50 border-2 border-stone-100 focus:border-gold outline-none transition-all font-sans"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-maroon font-bold text-sm uppercase tracking-wider">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="How can we help you?"
                                    className="w-full px-6 py-4 rounded-xl bg-stone-50 border-2 border-stone-100 focus:border-gold outline-none transition-all font-sans"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gold text-maroon font-bold py-5 rounded-xl uppercase tracking-[0.2em] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                            >
                                <Send size={18} />
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
