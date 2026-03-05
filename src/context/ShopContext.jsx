import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    // Load from localStorage on init
    useEffect(() => {
        const savedCart = localStorage.getItem('svv_cart');
        const savedWishlist = localStorage.getItem('svv_wishlist');
        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    }, []);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem('svv_cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('svv_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToCart = (product, quantity, size) => {
        setCart(prev => {
            const existingItem = prev.find(item => item.id === product.id && item.size === size);
            if (existingItem) {
                return prev.map(item =>
                    (item.id === product.id && item.size === size)
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity, size }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId, size) => {
        setCart(prev => prev.filter(item => !(item.id === productId && item.size === size)));
    };

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.filter(item => item.id !== product.id);
            }
            return [...prev, product];
        });
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const wishlistCount = wishlist.length;

    return (
        <ShopContext.Provider value={{
            cart,
            wishlist,
            isCartOpen,
            setIsCartOpen,
            isWishlistOpen,
            setIsWishlistOpen,
            addToCart,
            removeFromCart,
            toggleWishlist,
            cartCount,
            wishlistCount
        }}>
            {children}
        </ShopContext.Provider>
    );
};
