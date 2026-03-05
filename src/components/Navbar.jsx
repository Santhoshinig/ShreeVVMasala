import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Heart, ShoppingCart, User, Headset, Menu, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Navbar = () => {
    const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen } = useShop();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when location changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'HOME', to: '/#home' },
        { name: 'PRODUCTS', to: '/#products' },
        { name: 'WHY US', to: '/#why-us' },
        { name: 'TESTIMONIALS', to: '/#testimonials' },
        { name: 'ABOUT', to: '/#about' },
        { name: 'CONTACT', to: '/#contact' },
    ];

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120; // Adjusted for fixed navbar
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
            {/* Top Announcement Bar */}
            <div className="bg-maroon text-white py-2 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center text-[10px] md:text-xs font-bold tracking-widest uppercase">
                    <div className="hidden md:flex gap-6">
                        <span className="hover:text-gold cursor-help transition-colors">INSTAGRAM</span>
                        <span className="hover:text-gold cursor-help transition-colors">FACEBOOK</span>
                    </div>
                    <div className="mx-auto md:mx-0 animate-pulse text-gold">
                        FREE SHIPPING + FLAT 15% OFF ON ORDERS ₹999+
                    </div>
                    <div className="hidden md:block">
                        HELPLINE: +91 98765 43210
                    </div>
                </div>
            </div>

            {/* Main Navigation Area */}
            <div className={`transition-all duration-300 ${isScrolled ? 'py-1 bg-white/80 backdrop-blur-md' : 'py-3 bg-white'}`}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">

                    {/* Logo Area */}
                    <RouterLink to="/" className="flex items-center gap-3 group">
                        <img
                            src="/LOGO SHREE VV.png"
                            alt="Shree VV Masala Logo"
                            className={`transition-all duration-500 object-contain ${isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-18'}`}
                        />
                        <div className="block">
                            <div className="text-maroon font-serif text-lg sm:text-xl md:text-2xl font-black tracking-tighter leading-none mt-1">
                                SHREE <span className="text-gold italic">VV</span>
                                <span className="text-[8px] sm:text-[10px] font-sans tracking-[0.5em] uppercase text-stone-400 block mt-0.5 sm:mt-1">Masala</span>
                            </div>
                        </div>
                    </RouterLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavHashLink
                                key={link.to}
                                to={link.to}
                                scroll={el => scrollWithOffset(el)}
                                className="text-stone-700 hover:text-maroon text-[13px] font-black tracking-[0.15em] transition-all relative group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                            </NavHashLink>
                        ))}
                    </nav>

                    {/* Actions Area */}
                    <div className="flex items-center gap-4 md:gap-7">
                        <div className="flex items-center gap-4 md:gap-6 border-r border-stone-100 pr-4 md:pr-6">
                            <button
                                onClick={() => setIsWishlistOpen(true)}
                                className="text-stone-700 hover:text-maroon transition-all relative group hover:scale-110"
                            >
                                <Heart size={22} />
                                <span className="absolute -top-2 -right-2 bg-gold text-maroon text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">{wishlistCount}</span>
                            </button>

                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="text-stone-700 hover:text-maroon transition-all relative group hover:scale-110"
                            >
                                <ShoppingCart size={22} />
                                <span className="absolute -top-2 -right-2 bg-maroon text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">{cartCount}</span>
                            </button>

                            <button className="hidden sm:flex text-stone-700 hover:text-maroon transition-all group hover:scale-110">
                                <User size={22} />
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-maroon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>

                        <NavHashLink
                            smooth
                            to="/#contact"
                            scroll={el => scrollWithOffset(el)}
                            className="hidden xl:flex items-center gap-2 bg-maroon hover:bg-gold text-white hover:text-maroon px-6 py-2.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <Headset size={16} />
                            <span>SUPPORT</span>
                        </NavHashLink>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Sidebar */}
            <div className={`fixed inset-0 bg-black/60 z-[60] lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
                <div
                    className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="p-8 space-y-8">
                        <div className="flex justify-between items-center border-b border-stone-100 pb-6">
                            <span className="text-maroon font-serif font-black text-xl">NAVIGATION</span>
                            <button onClick={() => setIsMenuOpen(false)} className="text-stone-400 hover:text-maroon">
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <NavHashLink
                                    key={link.to}
                                    to={link.to}
                                    scroll={el => scrollWithOffset(el)}
                                    className="text-stone-600 hover:text-maroon text-sm font-black tracking-widest uppercase py-2 border-b border-stone-50"
                                >
                                    {link.name}
                                </NavHashLink>
                            ))}
                        </nav>
                        <div className="pt-8 block sm:hidden">
                            <button className="w-full flex items-center justify-center gap-3 bg-maroon text-white p-4 rounded-xl font-black tracking-widest text-xs">
                                <User size={18} />
                                <span>LOGIN / REGISTER</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
