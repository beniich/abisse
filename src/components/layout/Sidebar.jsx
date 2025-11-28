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
import clsx from 'clsx';

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
            className="h-screen bg-[#0F172A] text-white flex flex-col z-40 transition-all duration-300"
        >
            {/* Logo Section */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#0F172A]">
                    <Hexagon size={20} fill="currentColor" />
                </div>
                <AnimatePresence>
                    {!isCollapsed && (
                        <motion.h1
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            className="text-xl font-bold tracking-wide whitespace-nowrap overflow-hidden"
                        >
                            ABISSE
                        </motion.h1>
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-8 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => clsx(
                            "flex items-center px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                            isActive ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#FF5252] rounded-r-full" />
                                )}
                                <item.icon
                                    size={20}
                                    className={clsx("relative z-10", isActive ? "text-white" : "text-gray-400 group-hover:text-white")}
                                />
                                <AnimatePresence>
                                    {!isCollapsed && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className="ml-4 font-medium text-sm relative z-10 whitespace-nowrap"
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
                className="absolute -right-3 top-12 w-6 h-6 rounded-full bg-white text-[#0F172A] flex items-center justify-center shadow-md hover:scale-110 transition-transform z-50"
            >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>
        </motion.div>
    );
};

export default Sidebar;
