import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar
} from 'recharts';
import { MoreHorizontal, Search, Bell, Maximize2, MessageSquare, ThumbsUp, User } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for classes
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// --- Mock Data ---
const likesData = [
    { name: 'Jan', value: 15000 },
    { name: 'Feb', value: 20000 },
    { name: 'Mar', value: 18000 },
    { name: 'Apr', value: 23000 },
    { name: 'May', value: 21000 },
    { name: 'Jun', value: 25000 },
];

const pieData = [
    { name: 'Female', value: 80, color: '#FF8042' },
    { name: 'Male', value: 20, color: '#FFBB28' },
];

const barData = [
    { name: 'M', value: 40 },
    { name: 'T', value: 60 },
    { name: 'W', value: 50 },
    { name: 'T', value: 80 },
    { name: 'F', value: 60 },
    { name: 'S', value: 70 },
    { name: 'S', value: 50 },
];

// --- Components ---

const Card = ({ children, className }) => (
    <div className={cn("bg-white rounded-3xl p-6 shadow-sm", className)}>
        {children}
    </div>
);

const IconButton = ({ icon: Icon, className }) => (
    <button className={cn("p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600", className)}>
        <Icon size={20} />
    </button>
);

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#F3F4F6] text-gray-800 font-sans p-8 overflow-y-auto">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
                    <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-50">
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">f</div>
                        <span>facebook.com/companyname</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent pl-10 pr-4 py-2 focus:outline-none text-gray-600 placeholder-gray-400"
                        />
                    </div>
                    <button className="bg-[#0F172A] text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors">
                        New Company
                    </button>
                    <div className="flex items-center gap-2">
                        <IconButton icon={Maximize2} />
                        <div className="relative">
                            <IconButton icon={Bell} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#F3F4F6]"></span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Grid Layout */}
            <div className="grid grid-cols-12 gap-6">

                {/* Left Column (Main Stats) */}
                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Total Likes (Gradient Card) */}
                    <div className="col-span-1 md:col-span-1 bg-gradient-to-br from-[#FF8E53] to-[#FF5252] rounded-3xl p-6 text-white shadow-lg relative overflow-hidden h-[300px]">
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div>
                                <p className="text-white/80 text-sm font-medium">Total Likes</p>
                                <h2 className="text-4xl font-bold mt-1">23.0000K</h2>
                            </div>
                            <IconButton icon={MoreHorizontal} className="text-white hover:bg-white/20" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-32">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={likesData}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#fff" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area type="monotone" dataKey="value" stroke="#fff" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="flex gap-8 mt-8 relative z-10">
                            <div>
                                <p className="text-white/70 text-xs">Female</p>
                                <p className="font-bold">%20</p>
                            </div>
                            <div>
                                <p className="text-white/70 text-xs">Male</p>
                                <p className="font-bold">%50</p>
                            </div>
                            <div>
                                <p className="text-white/70 text-xs">Other</p>
                                <p className="font-bold">%30</p>
                            </div>
                        </div>
                    </div>

                    {/* Pending Messages (Donut Chart) */}
                    <Card className="col-span-1 md:col-span-1 h-[300px] flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Pending Messages</p>
                                <h2 className="text-3xl font-bold text-gray-900 mt-1">20.k</h2>
                            </div>
                            <IconButton icon={MoreHorizontal} />
                        </div>

                        <div className="flex-1 flex items-center justify-center relative">
                            <ResponsiveContainer width="100%" height={180}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={-270}
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} cornerRadius={10} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            {/* Center Icon */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="text-[#FF8042] transform rotate-45">
                                    <span className="text-4xl font-bold">+</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#FF8042]"></div>
                                <span className="text-xs text-gray-500">Female %80</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#FFBB28]"></div>
                                <span className="text-xs text-gray-500">Male %20</span>
                            </div>
                        </div>
                    </Card>

                    {/* Post Activity */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex gap-6 mb-4 border-b border-gray-200 pb-2">
                            <button className="font-bold text-gray-900 border-b-2 border-gray-900 pb-2 -mb-2.5">Post Activity</button>
                            <button className="font-medium text-gray-400 hover:text-gray-600">User</button>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 hover:bg-white rounded-2xl transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 1 ? 'bg-yellow-100 text-yellow-600' : i === 2 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                                            {i === 1 ? <User size={20} /> : i === 2 ? <ThumbsUp size={20} /> : <MessageSquare size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-sm">What is the value for your company</h4>
                                            <p className="text-xs text-gray-400">Post number {i}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <span className="text-xs font-medium text-gray-500">Company</span>
                                        <div className="flex items-center gap-2 bg-gray-900 text-white px-2 py-1 rounded-md text-xs">
                                            <span>7.k</span>
                                            <span className="text-red-400">↓ 4%</span>
                                        </div>
                                        <IconButton icon={MoreHorizontal} className="opacity-0 group-hover:opacity-100" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column (Side Stats) */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">

                    {/* Comments */}
                    <Card className="bg-[#FFE4E4]">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">3.k</h3>
                                <div className="flex items-center gap-2 text-gray-600 mb-2">
                                    <MessageSquare size={16} />
                                    <span className="text-sm font-medium">Comments</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-white/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#FF5252] w-1/3 h-full rounded-full"></div>
                        </div>
                    </Card>

                    {/* Post Stats (Bar Chart) */}
                    <Card className="flex-1 min-h-[300px]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-900">Post Stats</h3>
                            <IconButton icon={MoreHorizontal} />
                        </div>

                        <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={barData}>
                                    <Bar dataKey="value" fill="#E5E7EB" radius={[10, 10, 10, 10]} barSize={12}>
                                        {barData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={index === 3 ? '#FF5252' : '#E5E7EB'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="flex justify-between text-xs text-gray-400 mt-2 px-2">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                <span key={i}>{d}</span>
                            ))}
                        </div>

                        <div className="mt-8 bg-[#FFF0F0] p-4 rounded-2xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                    <MessageSquare size={16} className="text-gray-800" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Completed Posts</p>
                                    <p className="text-xs text-gray-500">Current Week</p>
                                </div>
                            </div>
                            <span className="text-xl font-bold text-gray-900">874</span>
                        </div>
                    </Card>

                    {/* Links Shared */}
                    <Card className="bg-[#FFE4E4]">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">10.k</h3>
                                <div className="flex items-center gap-2 text-gray-600 mb-2">
                                    <ThumbsUp size={16} />
                                    <span className="text-sm font-medium">Links Shared</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-gray-900 w-1/2 h-full rounded-full"></div>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
