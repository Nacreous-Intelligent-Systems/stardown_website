import React from 'react';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {

    return <form className='space-y-6 px-6 ph-4'>
        <h3 className='text-xL font-medium text-white'>Sign in to Stardown </h3>
        <div>
            <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'> Your Email </label>
            <input type='email' name="email" id='email' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='name@company.com' />
        </div>
        <div>
            <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'> Password </label>
            <input type='password' name="password" id='password' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='*********' />
        </div>
        <button type='submit' className='w-full bg-blue-500 text-white rounded-lg p-2.5 text-sm font-medium'>
            Sign in
        </button>
        <button className='flex w-full justify-end'>
            <a className='text-sm w-full font-medium text-blue-500 hover:underline text-right'>Forgot password?</a>
        </button>
        <div className='text-sm font-medium text-gray-300'>
            Not Registered? {" "} <a href="#" className='text-sm font-medium text-blue-500 hover:underline'>Create account</a>
        </div>
    </form>
}
export default Login;