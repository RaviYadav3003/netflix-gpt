import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = () => {
        const message = checkValidateData(name.current.value, email.current.value, password.current.value)
        console.log(name)
        setErrorMessage(message)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='bg pic' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute bg-slate-950 w-3/12 my-36 p-12 mx-auto right-0 left-0 flex flex-col justify-center items-start text-white rounded-lg'>
                <h1 className='text-3xl font-bold'>{!isSignInForm ? "Sign In " : "Sign Up"}</h1>
                {isSignInForm && <input ref={name} className='p-3 my-4 w-full bg-gray-700' type="text" placeholder="Full Name" />}
                <input className='p-3 my-4 w-full bg-gray-700' type="text" placeholder="Email Address" ref={email} />
                <input className='p-3 my-4 w-full bg-gray-700' type="password" placeholder="Password" ref={password} />
                <p className='font-bold text-red-600'>{errorMessage}</p>
                <button onClick={handleButtonClick} className='p-3 my-6 w-full bg-red-700 rounded-lg'>{!isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='cursor-pointer' onClick={toggleForm}>{!isSignInForm ? " New to Netflix? Sign up now. " : "Already registered? Sign In now"}</p>
            </form>

        </div >
    )
}

export default Login