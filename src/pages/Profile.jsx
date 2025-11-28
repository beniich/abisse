import React from 'react';

import { User, Settings, Shield, CreditCard } from 'lucide-react';

const Profile = () => {
    // const { t } = useTranslation();

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-r from-[var(--color-primary-deep)] to-black">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
                <div className="absolute -bottom-12 left-8">
                    <div className="w-32 h-32 rounded-full border-4 border-[var(--color-bg-void)] bg-gray-800 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                        <User size={48} className="text-gray-400" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs">Change Avatar</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-heading">Commander Shepard</h1>
                        <p className="text-[var(--color-primary-light)]">Level 42 Explorer</p>
                    </div>

                    <div className="glass-panel p-4 space-y-2">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors text-[var(--color-primary-light)]">
                            <User size={18} />
                            <span>General Info</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-colors text-gray-400">
                            <Shield size={18} />
                            <span>Security</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-colors text-gray-400">
                            <CreditCard size={18} />
                            <span>Billing</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-colors text-gray-400">
                            <Settings size={18} />
                            <span>Preferences</span>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <div className="glass-panel p-8">
                        <h3 className="text-xl font-heading mb-6">Profile Settings</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Username</label>
                                    <input type="text" defaultValue="Shepard" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 focus:border-[var(--color-primary-light)] outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Email</label>
                                    <input type="email" defaultValue="commander@alliance.nav" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 focus:border-[var(--color-primary-light)] outline-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Bio</label>
                                <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 focus:border-[var(--color-primary-light)] outline-none resize-none" defaultValue="Exploring the outer rim." />
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button className="px-6 py-2 bg-[var(--color-primary-deep)] rounded-lg hover:bg-[var(--color-primary-light)] transition-colors font-heading">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
