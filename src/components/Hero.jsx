import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
    const banners = [
        {
            id: 1,
            desktop: "/images/OFFER_BANNER_1760x608.png",
            mobile: "/images/offer banner mobile.png",
            alt: "Special Offer Banner"
        },
        {
            id: 2,
            desktop: "/images/FULL_PRODUCTS_1760x608.png",
            mobile: "/images/all products mobile.png",
            alt: "Our Product Range"
        },
        {
            id: 3,
            desktop: "/NEW EDIT.png",
            mobile: "/images/chef mobile.png",
            alt: "Taste of Tradition"
        },
    ];

    return (
        <>
            {/* Mobile hero — compact, not full screen */}
            <section id="home" className="block md:hidden relative w-full overflow-hidden bg-stone-50 pt-[115px] px-4 pb-4">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    speed={200}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    className="w-full rounded-2xl overflow-hidden shadow-lg border border-stone-200"
                >
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <img
                                src={banner.mobile}
                                alt={banner.alt}
                                className="w-full h-auto block"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Desktop hero — slightly reduced width to pull up the next section naturally */}
            <section id="home-desktop" className="hidden md:block relative w-full overflow-hidden bg-stone-50 pt-[140px] px-6 lg:px-16 xl:px-24 pb-2">
                <div className="max-w-[1920px] mx-auto">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        speed={1200}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        className="w-full rounded-[2rem] overflow-hidden shadow-2xl border border-stone-200"
                    >
                        {banners.map((banner) => (
                            <SwiperSlide key={banner.id}>
                                <div className="relative w-full bg-white flex items-center justify-center">
                                    <img
                                        src={banner.desktop}
                                        alt={banner.alt}
                                        className="w-full h-auto block"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <style>{`
                .swiper-button-next, .swiper-button-prev { color: #7A1C1C !important; }
                .swiper-pagination-bullet { background: #7A1C1C !important; opacity: 0.4; }
                .swiper-pagination-bullet-active { opacity: 1 !important; background: #C9A227 !important; }
                .swiper-pagination { bottom: 8px !important; }
            `}</style>
        </>
    );
};

export default Hero;
