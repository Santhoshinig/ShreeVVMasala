import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data';
import { useShop } from '../context/ShopContext';
import { ShoppingCart, Heart } from 'lucide-react';

const Products = () => {
    const { addToCart, toggleWishlist, wishlist } = useShop();
    const categories = [
        { title: "Our Best Sellers", tag: "Best Seller" },
        { title: "Most Loved Blends", tag: "Most Loved" },
        { title: "New & Trending", tag: "Trending" }
    ];

    return (
        <section id="products" className="pt-2 pb-24 bg-stone-50 relative overflow-hidden">
            <div className="container mx-auto px-6">


                {categories.map((cat, catIdx) => (
                    <div key={catIdx} className="mb-20 last:mb-0">
                        <div className="flex items-center gap-6 mb-10">
                            <h3 className="text-3xl font-serif text-maroon whitespace-nowrap">{cat.title}</h3>
                            <div className="h-[1px] bg-maroon/10 w-full"></div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                            {products.filter(p => p.tag === cat.tag).map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-maroon/5 group transition-all duration-500"
                                >
                                    <div className="relative h-36 md:h-64 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                            <button
                                                onClick={() => toggleWishlist(product)}
                                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-maroon hover:bg-gold transition-all"
                                            >
                                                <Heart size={20} className={wishlist.find(item => item.id === product.id) ? "fill-maroon" : ""} />
                                            </button>
                                            <button
                                                onClick={() => addToCart(product, 1, product.sizes?.[0] || "500g")}
                                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-maroon hover:bg-gold transition-all"
                                            >
                                                <ShoppingCart size={20} />
                                            </button>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-gold/90 text-maroon text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            {product.category}
                                        </div>
                                    </div>

                                    <div className="p-3 md:p-6 text-center">
                                        <h3 className="text-sm md:text-xl font-serif text-maroon mb-1 md:mb-2 h-8 md:h-12 flex items-center justify-center leading-tight">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-4">
                                            <span className="text-maroon font-black text-sm md:text-base">₹{product.price}</span>
                                            <span className="text-stone-300 line-through text-xs italic">₹{product.mrp}</span>
                                        </div>
                                        <Link
                                            to={`/product/${product.id}`}
                                            className="relative block overflow-hidden w-full py-2 md:py-3 rounded-xl border-2 border-maroon text-maroon font-black transition-all duration-300 hover:bg-maroon hover:text-white"
                                        >
                                            <span className="relative z-10 uppercase tracking-widest text-[10px]">Explore Detail</span>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default Products;
