import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-stone-50 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-maroon/5 rounded-full blur-3xl -mr-48 -mb-48"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold font-bold tracking-[0.2em] uppercase text-sm"
                    >
                        Real Experiences
                    </motion.span>
                    <h2 className="text-maroon text-4xl md:text-5xl font-serif mt-2">What Our Chefs Say</h2>
                    <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white p-10 rounded-3xl shadow-xl border border-stone-100 max-w-md relative hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="absolute top-6 right-6 text-gold opacity-10">
                                <Quote size={60} />
                            </div>
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                                ))}
                            </div>
                            <p className="text-stone-600 italic text-lg mb-8 relative z-10 leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-maroon to-brown-dark rounded-full flex items-center justify-center text-white font-serif text-2xl shadow-lg">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-maroon font-bold text-lg">{t.name}</h4>
                                    <p className="text-stone-400 text-sm font-medium">Verified Home Chef</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
