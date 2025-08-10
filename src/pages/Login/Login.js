import { useState } from 'react'
import leftSideImg from '../../assets/bg-login.jpg'
import { auth } from "../../firebaseConfig"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router'

export default function Login() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            alert("ورود با موفقیت انجام شد");
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };

  return (
    <div className='flex justify-between h-screen'>
        <form className='md:w-1/2 max-w-lg mx-auto px-4 py-36'>
            <Link to='/'>برگشت</Link>
            <h1 className='font-DanaDemiBold text-lg lg:text-2xl xl:text-3xl'>ورود به حساب کاربری</h1>
            <div className='flex flex-col mt-10'>
                <label className='font-DanaDemiBold text-lg' htmlFor="email">ایمیل</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className='mt-3 border border-gray-300 p-2 rounded-md' />
                <label className='font-DanaDemiBold text-lg mt-8' htmlFor="password">رمز عبور</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='' className='mt-3 border border-gray-300 p-2 rounded-md' />
            </div>
            <div className='flex items-center justify-between py-5'>
                <div className='flex items-center justify-center gap-1'>
                    <input type="checkbox" />
                    <p className='inline-block'>منو به یاد داشته باش</p>
                </div>
                <a href="#" className='font-DanaDemiBold text-base inline-block'>رمز عبور خود را فراموش کرده‌اید؟</a>
            </div>
            <button onClick={(e) => handleLogin(e)} className='w-full bg-blue-500 text-white p-2 rounded-md'>ورود به حساب</button>
        </form>
        <img src={leftSideImg} className='hidden lg:block w-1/2 bg-cover' alt="left side" />
    </div>
  )
}
