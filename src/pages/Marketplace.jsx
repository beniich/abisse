import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingCart } from 'lucide-react';

const ProductCard = ({ title, price, category }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="glass-panel overflow-hidden group cursor-pointer"
    >
        <div className="h-48 bg-black/40 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-void)] to-transparent opacity-60" />
            <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border-2 border-[var(--color-primary-light)] rounded-full flex items-center justify-center"
            >
                <div className="w-16 h-16 bg-[var(--color-primary-deep)] rounded-full blur-xl opacity-50" />
            </motion.div>
            <div className="absolute top-4 right-4 bg-[var(--color-primary-deep)] text-xs px-2 py-1 rounded font-heading">
                {category}
            </div>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-heading mb-1 group-hover:text-[var(--color-primary-light)] transition-colors">{title}</h3>
            <div className="flex justify-between items-center mt-4">
                <span className="text-[var(--color-accent-gold)] font-bold">{price} ETH</span>
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <ShoppingCart size={18} />
                </button>
            </div>
        </div>
    </motion.div>
);

const Marketplace = () => {
    const { t } = useTranslation();

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl mb-2">{t('marketplace')}</h1>
                    <p className="text-gray-400">Discover rare antigravity artifacts.</p>
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder={t('search')}
                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-[var(--color-primary-light)] transition-colors"
                        />
                    </div>
                    <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <ProductCard
                        key={item}
                        title={`Gravity Module MK-${item}`}
                        price={(Math.random() * 2).toFixed(2)}
                        category={item % 2 === 0 ? 'Component' : 'Vehicle'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
