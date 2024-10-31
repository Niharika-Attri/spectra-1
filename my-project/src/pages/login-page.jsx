import bgimg from '../assets/cuberender.png'

function Login_Page(){
    return(<>
        <div className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center bgfi" style={{backgroundImage:`url(${bgimg})`}}>
            <div className='h-4/5 w-1/3 bg-black/10 backdrop-blur-md rounded-2xl items-center justify-center text-center flex'>
                <form className='w-full'>
                    <h1 className='text-white text-6xl mb-14 font-karla'>Login</h1>
                    <div className='mb-5 relative w-4/5 justify-center mx-auto'>
                        <label className='block text-white text-lg absolute top-0 left-0' htmlFor='email'>Email</label>
                        <input type='text' id='email' className='w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10'/>
                    </div>
                    
                    <div className='mb-14 relative w-4/5 justify-center mx-auto'>
                        <label className='block text-white text-lg absolute top-0 left-0' htmlFor='password' >Password</label>
                        <input type='password' id='password' className='w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10'/>
                    </div>
                    
                    
                    <button className='block h-16 w-1/2 bg-white rounded-full mx-auto '><div>
                        <h3 className='font-karla text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-800 bg-clip-text text-transparent'>Login</h3>
                    </div></button>
                </form>
            </div>
        </div>
    </>)
}

export default Login_Page;