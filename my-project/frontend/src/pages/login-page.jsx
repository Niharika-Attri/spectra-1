import { useState } from 'react';
import bgimg from '../assets/cuberender.png'
import { useNavigate, Link } from 'react-router-dom';

function Login_Page(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault();
        navigate('/dashboard')
    }

    return(<>
        <div className="relative bg-cover bg-no-repeat h-screen flex items-center justify-center bgfi bg-gradient-to-t from-white/20 to-slate-950 bg-[position:40%_25%] overflow-hidden" //</>style={{backgroundImage:`url(${bgimg})`}}
        >
            <div className='absolute -right-40 -top-60 h-[800px] w-[800px] bg-white rounded-[400px] grid place-items-center '>
                <div className='  h-[600px] w-[600px] bg-slate-950 rounded-full'></div>
                <div className='absolute backdrop-blur-3xl items-center justify-center h-[800px] w-[800px] bg-white/3 rounded-full'></div>

            </div>
            <div className='absolute -left-56 -bottom-96 h-[800px] w-[800px] bg-white rounded-[400px] grid place-items-center '>
                <div className='  h-[500px] w-[500px] bg-slate-950 rounded-full'></div>
                <div className='absolute backdrop-blur-3xl items-center justify-center h-[800px] w-[800px] bg-white/3 rounded-full'></div>

            </div>
            <div className='h-4/6 w-80 lg:w-96 bg-white/10 backdrop-blur-md rounded-2xl items-center justify-center text-center flex'>
                <form onSubmit={handleLogin} className='w-full' >
                    <h1 className='text-white text-6xl mb-1 font-karla'>Login</h1>
                    <div className='mb-5 relative w-4/5 justify-center mx-auto'>
                        <label className='block text-white text-lg absolute top-0 left-0' htmlFor='email'>Email</label>
                        <input 
                        type='text' 
                        id='email' 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)} 
                        className='w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10'
                        required/>
                    </div>
                    
                    <div className='mb-2 relative w-4/5 justify-center mx-auto'>
                        <label className='block text-white text-lg absolute top-0 left-0' htmlFor='password' >Password</label>
                        <input type='password' 
                        id='password' 
                        value={password} 
                        onChange= {(e)=> setPassword(e.target.value)} 
                        className='w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10'
                        required/>
                    </div>
                    <h3  className='text-sm text-white'>Haven't registered? <Link to="/signup" className="text-blue-600 underline">
                        Signup
                    </Link></h3>
                    
                    
                    <button type='submit' className='block h-16 w-1/2 mt-2 bg-white rounded-full mx-auto '><div>
                        {/* <h3 className='font-karla text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-800 bg-clip-text text-transparent'>Login</h3> */}
                        <h3 className='font-karla text-3xl font-bold '>Login</h3>

                    </div></button>
                </form>
            </div>
        </div>
    </>)
}

export default Login_Page;