import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatBox from '../chat/ChatBox';

const MainLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-[#F3F4F6]">
            <Sidebar />

            <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
                <main className="flex-1 overflow-y-auto scroll-smooth">
                    <Outlet />
                </main>

                {/* Chat floating widget */}
                <div className="fixed bottom-4 right-4 w-80 h-96 shadow-2xl rounded-2xl overflow-hidden bg-white z-50 border border-gray-200">
                    <ChatBox />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
