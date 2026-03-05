import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/NEW EDIT.png"
                                alt="Traditional Spices"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-maroon/5 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gold/20 w-[110%] h-[110%] rounded-2xl rotate-3 -z-1"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-maroon text-4xl md:text-5xl font-serif mb-6 leading-tight">
                            A Legacy of <span className="text-gold italic">Pure Flavor</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-gold mb-8"></div>
                        <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                            Shree VV Masala brings the rich flavors of traditional South Indian kitchens to your home. Our journey began with a simple mission: to preserve the authentic taste of homemade masalas that have been passed down through generations.
                        </p>
                        <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                            Each spice is handpicked, sun-dried, and ground using traditional methods to ensure that every pinch contains the soul of the recipe. We don't just sell masalas; we share a heritage of taste.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-maroon font-serif text-3xl font-bold mb-1">100%</h4>
                                <p className="text-stone-500 uppercase tracking-wider text-xs font-bold">Pure Ingredients</p>
                            </div>
                            <div>
                                <h4 className="text-maroon font-serif text-3xl font-bold mb-1">25+</h4>
                                <p className="text-stone-500 uppercase tracking-wider text-xs font-bold">Traditional Blends</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
