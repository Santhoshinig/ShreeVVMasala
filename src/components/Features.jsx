import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Flame, PackageCheck } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Leaf className="w-10 h-10" />,
            title: "100% Pure Ingredients",
            desc: "Sourced directly from the finest farms across India."
        },
        {
            icon: <ShieldCheck className="w-10 h-10" />,
            title: "No Artificial Colors",
            desc: "Completely natural, preserving the true essence of spices."
        },
        {
            icon: <Flame className="w-10 h-10" />,
            title: "Traditional Grinding",
            desc: "Cold grinding process to keep aroma and oils intact."
        },
        {
            icon: <PackageCheck className="w-10 h-10" />,
            title: "Hygienically Packed",
            desc: "Sealed with care in our state-of-the-art facility."
        }
    ];

    return (
        <section id="why-us" className="py-24 bg-brown-dark text-white relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-gold/20 mb-6 transition-all duration-500 group-hover:bg-gold group-hover:scale-110 shadow-lg">
                                <div className="text-gold group-hover:text-maroon transition-colors duration-500">
                                    {f.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-serif text-gold mb-3 group-hover:text-white transition-colors">
                                {f.title}
                            </h3>
                            <p className="text-stone-400 font-light leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
