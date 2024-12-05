import React, { Component } from 'react'
import Logo from '../../assets/app-logo.png'
import BasketProducts from '../BasketProducts/BasketProducts'

export default class Header extends Component {

  darkModeBtn() {
      localStorage.setItem("dark", "light")
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    } else {
        document.documentElement.classList.add("dark")
        localStorage.theme = 'dark'
    }
  }

  render() {
    return (
      <header className='fixed hidden md:flex lg:px-10 lg:w-[90%] top-9 right-0 left-0 backdrop-blur-[6px] items-center w-[95%] rounded-3xl h-24 mx-auto px-7 py-5 bg-black/50'>
        <div className="flex items-center justify-between w-full">
            {/* Logo & Menu */}
            <nav className='flex items-center h-14 lg:gap-x-9 gap-x-6'>
                {/* Logo */}
                <div className="shrink-0">
                    <img src={Logo} alt="app logo" className='w-14' />
                </div>
                {/* Menu */}
                <ul className='flex lg:gap-x-9 gap-x-7 h-full text-gray-300 text-xl tracking-tightest'>
                    <li className='font-DanaMedium leading-[56px] text-orange-200'><a href="#">صفحه اصلی</a></li>
                    {/* Has li */}
                    <li className='relative group leading-[56px]'>
                        <a href="#" className='group-hover:text-orange-300 transition-all'>فروشگاه</a>
                        {/* Submenu */}
                        <div className='absolute transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible child:block shadow-normal tracking-normal p-6 space-y-4 w-52 bg-white border-t-[3px] border-t-orange-300 text-zinc-700 text-base dark:text-white rounded-2xl dark:bg-zinc-700'>
                            <a href="#" className='block transition-colors hover:text-orange-300'>قهوه ویژه</a>
                            <a href="#" className='block transition-colors hover:text-orange-300'></a>
                            <a href="#" className='block transition-colors hover:text-orange-300'>قهوه درجه یک</a>
                            <a href="#" className='block transition-colors hover:text-orange-300'>تکیبات تجاری</a>
                            <a href="#" className='block transition-colors hover:text-orange-300'>کپسول قهوه</a>
                            <a href="#" className='block transition-colors hover:text-orange-300'>قهوه برزیلی</a>
                        </div>
                    </li>
                    <li className='leading-[56px]'><a href="#">دیکشنری</a></li>
                    <li className='leading-[56px]'><a href="#">درباره ما</a></li>
                    <li className='leading-[56px]'><a href="#">تماس با ما</a></li>
                </ul>
            </nav>
            
            {/* Cart & Theme Toggle, Login Link */}
            <div className='flex text-orange-300 text-xl lg:gap-x-5 gap-x-4 xl:gap-x-10'>
                {/* Cart */}
                <div className="flex lg:gap-x-5 gap-x-4 items-center">
                    <div>
                        <div className='group py-3 relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            {/* Carts Box */}
                            <div className='absolute top-full left-0 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible shadow-normal tracking-normal w-[400px] justify-between flex flex-col rounded-2xl border-t-[3px] border-t-orange-300 space-y-4 p-5 dark:bg-zinc-700 bg-white '>
                                <div className="flex items-center justify-between font-DanaMedium text-xs tracking-tighter">
                                    <p className='text-gray-300'>۱ مورد</p>
                                    <a href="#" className='flex items-center text-orange-300'>
                                        مشاهده سبد خرید
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                        </svg>
                                    </a>
                                </div>
                                {/* products */}
                                <div className="border-b border-b-gray-300 pb-1 dark:border-b-white/10 divide-y divide-gray-100/10 dark:divide-white/10">
                                    <BasketProducts />
                                    <BasketProducts />
                                    <BasketProducts />
                                </div>
                                {/* Buy Btns */}
                                <div className="flex items-center justify-between">
                                    {/* Total price */}
                                    <div>
                                        <p className='text-xs font-DanaMedium mb-[3px] text-gray-300 tracking-tighter'>مبلغ قابل پرداخت</p>
                                        <h1 className='font-DanaDemiBold text-zinc-700 dark:text-white'>۳۵۰,۰۰۰ <span className='text-sm font-Dana'>تومان</span></h1>
                                    </div>
                                    <a href="#" className='transition-all hover:bg-teal-700 transition-colors dark:hover:bg-emerald-600 bg-teal-600 dark:bg-emerald-500 text-white rounded-2xl w-[144px] h-14 tracking-tightest flex items-center justify-center'>
                                        ثبت سفارش
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Theme Switch Btn */}
                    <div className='cursor-pointer'>
                        <svg onClick={() => this.darkModeBtn()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline-block dark:hidden">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                        <svg onClick={() => this.darkModeBtn()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hidden dark:inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </div>
                </div>
                {/* Divide Border */}
                <span className='block w-px h-14 bg-white/20'></span>
                {/* Login link */}
                <a href="#" className='flex gap-x-2.5 items-center tracking-tightest'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg>
                    <span className='hidden xl:inline-block'>ورود | ثبت نام</span>
                </a>
            </div>
        </div>
      </header>
    )
  }
}
