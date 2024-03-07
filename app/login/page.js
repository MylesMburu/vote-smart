'use client'

import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform the login
        try {
            const res = await axios.post('/api/login', { username, password });
            // Handle login success
        } catch (err) {
            // Handle error
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="p-2 border border-gray-300" />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="p-2 border border-gray-300" />
                <button type="submit" className="p-2 bg-blue-500 text-white">Login</button>
            </form>
        </div>
    );
}
