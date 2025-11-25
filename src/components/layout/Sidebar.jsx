import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Server,
    ShoppingBag,
    User,
    ChevronLeft,
    ChevronRight,
    Hexagon
} from 'lucide-react';

const Sidebar = () => {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const navItems = [
        { path: '/', icon: LayoutDashboard, label: 'dashboard' },
        { path: '/api', icon: Server, label: 'api' },
        { path: '/marketplace', icon: ShoppingBag, label: 'marketplace' },
        { path: '/profile', icon: User, label: 'profile' },
    ];

    return (
        <motion.div
            initial={{ width: 240 }}
            animate={{ width: isCollapsed ? 80 : 240 }}
            className="h-screen glass-panel border-r border-white/10 relative flex flex-col z-40"
            style={{
                background: 'linear-gradient(180deg, rgba(5,5,16,0.9) 0%, rgba(0,127,115,0.1) 100%)',
                borderColor: 'var(--color-border)'
            }}
        >
            {/* Logo Section */}
            <div className="p-6 flex items-center justify-center relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        background: [
                            'radial-gradient(circle at 50% 50%, var(--color-primary-deep) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 50%, var(--color-primary-light) 0%, transparent 60%)',
                            'radial-gradient(circle at 50% 50%, var(--color-primary-deep) 0%, transparent 50%)'
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <Hexagon className="text-[var(--color-primary-light)] animate-pulse-glow" size={32} />
                <AnimatePresence>
                    {!isCollapsed && (
                        <motion.h1
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            className="ml-3 text-2xl font-heading tracking-wider neon-text whitespace-nowrap overflow-hidden"
                        >
                            ABISSE
                        </motion.h1>
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-8 space-y-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `
              flex items-center px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden
              ${isActive ? 'text-[var(--color-primary-light)]' : 'text-gray-400 hover:text-white'}
            `}
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-[var(--color-surface-hover)] border border-[var(--color-primary-deep)] rounded-xl"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <item.icon
                                    size={24}
                                    className={`relative z-10 transition-transform group-hover:scale-110 ${isActive ? 'animate-pulse-glow' : ''}`}
                                />
                                <AnimatePresence>
                                    {!isCollapsed && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className="ml-4 font-body text-lg relative z-10 whitespace-nowrap"
                                        >
                                            {t(item.label)}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Collapse Toggle */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--color-bg-void)] border border-[var(--color-primary-deep)] flex items-center justify-center text-[var(--color-primary-light)] hover:scale-110 transition-transform z-50"
            >
                {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
        </motion.div>
    );
};

export default Sidebar;
