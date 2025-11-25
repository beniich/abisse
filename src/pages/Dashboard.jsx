import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Activity, Users, Database, Zap } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="glass-panel p-6 relative overflow-hidden group"
    >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Icon size={64} />
        </div>
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-white/5">
                    <Icon size={20} style={{ color }} />
                </div>
                <span className="text-gray-400 text-sm font-heading">{label}</span>
            </div>
            <h3 className="text-3xl font-bold neon-text">{value}</h3>
        </div>
    </motion.div>
);

const Dashboard = () => {
    const { t } = useTranslation();

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl mb-2">{t('dashboard')}</h1>
                    <p className="text-gray-400">Welcome back, Commander.</p>
                </div>
                <button className="px-6 py-2 bg-[var(--color-primary-deep)] rounded-lg font-heading hover:bg-[var(--color-primary-light)] transition-colors">
                    Generate Report
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={Activity} label="System Status" value="98.2%" color="var(--color-primary-light)" />
                <StatCard icon={Users} label="Active Users" value="12,450" color="var(--color-accent-gold)" />
                <StatCard icon={Database} label="API Requests" value="8.5M" color="var(--color-primary-deep)" />
                <StatCard icon={Zap} label="Network Load" value="45ms" color="var(--color-accent-pale)" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-panel p-6 min-h-[400px]">
                    <h3 className="text-xl font-heading mb-6 border-b border-white/10 pb-2">Activity Overview</h3>
                    <div className="h-full flex items-center justify-center text-gray-500">
                        [Chart Placeholder]
                    </div>
                </div>
                <div className="glass-panel p-6">
                    <h3 className="text-xl font-heading mb-6 border-b border-white/10 pb-2">Recent Alerts</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                <div className="w-2 h-2 rounded-full bg-[var(--color-accent-gold)]" />
                                <div>
                                    <p className="text-sm font-medium">High latency detected</p>
                                    <p className="text-xs text-gray-500">2 mins ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
