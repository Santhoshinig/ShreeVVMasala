import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';
import ProductDetail from './components/ProductDetail';
import OfferBanner from './components/OfferBanner';
import { CartDrawer, WishlistDrawer } from './components/Drawers';
import { ShopProvider } from './context/ShopContext';

const Home = () => (
  <>
    <Hero />
    <Products />
    <Features />
    <Testimonials />
    <About />
    <Contact />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change (but not for hash links)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <ShopProvider>
      <div className="relative">
        <AnimatePresence>
          {loading && <LoadingScreen />}
        </AnimatePresence>

        {!loading && (
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <CartDrawer />
            <WishlistDrawer />
          </>
        )}
      </div>
    </ShopProvider>
  );
}

export default App;
