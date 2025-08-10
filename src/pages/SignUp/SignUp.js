import { useState } from 'react'
import leftSideImg from '../../assets/bg-login.jpg'
import { auth, db } from "../../firebaseConfig"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, set } from "firebase/database";
import { useNavigate } from 'react-router';

export default function SignUp() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ذخیره اطلاعات در دیتابیس (اختیاری)
      await set(ref(db, "users/" + user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: Date.now()
      });

      navigate("/");
      alert("ثبت‌نام با موفقیت انجام شد!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='flex justify-between h-screen'>
        <form className='md:w-1/2 max-w-lg mx-auto px-4 py-36'>
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
            <button onClick={(e) => handleSignUp(e)} className='w-full bg-blue-500 text-white p-2 rounded-md'>ثبت نام</button>
        </form>
        <img src={leftSideImg} className='hidden lg:block w-1/2 bg-cover' alt="left side" />
    </div>
  )
}
