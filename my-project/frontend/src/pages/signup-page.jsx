import { useState } from 'react';
import bgimg from '../assets/cuberender.png';

function Signup_Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        // Add signup logic here, like sending data to backend
        console.log('Signup successful:', { email, password });
        setErrorMessage('');
    };

    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                <div className="h-4/6 w-1/4 bg-black/10 backdrop-blur-md rounded-2xl items-center justify-center text-center flex">
                    <form onSubmit={handleSignup} className="w-full">
                        <h1 className="text-white text-5xl mt-3 mb-4 font-karla">Sign Up</h1>
                        
                        <div className="mb-5 relative w-4/5 justify-center mx-auto">
                            <label className="block text-white text-lg absolute top-0 left-0" htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10"
                                required
                            />
                        </div>

                        <div className="mb-5 relative w-4/5 justify-center mx-auto">
                            <label className="block text-white text-lg absolute top-0 left-0" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10"
                                required
                            />
                        </div>

                        <div className="mb-5 relative w-4/5 justify-center mx-auto">
                            <label className="block text-white text-lg absolute top-0 left-0" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10"
                                required
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-red-500 mb-4">{errorMessage}</p>
                        )}

                        <button type="submit" className="block h-16 w-1/2 bg-white rounded-full mx-auto">
                            <div>
                                <h3 className="font-karla text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-800 bg-clip-text text-transparent">Sign Up</h3>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup_Page;
