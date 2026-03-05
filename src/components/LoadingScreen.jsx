import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <motion.div
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center"
        >
            {/* Centered, compact video — dark BG of video blends with black page */}
            <motion.video
                src="/L5.mp4"
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                    width: '70vw',
                    height: '70vh',
                    objectFit: 'contain',
                }}
            />

            {/* Tagline */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="flex flex-col items-center gap-1 mt-2"
            >
                <h1 style={{ color: '#7A1C1C', fontSize: '22px', fontWeight: 900, letterSpacing: '0.1em', fontFamily: 'serif', margin: 0 }}>
                    SHREE <span style={{ color: '#C9A227', fontStyle: 'italic' }}>VV</span> MASALA
                </h1>
                <div className="flex items-center gap-4 mt-2">
                    <div style={{ width: '32px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(122,28,28,0.4))' }} />
                    <span style={{ color: 'rgba(122,28,28,0.55)', fontSize: '9px', fontWeight: 900, letterSpacing: '0.6em', textTransform: 'uppercase' }}>
                        Tradition Redefined
                    </span>
                    <div style={{ width: '32px', height: '1px', background: 'linear-gradient(90deg, rgba(122,28,28,0.4), transparent)' }} />
                </div>
            </motion.div>

            {/* Loading dots */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex items-center justify-center gap-2 mt-4"
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25 }}
                        style={{
                            width: '5px', height: '5px', borderRadius: '50%',
                            background: 'rgba(201,162,39,0.9)'
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
