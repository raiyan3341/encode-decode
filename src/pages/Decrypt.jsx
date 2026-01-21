import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

const Decrypt = () => {
    const [input, setInput] = useState("");
    const [secretKey, setSecretKey] = useState("");
    const [output, setOutput] = useState("");

    const handleDecrypt = () => {
        if (!input || !secretKey) {
            return Swal.fire({ icon: 'info', title: 'Wait!', text: 'Paste Cipher and enter Secret Key.', background: '#1e293b', color: '#fff' });
        }
        
        try {
            // AES Decryption Logic
            const bytes = CryptoJS.AES.decrypt(input, secretKey);
            const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            
            if (!decryptedData) throw new Error();

            setOutput(decryptedData);
            Swal.fire({ icon: 'success', title: 'Decrypted Successfully!', toast: true, position: 'top-end', timer: 2000, showConfirmButton: false });
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Access Denied!',
                text: 'Wrong Secret Key or Invalid Cipher!',
                background: '#1e293b',
                color: '#fff',
                confirmButtonColor: '#ef4444'
            });
            setOutput("");
        }
    };

    return (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto p-1 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-[35px] shadow-2xl">
            <div className="bg-[#1e293b] rounded-[34px] p-8 md:p-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white">AES Decryption Center</h2>
                    <p className="text-pink-400">Unlock your encrypted messages using the Secret Key.</p>
                </div>

                <div className="mb-6">
                    <label className="text-xs font-bold text-pink-300 uppercase ml-2 italic">Enter Secret Key to Unlock</label>
                    <input 
                        type="password"
                        value={secretKey}
                        onChange={(e) => setSecretKey(e.target.value)}
                        className="w-full mt-2 p-4 bg-slate-900 border border-pink-500/30 rounded-xl focus:border-pink-500 outline-none text-white transition-all shadow-inner"
                        placeholder="Type the password used during encryption..."
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <label className="text-xs font-bold text-gray-400 uppercase ml-2">Paste Cipher Text</label>
                        <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-48 p-6 bg-slate-900 border border-white/10 rounded-2xl focus:border-pink-500 outline-none text-gray-200 shadow-inner" placeholder="Paste the encrypted code here..."></textarea>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleDecrypt} className="w-full py-4 bg-pink-600 rounded-xl font-black text-white shadow-lg shadow-pink-500/30 uppercase">Unlock Message</motion.button>
                    </div>

                    <div className="space-y-4">
                        <label className="text-xs font-bold text-gray-400 uppercase ml-2">Original Decrypted Text</label>
                        <textarea value={output} readOnly className="w-full h-48 p-6 bg-slate-900/50 border border-white/5 rounded-2xl text-pink-300 shadow-inner" placeholder="Decrypted text will show here..."></textarea>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => {
                            if (!output) return;
                            navigator.clipboard.writeText(output);
                            Swal.fire({ icon: 'success', title: 'Original Text Copied!', toast: true, position: 'top-end', timer: 1500 });
                        }} className="w-full py-4 bg-slate-700 rounded-xl font-black text-white uppercase">Copy Message</motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Decrypt;