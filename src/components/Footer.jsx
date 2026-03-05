import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <footer className="bg-brown-dark text-white py-20 border-t border-gold/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Col */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/LOGO SHREE VV.png" alt="Shree VV Masala Logo" className="h-16 w-auto object-contain brightness-110" />
                            <h3 className="text-gold font-serif text-2xl font-bold leading-none uppercase">SHREE VV <br /><span className="text-white text-lg">MASALA</span></h3>
                        </div>
                        <p className="text-stone-400 font-light leading-relaxed mb-8">
                            Preserving the authentic taste of South Indian heritage through pure and natural spices.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-brown-dark transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6 font-bold uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-4 text-stone-400 font-bold uppercase text-[10px] tracking-widest">
                            <li><NavHashLink smooth to="/#about" scroll={el => scrollWithOffset(el)} className="hover:text-gold transition-colors">Our Story</NavHashLink></li>
                            <li><NavHashLink smooth to="/#products" scroll={el => scrollWithOffset(el)} className="hover:text-gold transition-colors">Products</NavHashLink></li>
                            <li><NavHashLink smooth to="/#why-us" scroll={el => scrollWithOffset(el)} className="hover:text-gold transition-colors">Why Choose Us</NavHashLink></li>
                            <li><NavHashLink smooth to="/#testimonials" scroll={el => scrollWithOffset(el)} className="hover:text-gold transition-colors">Testimonials</NavHashLink></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6 font-bold uppercase tracking-wider">Popular Spices</h4>
                        <ul className="space-y-4 text-stone-400 font-bold uppercase text-[10px] tracking-widest">
                            <li>Turmeric Powder</li>
                            <li>Chicken Masala</li>
                            <li>Fish Fry Masala</li>
                            <li>Idly Podi</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6 font-bold uppercase tracking-wider">Stay Connected</h4>
                        <p className="text-stone-400 font-medium mb-6 text-xs uppercase tracking-tight">Join our mailing list for traditional recipes and spice secrets.</p>
                        <div className="flex bg-white/5 rounded-xl border border-white/10 p-1">
                            <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none px-4 flex-grow text-xs font-bold uppercase tracking-widest" />
                            <button className="bg-gold text-brown-dark px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all hover:bg-white">Join</button>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 text-center text-stone-500 text-xs font-bold uppercase tracking-widest opacity-60">
                    <p>© 2026 Shree VV Masala. All Rights Reserved. Crafted with ❤️ for Pure Taste.</p>
                    <p className="mt-2 text-[8px] opacity-40">Kanishka Home Foods</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
