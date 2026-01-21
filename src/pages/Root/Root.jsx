import React from 'react';
import { NavLink, Outlet } from 'react-router';
import { motion } from 'framer-motion';

const Root = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white flex flex-col overflow-x-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
            </div>

            <header className="relative z-10 pt-12 text-center">
                <motion.h1 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent"
                >
                    CRYPTX SHIELD
                </motion.h1>
                <motion.p className="text-gray-400 mt-2 tracking-[0.2em] uppercase text-sm font-light">
                    Secure your messages with advanced encoding
                </motion.p>
            </header>

            <nav className="relative z-10 flex justify-center gap-4 py-8">
                <NavLink to="/" className={({ isActive }) => 
                    `px-8 py-2 rounded-full font-bold transition-all duration-300 border ${isActive ? 'bg-indigo-600 border-indigo-400 shadow-[0_0_20px_rgba(79,70,229,0.5)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`
                }>ENCRYPT</NavLink>
                <NavLink to="/decrypt" className={({ isActive }) => 
                    `px-8 py-2 rounded-full font-bold transition-all duration-300 border ${isActive ? 'bg-purple-600 border-purple-400 shadow-[0_0_20px_rgba(147,51,234,0.5)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`
                }>DECRYPT</NavLink>
            </nav>

            <main className="relative z-10 container mx-auto px-4 flex-grow">
                <Outlet />
            </main>

            <footer className="relative z-10 mt-20 pb-10">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center space-y-3"
                    >
                        <p className="text-gray-500 text-xs tracking-[0.3em] uppercase font-semibold">Project Origin</p>
                        
                        <div className="flex flex-col items-center justify-center gap-1">
                            <span className="text-gray-400 font-light text-sm italic">Developed by</span>
                            <motion.h2 
                                whileHover={{ scale: 1.05, letterSpacing: "0.1em" }}
                                className="text-2xl md:text-3xl font-black tracking-tighter cursor-default"
                            >
                                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(99,102,241,0.3)]">
                                    RAIYAN SHEIKH
                                </span>
                            </motion.h2>
                        </div>

                        <div className="flex justify-center items-center gap-4 pt-4">
                            <span className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                                SYSTEM ONLINE
                            </span>
                            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                                v2.0.26 SECURE
                            </span>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
};

export default Root;