import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#09037c] via-[#31319a] to-[#042f38] ' >
      <div className='backdrop-blur-sm bg-blue-500/20 shadow-2xl  rounded-2xl  flex flex-col items-center justify-center w-96 h-4/8'>
        
      <h1 className='text-2xl font-bold text-white top-10 fixed '>Sign in</h1>
      <form className='flex flex-col gap-4 items-center justify-center pt-26  w-96 h-1/2 rounded-2xl p-8'> 
        <div className='flex flex-row gap-4 items-center w-full'> 
          <label htmlFor="email" className='text-white text-lg font-bold w-29'> Email</label>
          <input className="p-2 rounded bg-white font-bold text-gray-800 w-full" type="email" id="email" name="email" required />
        </div>
        <div className='flex flex-row gap-4 pb-6 items-center w-full'> 
          <label htmlFor="password" className='text-white text-lg w-24 font-bold'>Password</label>
          <input className="p-2 rounded bg-white font-bold text-gray-800 w-full" type="password" id="password" name="password" required /> 
        </div>
        <button type="submit" className='border border-white hover:cursor-pointer  p-1.5 rounded-md mt-4 bg-white text-black  font-bold'>Login</button> 
        <div className='text-center mt-4 text-white'> 
          <p className='text-md font-sm text-white'>Don't have an account? <a href="/signup" className='text-blue-200 hover:underline text-white-700 font-bold'>Sign Up</a></p> 
        </div>
      </form>
      </div>
    </div>
  )
}

export default LoginPage