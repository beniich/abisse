import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Key, FileText, Play, Copy } from 'lucide-react';

const API = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('keys');

    const tabs = [
        { id: 'keys', label: 'API Keys', icon: Key },
        { id: 'docs', label: 'Documentation', icon: FileText },
        { id: 'sandbox', label: 'Sandbox', icon: Play },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl mb-2">{t('api')}</h1>
                <p className="text-gray-400">Manage your access and test endpoints.</p>
            </div>

            <div className="flex gap-4 border-b border-white/10">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 font-heading transition-colors relative ${activeTab === tab.id ? 'text-[var(--color-primary-light)]' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        <tab.icon size={18} />
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary-light)]"
                            />
                        )}
                    </button>
                ))}
            </div>

            <div className="min-h-[400px]">
                {activeTab === 'keys' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="glass-panel p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-heading">Active Keys</h3>
                                <button className="px-4 py-2 bg-[var(--color-primary-deep)] rounded-lg text-sm hover:bg-[var(--color-primary-light)] transition-colors">
                                    Generate New Key
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-[var(--color-primary-deep)] transition-colors">
                                    <div>
                                        <p className="font-mono text-[var(--color-accent-gold)]">sk_live_51Mz...</p>
                                        <p className="text-xs text-gray-500 mt-1">Created: 2 hours ago</p>
                                    </div>
                                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                        <Copy size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'docs' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-panel p-8">
                        <h2 className="text-2xl font-heading mb-4">Getting Started</h2>
                        <p className="text-gray-300 mb-4">
                            The Abisse API provides programmatic access to all platform features.
                        </p>
                        <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-[var(--color-primary-light)]">
                            curl https://api.abisse.io/v1/status \
                            <br />  -H "Authorization: Bearer YOUR_API_KEY"
                        </div>
                    </motion.div>
                )}

                {activeTab === 'sandbox' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-panel p-6">
                        <div className="grid grid-cols-2 gap-6 h-[500px]">
                            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                                <p className="text-gray-500 mb-2">// Request Body</p>
                                <textarea className="w-full h-[90%] bg-transparent resize-none focus:outline-none text-white" defaultValue='{ "query": "antigravity_module_v2" }' />
                            </div>
                            <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                                <p className="text-gray-500 mb-2">// Response</p>
                                <div className="text-[var(--color-primary-light)]">
                                    Waiting for request...
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default API;
