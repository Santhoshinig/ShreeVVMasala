import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star, Minus, Plus, Share2, Twitter, Facebook,
    CheckCircle, Truck, Tag, ShieldCheck, ArrowLeft,
    ChevronRight, Heart, ShoppingCart, Clock
} from 'lucide-react';
import { products } from '../data';
import { useShop } from '../context/ShopContext';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, toggleWishlist, wishlist } = useShop();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedImage, setSelectedImage] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const [timeLeft, setTimeLeft] = useState("08:39:53");

    useEffect(() => {
        const timer = setInterval(() => {
            const parts = timeLeft.split(':').map(Number);
            let [h, m, s] = parts;
            if (s > 0) s--;
            else if (m > 0) { m--; s = 59; }
            else if (h > 0) { h--; m = 59; s = 59; }

            const format = (n) => n.toString().padStart(2, '0');
            setTimeLeft(`${format(h)}:${format(m)}:${format(s)}`);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        const p = products.find(item => item.id === parseInt(id));
        if (p) {
            setProduct(p);
            setSelectedSize(p.sizes?.[0] || "");
            setSelectedImage("");
        }
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="min-h-screen flex items-center justify-center font-serif text-maroon text-2xl">Loading...</div>;

    // Dynamic Price Logic based on selected size
    const currentPrice = product.sizePrices?.[selectedSize]?.price || product.price;
    const currentMrp = product.sizePrices?.[selectedSize]?.mrp || product.mrp;
    const discount = Math.round(((currentMrp - currentPrice) / currentMrp) * 100);

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6 py-4 max-w-7xl">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm text-stone-500 gap-2 mb-8 mt-4">
                    <Link to="/" className="hover:text-maroon transition-colors text-xs font-bold uppercase tracking-widest text-[#B51111]">Home</Link>
                    <ChevronRight size={14} className="text-stone-400" />
                    <span className="text-maroon font-bold uppercase tracking-widest text-xs text-[#B51111]">{product.name}</span>
                    {selectedSize && (
                        <>
                            <ChevronRight size={14} className="text-stone-400" />
                            <span className="text-stone-400 font-bold uppercase tracking-widest text-[10px]">{selectedSize}</span>
                        </>
                    )}
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left: Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="aspect-square bg-white rounded-[2rem] overflow-hidden border border-stone-200 flex items-center justify-center p-8 relative shadow-sm">
                            <motion.img
                                layoutId={`product-image-${product.id}`}
                                src={selectedImage || product.image}
                                alt={product.name}
                                className="w-full h-full object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute top-6 left-6 bg-[#C9A227] text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                                Premium Quality
                            </div>
                        </div>

                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {[
                                product.image,
                                "/FULL PRODUCTS.png",
                                "/LOGO SHREE VV.png",
                                "/NEW EDIT.png"
                            ].map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedImage(img)}
                                    className={`flex-shrink-0 w-24 h-24 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-center p-2 ${(selectedImage === img || (!selectedImage && i === 0))
                                        ? 'border-[#C9A227] bg-white'
                                        : 'border-stone-100 hover:border-stone-300'
                                        }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-contain opacity-90" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {/* Title and Reviews */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-1"
                        >
                            <h1 className="text-3xl sm:text-[34px] font-medium text-stone-900 tracking-tight leading-snug">{product.name}</h1>
                            <div className="flex items-center gap-2 pt-1">
                                <div className="flex text-[#288b85] gap-[1px]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1.5} />
                                    ))}
                                </div>
                                <span className="text-[13px] text-stone-700">{product.reviewsCount} reviews</span>
                            </div>
                        </motion.div>

                        {/* Pricing */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="pt-2"
                        >
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-stone-900">
                                <span className="text-[28px] leading-none mb-0.5">₹ {currentPrice.toFixed(2)}</span>
                                <span className="text-[17px] text-stone-500 line-through decoration-stone-500 decoration-[1px] ml-1 pt-1">MRP : ₹ {currentMrp.toFixed(2)}</span>
                                <span className="text-[13px] text-stone-700 ml-1 pt-1">(Inclusive of all taxes)</span>
                                <span className="ml-1 bg-blue-500 text-white text-[10px] font-medium px-2 py-0.5 rounded shadow-sm pt-1">
                                    {discount}% OFF
                                </span>
                            </div>
                            <p className="text-[#333] text-[15px] font-normal mt-2">Shipping calculated at checkout.</p>
                        </motion.div>

                        {/* Size Selection */}
                        <div className="space-y-4 pt-6 border-t border-stone-100 mt-6">
                            <p className="font-bold text-[#333] text-base">Size: {selectedSize}</p>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes?.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-5 py-2 rounded-full transition-all font-bold text-sm ${selectedSize === size
                                            ? 'bg-[#111] text-white border border-[#111]'
                                            : 'bg-white text-[#111] border border-stone-300 hover:border-[#111]'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="space-y-3 pt-4">
                            <p className="font-bold text-[#333] text-sm">Quantity</p>
                            <div className="flex items-center w-[140px] border border-stone-300 rounded-full bg-white h-12">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 h-full text-stone-500 hover:text-maroon transition-colors"
                                >
                                    <Minus size={18} />
                                </button>
                                <input
                                    type="text"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                    className="w-full h-full text-center font-bold text-[#333] text-lg focus:outline-none bg-transparent"
                                />
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 h-full text-stone-500 hover:text-maroon transition-colors"
                                >
                                    <Plus size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="flex flex-col gap-3 pt-4">
                            <button
                                onClick={() => addToCart(product, quantity, selectedSize)}
                                className="w-full bg-[#D8362B] text-white font-bold text-lg py-4 rounded-full hover:bg-[#B52B21] transition-colors"
                            >
                                Add to cart
                            </button>
                            <button
                                className="w-full bg-white text-[#333] border border-[#333] font-bold text-lg py-4 rounded-full hover:bg-stone-50 transition-colors"
                            >
                                Buy It Now
                            </button>
                            <button
                                onClick={() => toggleWishlist(product)}
                                className="w-full bg-[#111] text-white font-bold text-lg py-4 rounded-full hover:bg-black transition-colors flex items-center justify-center gap-3 overflow-hidden"
                            >
                                <Heart
                                    size={20}
                                    className={`${wishlist.find(item => item.id === product.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                                />
                                Add to Wishlist
                            </button>
                        </div>

                        {/* Payment Options */}
                        <div className="pt-6">
                            <p className="text-sm text-stone-600 mb-3 font-medium">Checkout safely using your preferred payment method</p>
                            <div className="flex items-center gap-2">
                                <div className="border border-stone-200 px-2 py-1 rounded bg-white"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" /></div>
                                <div className="border border-stone-200 px-2 py-1 rounded bg-white"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-4" /></div>
                                <div className="border border-stone-200 px-2 py-1 rounded bg-white"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_%28GPay%29_Logo._%282020%29.svg" alt="GPay" className="h-4" /></div>
                                <div className="border border-stone-200 px-2 py-1 rounded bg-white"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="h-4" /></div>
                                <div className="border border-stone-200 px-2 py-1 rounded bg-white"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" /></div>
                            </div>
                        </div>

                        {/* Value Props */}
                        <div className="space-y-4 pt-6 mt-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-full border-2 border-[#D8362B] border-dashed flex items-center justify-center text-[#D8362B]">
                                    <Truck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#333] text-sm">Free Shipping</h4>
                                    <p className="text-[#D8362B] text-xs font-semibold">On Orders Above ₹999</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-full border-2 border-[#D8362B] border-dashed flex items-center justify-center text-[#D8362B]">
                                    <span className="text-lg font-black">%</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#333] text-sm">Exclusive Offers</h4>
                                    <p className="text-[#D8362B] text-xs font-semibold">Flat 15% Discount on Orders Above ₹999</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-full border-2 border-[#D8362B] border-dashed flex items-center justify-center text-[#D8362B]">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#333] text-sm">Secure Payment</h4>
                                    <p className="text-[#D8362B] text-xs font-semibold">100% Secure Payment</p>
                                </div>
                            </div>
                        </div>

                        {/* Share Links */}
                        <div className="pt-6 flex gap-2">
                            <button className="flex items-center gap-2 bg-[#1877F2] text-white px-3 py-1.5 rounded-sm text-xs font-bold hover:bg-[#0C5DC7] transition-colors"><Facebook size={12} fill="currentColor" /> Share</button>
                            <button className="flex items-center gap-2 bg-[#000000] text-white px-3 py-1.5 rounded-sm text-xs font-bold hover:bg-[#333] transition-colors"><Twitter size={12} fill="currentColor" /> Tweet</button>
                            <button className="flex items-center gap-2 bg-[#BD081C] text-white px-3 py-1.5 rounded-sm text-xs font-bold hover:bg-[#8C0615] transition-colors"><Star size={12} fill="currentColor" /> Pin it</button>
                        </div>
                    </motion.div>
                </div>

                {/* Product Details Tabs */}
                <div className="mt-32">
                    <div className="flex justify-start md:justify-center border-b-[3px] border-stone-50 mb-12 gap-8 lg:gap-12 overflow-x-auto overflow-y-hidden scrollbar-hide flex-nowrap w-full px-2">
                        {["description", "ingredients", "instructions"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 text-xs font-black uppercase tracking-[0.25em] transition-all relative shrink-0 whitespace-nowrap ${activeTab === tab
                                    ? 'text-[#288b85]'
                                    : 'text-stone-300 hover:text-stone-500'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto px-6">
                        <AnimatePresence mode="wait">
                            {activeTab === "description" && (
                                <motion.div
                                    key="desc"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="text-center space-y-4">
                                        <h3 className="text-4xl font-serif text-maroon">Signature Flavour Profile</h3>
                                        <div className="w-16 h-1 bg-gold mx-auto"></div>
                                    </div>
                                    <p className="leading-relaxed text-xl text-stone-600 font-serif text-center italic">
                                        "{product.description}"
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                                        <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-stone-100 space-y-4">
                                            <div className="w-12 h-12 bg-maroon rounded-2xl flex items-center justify-center text-white font-serif italic text-2xl">S</div>
                                            <h4 className="font-black text-maroon uppercase tracking-widest text-sm">Safe and Simple</h4>
                                            <p className="text-stone-500 text-sm leading-relaxed">Perfect for home cooking, our blends are designed to make restaurant-quality dishes easy to achieve in any kitchen.</p>
                                        </div>
                                        <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-stone-100 space-y-4">
                                            <div className="w-12 h-12 bg-gold rounded-2xl flex items-center justify-center text-maroon font-serif italic text-2xl">Q</div>
                                            <h4 className="font-black text-maroon uppercase tracking-widest text-sm">Quality Ingredients</h4>
                                            <p className="text-stone-500 text-sm leading-relaxed">Each spice is sourced from local farmers and cold-ground to ensure maximum aroma and nutrient retention.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "ingredients" && (
                                <motion.div
                                    key="ingr"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-12"
                                >
                                    <p className="text-center text-stone-500 font-bold uppercase tracking-widest text-sm">Carefully selected components for the perfect dish</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {product.ingredients?.map((ing, i) => (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.05 }}
                                                key={i}
                                                className="flex items-center gap-4 text-maroon bg-[#FDFBF7] px-8 py-5 rounded-[1.5rem] border border-stone-50"
                                            >
                                                <CheckCircle size={20} className="text-gold" />
                                                <span className="font-bold uppercase tracking-wide text-xs">{ing}</span>
                                            </motion.div>
                                        )) || <p className="text-center w-full py-12 text-stone-400">Ingredients list coming soon for this variant.</p>}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "instructions" && (
                                <motion.div
                                    key="inst"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="max-w-2xl mx-auto space-y-12"
                                >
                                    <div className="space-y-12">
                                        {product.instructions?.map((step, i) => (
                                            <div key={i} className="flex gap-10 items-start relative pb-12 last:pb-0">
                                                {i < product.instructions.length - 1 && (
                                                    <div className="absolute top-16 left-8 w-[2px] h-full bg-stone-100"></div>
                                                )}
                                                <div className="w-16 h-16 rounded-[1.5rem] bg-maroon text-white flex-shrink-0 flex items-center justify-center font-serif italic text-3xl shadow-xl shadow-maroon/20 relative z-10">
                                                    {i + 1}
                                                </div>
                                                <div className="space-y-3 pt-2">
                                                    <h4 className="font-black text-maroon uppercase tracking-widest text-sm">{step.title}</h4>
                                                    <p className="text-stone-600 leading-relaxed text-lg">{step.text}</p>
                                                </div>
                                            </div>
                                        )) || <p className="text-center py-12 text-stone-400">Recipe instructions coming soon for this variant.</p>}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-24 max-w-5xl mx-auto">
                    <h2 className="text-2xl text-[#333] mb-8 font-serif">Customers Who Bought This Also Bought</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {products.filter(p => p.id !== product.id).slice(0, 4).map((p) => {
                            const pPrice = p.sizePrices?.[p.sizes?.[0]]?.price || p.price;
                            const pMrp = p.sizePrices?.[p.sizes?.[0]]?.mrp || p.mrp;
                            const pDiscount = Math.round(((pMrp - pPrice) / pMrp) * 100);
                            return (
                                <div
                                    key={p.id}
                                    className="bg-white rounded-xl overflow-hidden border border-stone-200 transition-all duration-300 flex flex-col group hover:shadow-lg"
                                >
                                    <div className="aspect-[4/5] bg-white relative p-4 cursor-pointer flex items-center justify-center border-b border-stone-100" onClick={() => navigate(`/product/${p.id}`)}>
                                        <img src={p.image} alt={p.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute top-2 left-2 bg-[#0066FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                                            {pDiscount}% off
                                        </div>
                                    </div>
                                    <div className="p-3 sm:p-4 flex flex-col flex-grow text-left">
                                        <h4 className="text-[#333] text-sm sm:text-base h-10 overflow-hidden cursor-pointer hover:text-maroon transition-colors" onClick={() => navigate(`/product/${p.id}`)}>{p.name}</h4>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="font-bold text-[#111] text-sm">₹ {pPrice.toFixed(2)}</span>
                                            <span className="text-stone-400 line-through text-xs">MRP: ₹ {pMrp.toFixed(2)}</span>
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-1">
                                            <span className="bg-[#111] text-white text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-bold">{p.sizes?.[0] || '500g'}</span>
                                        </div>
                                        <div className="mt-auto pt-6 flex gap-2">
                                            <button onClick={() => addToCart(p, 1, p.sizes?.[0])} className="w-10 h-10 rounded-full bg-[#D8362B] text-white flex items-center justify-center hover:bg-[#B52B21] transition-transform hover:scale-105 shadow-sm">
                                                <Plus size={18} strokeWidth={2.5} />
                                            </button>
                                            <button onClick={() => navigate(`/product/${p.id}`)} className="w-10 h-10 rounded-full bg-[#D8362B] text-white flex items-center justify-center hover:bg-[#B52B21] transition-transform hover:scale-105 shadow-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
