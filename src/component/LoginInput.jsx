import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/LoginInput.css';
import { useAuth } from '../context/AuthContext';

export default function LoginInput() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, currentUser } = useAuth();
    console.log(currentUser);

    const navigate = useNavigate();

    async function handleLogin(e) {
        console.log('rendered handle function');
        e.preventDefault();
        try {
            setLoading(true);
            setError('');
            await login(email, password);
            navigate('/dashboard');
            console.log('Login success');
        } catch (err) {
            setLoading(false);
            setError('Login failed');
            console.log(err);
        }
    }

    return (
        <div>
            <label htmlFor="email">
                <input
                    type="email"
                    value={email}
                    name="email"
                    placeholder="Email"
                    className="input-login"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label htmlFor="password">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-login"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            <button
                disabled={loading}
                type="submit"
                onClick={handleLogin}
                className="login-btn bg-gradient-to-r from-purple-500 to-pink-500  hover:bg-gradient-to-l hover:from-indigo-500 hover:to-purple-500 focus:ring-2 focus: ring-indigo-600 "
            >
                Sign in
            </button>
            <div className="my-2 text-red-500 text-sm">{error && <p>{error}</p>}</div>
        </div>
    );
}
