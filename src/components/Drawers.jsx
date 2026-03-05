import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export const CartDrawer = () => {
    const { isCartOpen, setIsCartOpen, cart, removeFromCart } = useShop();
    const navigate = useNavigate();

    const total = cart.reduce((acc, item) => {
        const price = item.sizePrices?.[item.size]?.price || item.price;
        return acc + (price * item.quantity);
    }, 0);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white z-[101] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="px-6 py-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-maroon" />
                                <h2 className="text-xl font-serif font-black text-maroon tracking-wider">YOUR CART</h2>
                            </div>
                            <button onClick={() => setIsCartOpen(false)} className="text-stone-400 hover:text-maroon transition-colors p-2 rounded-full hover:bg-stone-200">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
                                    <ShoppingBag size={64} className="opacity-20" />
                                    <p className="font-medium">Your cart is perfectly empty.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-maroon font-bold text-sm tracking-widest uppercase border-b border-maroon pb-1"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map((item, idx) => {
                                    const price = item.sizePrices?.[item.size]?.price || item.price;
                                    return (
                                        <div key={`${item.id}-${item.size}-${idx}`} className="flex gap-4 p-4 bg-white border border-stone-100 rounded-2xl shadow-sm">
                                            <div className="w-24 h-24 bg-stone-50 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                                                <img src={item.image} alt={item.name} className="w-3/4 h-3/4 object-contain" />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between py-1">
                                                <div className="flex justify-between items-start gap-2">
                                                    <div>
                                                        <h3 className="font-bold text-stone-800 leading-tight">{item.name}</h3>
                                                        <p className="text-xs text-stone-500 font-medium uppercase tracking-widest mt-1">{item.size}</p>
                                                    </div>
                                                    <button onClick={() => removeFromCart(item.id, item.size)} className="text-stone-300 hover:text-red-500">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                                <div className="flex justify-between items-end mt-4">
                                                    <span className="text-sm text-stone-500 font-medium">Qty: <span className="text-stone-900 font-bold">{item.quantity}</span></span>
                                                    <span className="font-black text-maroon font-sans text-xl tracking-tight">₹{(price * item.quantity).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="border-t border-stone-100 p-6 bg-stone-50 space-y-4">
                                <div className="flex justify-between items-center text-lg font-bold">
                                    <span className="text-stone-600">Subtotal</span>
                                    <span className="text-stone-900 font-sans font-black tracking-tight text-2xl">₹{total.toFixed(2)}</span>
                                </div>
                                <p className="text-xs text-stone-500">Tax included. Shipping calculated at checkout.</p>
                                <button className="w-full bg-[#111] text-white font-black text-sm tracking-widest uppercase py-4 rounded-full hover:bg-black transition-colors flex items-center justify-center gap-2 group">
                                    CHECKOUT
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export const WishlistDrawer = () => {
    const { isWishlistOpen, setIsWishlistOpen, wishlist, toggleWishlist, addToCart } = useShop();
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            {isWishlistOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsWishlistOpen(false)}
                        className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white z-[101] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="px-6 py-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
                            <div className="flex items-center gap-3">
                                <Heart className="text-maroon fill-maroon" />
                                <h2 className="text-xl font-serif font-black text-maroon tracking-wider">YOUR WISHLIST</h2>
                            </div>
                            <button onClick={() => setIsWishlistOpen(false)} className="text-stone-400 hover:text-maroon transition-colors p-2 rounded-full hover:bg-stone-200">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Wishlist Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {wishlist.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
                                    <Heart size={64} className="opacity-20" />
                                    <p className="font-medium">You haven't added any favorites yet.</p>
                                </div>
                            ) : (
                                wishlist.map((item, idx) => (
                                    <div key={`${item.id}-${idx}`} className="flex gap-4 p-4 bg-white border border-stone-100 rounded-2xl shadow-sm relative group cursor-pointer" onClick={() => {
                                        setIsWishlistOpen(false);
                                        navigate(`/product/${item.id}`);
                                    }}>
                                        <div className="w-24 h-24 bg-stone-50 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                                            <img src={item.image} alt={item.name} className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center py-1">
                                            <h3 className="font-bold text-stone-800 leading-tight mb-2 pr-8">{item.name}</h3>
                                            <span className="font-black text-maroon font-sans text-xl tracking-tight">₹{item.price.toFixed(2)}</span>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); toggleWishlist(item); }}
                                            className="absolute top-4 right-4 text-stone-300 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart(item, 1, item.sizes?.[0] || "");
                                                setIsWishlistOpen(false);
                                            }}
                                            className="absolute bottom-4 right-4 bg-maroon text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full hover:bg-gold transition-colors"
                                        >
                                            ADD
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
