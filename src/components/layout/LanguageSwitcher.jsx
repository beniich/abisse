import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';


const languages = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
    { code: 'ja', label: '日本語' },
    { code: 'es', label: 'ES' },
    { code: 'de', label: 'DE' }
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    return (
        <div className="relative z-50">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-white hover:bg-white/10 transition-colors"
                style={{ borderColor: 'var(--color-primary-light)' }}
            >
                <Globe size={18} color="var(--color-primary-light)" />
                <span className="font-heading text-sm">{languages.find(l => l.code === i18n.language)?.label || 'EN'}</span>
            </motion.button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 glass-panel overflow-hidden flex flex-col"
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors text-white font-body"
                            style={{ color: i18n.language === lang.code ? 'var(--color-accent-gold)' : 'white' }}
                        >
                            {lang.label}
                        </button>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
