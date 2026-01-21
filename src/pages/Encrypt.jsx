import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

const Encrypt = () => {
    const [input, setInput] = useState("");
    const [secretKey, setSecretKey] = useState("");
    const [output, setOutput] = useState("");

    const handleEncrypt = () => {
        if (!input || !secretKey) {
            return Swal.fire({
                icon: 'warning',
                title: 'Missing Info',
                text: 'Please enter both Message and Secret Key!',
                background: '#1e293b',
                color: '#fff',
                confirmButtonColor: '#4f46e5'
            });
        }
        // AES Encryption Logic
        const encrypted = CryptoJS.AES.encrypt(input, secretKey).toString();
        setOutput(encrypted);
        
        Swal.fire({ icon: 'success', title: 'Message Locked!', toast: true, position: 'top-end', timer: 2000, showConfirmButton: false });
    };

    const handleCopy = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        Swal.fire({ icon: 'success', title: 'Cipher Copied!', toast: true, position: 'top-end', timer: 1500, showConfirmButton: false });
    };

    return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-5xl mx-auto p-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[35px] shadow-2xl">
            <div className="bg-[#1e293b] rounded-[34px] p-8 md:p-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white">AES Encryption Vault</h2>
                    <p className="text-indigo-400">Secure your message with Military-Grade encryption.</p>
                </div>

                <div className="mb-6">
                    <label className="text-xs font-bold text-indigo-300 uppercase ml-2 italic">Set Secret Key (Password)</label>
                    <input 
                        type="password"
                        value={secretKey}
                        onChange={(e) => setSecretKey(e.target.value)}
                        className="w-full mt-2 p-4 bg-slate-900 border border-indigo-500/30 rounded-xl focus:border-indigo-500 outline-none text-white transition-all shadow-inner"
                        placeholder="Enter a strong key to lock this message..."
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <label className="text-xs font-bold text-gray-400 uppercase ml-2">Plain Text Message</label>
                        <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-48 p-6 bg-slate-900 border border-white/10 rounded-2xl focus:border-indigo-500 outline-none text-gray-200 shadow-inner" placeholder="Type your secret message..."></textarea>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleEncrypt} className="w-full py-4 bg-indigo-600 rounded-xl font-black text-white shadow-lg shadow-indigo-500/30 uppercase">Generate AES Cipher</motion.button>
                    </div>

                    <div className="space-y-4">
                        <label className="text-xs font-bold text-gray-400 uppercase ml-2">Encrypted Cipher Text</label>
                        <textarea value={output} readOnly className="w-full h-48 p-6 bg-slate-900/50 border border-white/5 rounded-2xl text-indigo-400 font-mono shadow-inner overflow-hidden" placeholder="Encrypted code will appear here..."></textarea>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleCopy} className="w-full py-4 bg-slate-700 rounded-xl font-black text-white uppercase tracking-widest">Copy Cipher</motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Encrypt;