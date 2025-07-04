import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/app-logo.png'
import basketImg from '../../assets/icons8-shopping-bag-94.png'
import BasketProducts from '../BasketProducts/BasketProducts'

export default function Header({data = [], PlusBtn, MinusBtn}) {
    const [active, setActive] = useState(false);
    const [iconRotate, setIconRotate] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [isBasketOpen, setIsBasketOpen] = useState(true);
    const [theme, setTheme] = useState([]);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    } ,[theme])

    const darkModeBtn = () => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove('dark');
            setTheme('light')
        } else {
            document.documentElement.classList.add("dark");
            setTheme('dark')
        }
    };
    
    const subMenuHandler = () => {
        setActive(!active);
        setIconRotate(!iconRotate);
    };

    const openNav = () => {
        setIsNavOpen(true);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    const openBasketNav = () => {
        setIsBasketOpen(true);
    };

    const closeBasketNav = () => {
        setIsBasketOpen(false);
    };

    return (
        <>
            <header className='fixed z-10 hidden md:flex lg:px-10 lg:w-[90%] top-9 right-0 left-0 backdrop-blur-[6px] items-center w-[95%] rounded-3xl h-24 mx-auto px-7 py-5 bg-black/50'>
                <div className="flex items-center justify-between w-full">
                    {/* Logo & Menu */}
                    <nav className='flex items-center h-14 lg:gap-x-9 gap-x-6'>
                        {/* Logo */}
                        <div className="shrink-0">
                            <img src={Logo} alt="app logo" className='w-14' />
                        </div>
                        {/* Menu */}
                        <ul className='flex lg:gap-x-9 gap-x-7 h-full text-gray-300 text-xl tracking-tightest'>
                            <li className='font-DanaMedium leading-[56px] text-orange-200'><Link to="/">صفحه اصلی</Link></li>
                            {/* Has li */}
                            <li className='relative group leading-[56px]'>
                                <Link to="#products" className='group-hover:text-orange-300 transition-all'>فروشگاه</Link>
                                {/* Submenu */}
                                <div className='absolute transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible child:block shadow-normal tracking-normal p-6 space-y-4 w-52 bg-white border-t-[3px] border-t-orange-300 text-zinc-700 text-base dark:text-white rounded-2xl dark:bg-zinc-700'>
                                    <Link to="/" className='block hover:text-orange-300'>قهوه ویژه</Link>
                                    <Link to="/" className='block hover:text-orange-300'>قهوه درجه یک</Link>
                                    <Link to="/" className='block hover:text-orange-300'>تکیبات تجاری</Link>
                                    <Link to="/" className='block hover:text-orange-300'>کپسول قهوه</Link>
                                    <Link to="/" className='block hover:text-orange-300'>قهوه برزیلی</Link>
                                </div>
                            </li>
                            <li className='leading-[56px]'><Link to="bestselling">پرفروش ها</Link></li>
                            <li className='leading-[56px]'><Link to="contactus">تماس با ما</Link></li>
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
                                            <p className='text-gray-300'><span className='font-DanaNum'>{data.reduce((acc, item) => acc + item.count, 0)}</span> مورد</p>
                                            <a href="#" className='flex items-center text-orange-300'>
                                                مشاهده سبد خرید
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                                </svg>
                                            </a>
                                        </div>
                                        {/* products */}
                                        <div className="border-b border-b-gray-300 pb-1 dark:border-b-white/10 divide-y divide-gray-100/10 dark:divide-white/10">
                                            {data.length === 0 ? (
                                                <div className='flex flex-col gap-5 items-center justify-center my-[40px]'>
                                                    <img src={basketImg} alt="" />
                                                    <h1 className='text-zinc-700 font-DanaMedium text-base dark:text-white'>سبد خرید شما خالی است!</h1>
                                                </div>
                                            ) : (
                                                data.length < 3 ? (
                                                    data.map(product => (
                                                        <BasketProducts key={product.id} {...product} basketData={data} PlusBtnBasket={PlusBtn} MinusBtnBasket={MinusBtn} />    
                                                    ))
                                                ) : (
                                                    <>
                                                        {data.map(product => (
                                                            <BasketProducts key={product.id} {...product} />    
                                                        ))}
                                                        <div className='flex flex-col gap-5 items-center justify-center my-[40px]'>
                                                            <h1 className='text-zinc-700 font-DanaMedium text-base dark:text-white'>مشاهده ادامه در سبد خرید</h1>
                                                        </div>
                                                    </>
                                                )
                                            )}

                                        </div>
                                        {/* Buy Btns */}
                                        <div className="flex items-center justify-between">
                                            {/* Total price */}
                                            <div>
                                                <p className='text-xs font-DanaMedium mb-[3px] text-gray-300 tracking-tighter'>مبلغ قابل پرداخت</p>
                                                <h1 className='font-DanaNum text-zinc-700 dark:text-white'>{data.reduce((acc, item) => acc + item.price * item.count, 0)}<span className='text-sm font-DanaDemiBold'> تومان</span></h1>
                                            </div>
                                            <a href="#" className='transition-all hover:bg-teal-700 dark:hover:bg-emerald-600 bg-teal-600 dark:bg-emerald-500 text-white rounded-2xl w-[144px] h-14 tracking-tightest flex items-center justify-center'>
                                                ثبت سفارش
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Theme Switch Btn */}
                            <div className='cursor-pointer'>
                                <svg onClick={() => darkModeBtn()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline-block dark:hidden">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                                <svg onClick={() => darkModeBtn()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hidden dark:inline-block">
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
            <div className='flex absolute top-0 left-0 right-0 px-4 md:hidden w-full h-16 dark:text-white bg-white dark:bg-zinc-700 items-center justify-between'>
                {/* Nav Icon */}
                <a href="#" onClick={() => openNav()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </a>
                {/* Logo */}
                <div>
                    <svg className='relative w-[100px] h-10 dark:text-white text-zinc-700' viewBox="0 0 138 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.97653 1.56084C6.13015 2.7264 3.68246 4.94098 1.70099 9.07875C-2.14539 17.1212 0.710258 25.1636 8.46129 28.0775C11.7249 29.2431 20.4084 29.7676 21.9236 28.7769C22.2733 28.5437 22.6229 26.3292 22.7395 23.5318C22.9726 17.704 22.7395 17.4708 17.3196 17.704C13.4732 17.8788 12.4242 18.753 14.7554 19.802C16.4454 20.5596 17.1448 22.6576 16.6203 24.9305C16.2706 26.2126 15.9792 26.3874 14.6388 26.0378C10.1514 24.9305 8.46129 22.0748 8.46129 15.5477C8.40301 11.7013 8.6944 10.4774 9.80169 8.49597C12.4242 3.83369 7.29571 4.18336 73.4417 4.18336C115.868 4.18336 132.653 4.3582 133.235 4.82443C134.11 5.58205 134.343 18.753 133.468 18.753C133.177 18.753 131.079 16.247 128.806 13.2165L124.668 7.68007H121.172C119.249 7.68007 117.675 7.79663 117.675 7.97146C117.675 8.1463 118.083 8.90392 118.607 9.66154C119.307 10.8271 119.423 12.5172 119.249 18.8695C119.132 23.1238 118.841 27.2033 118.607 27.961C118.141 29.2431 118.2 29.3014 120.356 29.1265L122.629 28.9517L122.804 22.949C122.862 19.6854 123.211 17.0046 123.503 17.0046C123.736 17.0046 125.717 19.6271 127.815 22.8325C131.72 28.8351 132.653 29.5345 136.091 29.1265L137.781 28.9517L137.956 16.7715C138.131 3.0178 137.956 2.37673 134.168 1.32772C132.711 0.919775 112.022 0.686661 72.2179 0.744938C24.0799 0.744938 12.0163 0.919775 9.97653 1.56084Z" fill="#fdba74"/>
                        <path d="M33.2296 7.68023C30.5488 8.32129 26.7607 11.0604 25.362 13.4498C24.6627 14.7319 24.2548 16.5385 24.1965 18.7531C24.1382 21.5505 24.4296 22.4247 25.8283 24.2313C27.9846 27.0287 30.3157 28.4856 34.2786 29.3015C40.5144 30.5836 47.4496 28.0194 49.8973 23.532C54.6178 14.965 48.79 6.92261 38.0085 7.15572C36.4932 7.214 34.3369 7.44711 33.2296 7.68023ZM40.8058 11.3518C41.3303 11.7597 42.3211 12.9836 43.0204 14.0909C46.9833 20.618 40.2813 29.4764 34.6866 25.1055C30.5488 21.8419 30.2574 15.6061 34.1038 12.0511C35.8522 10.4193 39.174 10.1279 40.8058 11.3518Z" fill="#fdba74"/>
                        <path d="M73.0918 18.2285V29.3597L80.3766 29.1266C88.7687 28.8352 91.5661 27.8444 94.072 24.1729C95.9369 21.3755 96.1118 15.9556 94.4217 13.1583C91.6826 8.67085 87.6031 7.15561 78.6282 7.09733H73.0918V18.2285ZM86.5541 12.5755C88.3607 14.3821 88.5356 14.9066 88.5356 17.8206C88.5356 23.2404 86.6124 25.7464 82.4746 25.7464H80.3766V18.5782C80.3766 14.6152 80.5514 11.1768 80.7845 11.002C81.8336 9.89469 84.6892 10.7106 86.5541 12.5755Z" fill="#fdba74"/>
                        <path d="M98.3264 17.4126C98.443 23.1238 98.6178 28.1358 98.7344 28.4855C98.9092 29.0682 101.066 29.2431 106.835 29.2431C114.295 29.2431 114.761 29.1848 115.577 27.9609C116.859 26.096 116.801 24.2894 115.519 24.9305C114.936 25.2219 112.663 25.455 110.39 25.455H106.311V22.5411V19.6271L109.05 19.4523C111.089 19.3357 112.08 18.9278 112.721 17.9953C113.187 17.296 113.595 16.5384 113.595 16.3053C113.595 16.0722 111.964 15.839 109.982 15.7225L106.311 15.5476L106.136 13.4496C105.903 10.4774 106.952 9.7198 110.507 10.5357C112.896 11.0602 113.421 11.0019 114.062 10.186C114.411 9.66153 114.761 8.72907 114.761 8.14629C114.761 7.15555 114.062 7.09727 106.485 7.09727H98.1516L98.3264 17.4126Z" fill="#fdba74"/>
                        <path d="M54.0349 17.7039C54.1515 23.4735 54.5012 28.0775 54.8508 28.4855C55.2588 29.01 57.4151 29.2431 61.6694 29.2431C68.2549 29.2431 69.4787 28.8351 70.0032 26.5623C70.2946 25.3384 70.1198 25.2801 66.1569 25.3967L62.0191 25.455V16.5384V7.68006H57.9396H53.8601L54.0349 17.7039Z" fill="#fdba74"/>
                        <path d="M5.95519 33.5558C2.92471 35.0127 0.943242 37.2856 0.185623 40.1995C-0.397161 42.4141 0.535293 47.7174 1.8757 49.6989C4.32339 53.3122 10.5592 55.1188 18.0188 54.4777C21.399 54.1281 21.6321 54.0698 22.448 52.0883C22.9142 50.981 23.1473 49.932 23.0308 49.7572C22.8559 49.6406 21.5155 49.932 20.0003 50.4565C16.6201 51.6221 14.3473 51.6221 12.3075 50.5731C8.63599 48.6499 6.82936 45.0366 7.64526 41.3068C8.92738 35.4207 12.5406 33.9055 18.7764 36.528C19.7089 36.9359 19.8254 36.7028 19.6506 34.7213L19.4758 32.4485L14.2307 32.2737C9.685 32.1571 8.57771 32.3319 5.95519 33.5558Z" fill="#fdba74"/>
                        <path d="M34.3953 33.0312C28.1012 34.7796 24.4879 39.5584 25.1873 45.328C25.8866 51.5638 31.8893 55.3519 40.3396 54.7108C49.3145 54.128 54.7927 46.4353 51.5874 38.9756C49.3728 33.7306 41.5635 31.0498 34.3953 33.0312ZM42.9039 37.6935C44.8854 39.9664 45.643 43.1134 44.8854 45.969C42.9039 53.3704 34.8032 53.1956 32.5303 45.6194C30.4906 38.8008 38.4747 32.6816 42.9039 37.6935Z" fill="#fdba74"/>
                        <path d="M55.2592 32.5651C55.2009 32.8565 55.2592 33.2645 55.3757 33.6141C55.4923 33.9055 55.7254 38.6261 55.9003 44.1043L56.1916 54.0116L59.9797 54.1864L63.8261 54.3613L63.7678 49.5242V44.687L66.7983 44.5122C69.9454 44.3374 71.4606 43.2884 70.8195 41.7731C70.5864 41.1321 69.5957 40.899 66.9732 40.899H63.4764V38.3347C63.4764 35.1877 64.3506 34.7214 68.4884 35.6539C70.9944 36.2367 71.4023 36.1784 72.1017 35.2459C72.5096 34.6632 72.7427 33.8473 72.6844 33.3228C72.5096 32.6234 71.0526 32.4486 63.8844 32.2737C59.1638 32.2155 55.2592 32.332 55.2592 32.5651Z" fill="#fdba74"/>
                        <path d="M76.2389 32.5651C76.1806 32.8565 76.2389 33.2645 76.3555 33.6141C76.472 33.9055 76.7052 38.6261 76.88 44.1043L77.1714 54.0116L80.9595 54.1864L84.8059 54.3613L84.7476 49.5242V44.687L87.7781 44.5122C90.9251 44.3374 92.4403 43.2884 91.7993 41.7731C91.5661 41.1321 90.5754 40.899 87.9529 40.899H84.4562V38.3347C84.4562 35.1877 85.3304 34.7214 89.4681 35.6539C91.9741 36.2367 92.382 36.1784 93.0814 35.2459C93.4893 34.6632 93.7225 33.8473 93.6642 33.3228C93.4893 32.6234 92.0324 32.4486 84.8641 32.2737C80.1436 32.2155 76.2389 32.332 76.2389 32.5651Z" fill="#fdba74"/>
                        <path d="M97.2191 32.565C97.1608 32.8564 97.2191 33.2643 97.2774 33.614C97.3939 33.9054 97.3939 38.3928 97.3939 43.4631C97.3356 49.4075 97.5688 53.079 97.9767 53.5452C98.4429 54.128 100.658 54.3029 106.369 54.3029H114.178L115.169 52.2631C116.393 49.7571 115.985 49.2909 113.595 50.5148C112.43 51.0975 110.74 51.3889 108.758 51.2724L105.728 51.0975L105.553 47.7174L105.378 44.3955H108.234C111.206 44.3955 112.43 43.6962 112.43 41.9478C112.43 41.0737 111.905 40.8988 108.875 40.8988H105.378L105.553 38.1015C105.728 35.071 106.077 34.8961 110.798 35.8286C112.663 36.2365 113.071 36.12 113.595 35.071C114.994 32.4485 114.236 32.1571 105.436 32.1571C100.949 32.1571 97.2191 32.3319 97.2191 32.565Z" fill="#fdba74"/>
                        <path d="M119.307 41.8896C119.365 47.3094 119.598 52.2631 119.715 52.9625C120.006 54.3029 120.181 54.3029 128.223 54.3029H136.382L137.256 52.2631C138.364 49.524 138.364 49.524 135.974 50.5148C133.41 51.5638 128.515 51.6803 127.757 50.6313C127.466 50.2816 127.291 48.9995 127.349 47.8922C127.407 46.7849 127.524 45.5028 127.524 45.0949C127.582 44.6286 128.573 44.3955 130.438 44.3955C133.41 44.3955 134.984 43.3465 134.401 41.8313C134.168 41.2485 133.002 40.8988 130.671 40.7823L127.291 40.6074L127.116 38.5094C126.883 35.4789 127.932 34.7796 131.72 35.5955C134.401 36.1783 134.809 36.12 135.508 35.2458C135.974 34.663 136.266 33.7889 136.149 33.3226C136.033 32.6233 134.517 32.4485 127.582 32.2736L119.132 32.0988L119.307 41.8896Z" fill="#fdba74"/>
                    </svg>
                </div>

                {/* Nav */}
                <div className={isNavOpen ? 'hidden transition-all' : "absolute dark:bg-zinc-700 px-4 transition-all dark:text-white justify-between flex flex-col py-4 right-0 top-0 w-64 bg-white min-h-screen"}>
                    {/* Nav Header */}
                    <div>
                        <div className="flex absolute items-center justify-between">
                            <div className="">
                                <svg className='w-[100px] h-10 dark:text-white text-zinc-700' viewBox="0 0 138 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.97653 1.56084C6.13015 2.7264 3.68246 4.94098 1.70099 9.07875C-2.14539 17.1212 0.710258 25.1636 8.46129 28.0775C11.7249 29.2431 20.4084 29.7676 21.9236 28.7769C22.2733 28.5437 22.6229 26.3292 22.7395 23.5318C22.9726 17.704 22.7395 17.4708 17.3196 17.704C13.4732 17.8788 12.4242 18.753 14.7554 19.802C16.4454 20.5596 17.1448 22.6576 16.6203 24.9305C16.2706 26.2126 15.9792 26.3874 14.6388 26.0378C10.1514 24.9305 8.46129 22.0748 8.46129 15.5477C8.40301 11.7013 8.6944 10.4774 9.80169 8.49597C12.4242 3.83369 7.29571 4.18336 73.4417 4.18336C115.868 4.18336 132.653 4.3582 133.235 4.82443C134.11 5.58205 134.343 18.753 133.468 18.753C133.177 18.753 131.079 16.247 128.806 13.2165L124.668 7.68007H121.172C119.249 7.68007 117.675 7.79663 117.675 7.97146C117.675 8.1463 118.083 8.90392 118.607 9.66154C119.307 10.8271 119.423 12.5172 119.249 18.8695C119.132 23.1238 118.841 27.2033 118.607 27.961C118.141 29.2431 118.2 29.3014 120.356 29.1265L122.629 28.9517L122.804 22.949C122.862 19.6854 123.211 17.0046 123.503 17.0046C123.736 17.0046 125.717 19.6271 127.815 22.8325C131.72 28.8351 132.653 29.5345 136.091 29.1265L137.781 28.9517L137.956 16.7715C138.131 3.0178 137.956 2.37673 134.168 1.32772C132.711 0.919775 112.022 0.686661 72.2179 0.744938C24.0799 0.744938 12.0163 0.919775 9.97653 1.56084Z" fill="#fdba74"/>
                                    <path d="M33.2296 7.68023C30.5488 8.32129 26.7607 11.0604 25.362 13.4498C24.6627 14.7319 24.2548 16.5385 24.1965 18.7531C24.1382 21.5505 24.4296 22.4247 25.8283 24.2313C27.9846 27.0287 30.3157 28.4856 34.2786 29.3015C40.5144 30.5836 47.4496 28.0194 49.8973 23.532C54.6178 14.965 48.79 6.92261 38.0085 7.15572C36.4932 7.214 34.3369 7.44711 33.2296 7.68023ZM40.8058 11.3518C41.3303 11.7597 42.3211 12.9836 43.0204 14.0909C46.9833 20.618 40.2813 29.4764 34.6866 25.1055C30.5488 21.8419 30.2574 15.6061 34.1038 12.0511C35.8522 10.4193 39.174 10.1279 40.8058 11.3518Z" fill="#fdba74"/>
                                    <path d="M73.0918 18.2285V29.3597L80.3766 29.1266C88.7687 28.8352 91.5661 27.8444 94.072 24.1729C95.9369 21.3755 96.1118 15.9556 94.4217 13.1583C91.6826 8.67085 87.6031 7.15561 78.6282 7.09733H73.0918V18.2285ZM86.5541 12.5755C88.3607 14.3821 88.5356 14.9066 88.5356 17.8206C88.5356 23.2404 86.6124 25.7464 82.4746 25.7464H80.3766V18.5782C80.3766 14.6152 80.5514 11.1768 80.7845 11.002C81.8336 9.89469 84.6892 10.7106 86.5541 12.5755Z" fill="#fdba74"/>
                                    <path d="M98.3264 17.4126C98.443 23.1238 98.6178 28.1358 98.7344 28.4855C98.9092 29.0682 101.066 29.2431 106.835 29.2431C114.295 29.2431 114.761 29.1848 115.577 27.9609C116.859 26.096 116.801 24.2894 115.519 24.9305C114.936 25.2219 112.663 25.455 110.39 25.455H106.311V22.5411V19.6271L109.05 19.4523C111.089 19.3357 112.08 18.9278 112.721 17.9953C113.187 17.296 113.595 16.5384 113.595 16.3053C113.595 16.0722 111.964 15.839 109.982 15.7225L106.311 15.5476L106.136 13.4496C105.903 10.4774 106.952 9.7198 110.507 10.5357C112.896 11.0602 113.421 11.0019 114.062 10.186C114.411 9.66153 114.761 8.72907 114.761 8.14629C114.761 7.15555 114.062 7.09727 106.485 7.09727H98.1516L98.3264 17.4126Z" fill="#fdba74"/>
                                    <path d="M54.0349 17.7039C54.1515 23.4735 54.5012 28.0775 54.8508 28.4855C55.2588 29.01 57.4151 29.2431 61.6694 29.2431C68.2549 29.2431 69.4787 28.8351 70.0032 26.5623C70.2946 25.3384 70.1198 25.2801 66.1569 25.3967L62.0191 25.455V16.5384V7.68006H57.9396H53.8601L54.0349 17.7039Z" fill="#fdba74"/>
                                    <path d="M5.95519 33.5558C2.92471 35.0127 0.943242 37.2856 0.185623 40.1995C-0.397161 42.4141 0.535293 47.7174 1.8757 49.6989C4.32339 53.3122 10.5592 55.1188 18.0188 54.4777C21.399 54.1281 21.6321 54.0698 22.448 52.0883C22.9142 50.981 23.1473 49.932 23.0308 49.7572C22.8559 49.6406 21.5155 49.932 20.0003 50.4565C16.6201 51.6221 14.3473 51.6221 12.3075 50.5731C8.63599 48.6499 6.82936 45.0366 7.64526 41.3068C8.92738 35.4207 12.5406 33.9055 18.7764 36.528C19.7089 36.9359 19.8254 36.7028 19.6506 34.7213L19.4758 32.4485L14.2307 32.2737C9.685 32.1571 8.57771 32.3319 5.95519 33.5558Z" fill="#fdba74"/>
                                    <path d="M34.3953 33.0312C28.1012 34.7796 24.4879 39.5584 25.1873 45.328C25.8866 51.5638 31.8893 55.3519 40.3396 54.7108C49.3145 54.128 54.7927 46.4353 51.5874 38.9756C49.3728 33.7306 41.5635 31.0498 34.3953 33.0312ZM42.9039 37.6935C44.8854 39.9664 45.643 43.1134 44.8854 45.969C42.9039 53.3704 34.8032 53.1956 32.5303 45.6194C30.4906 38.8008 38.4747 32.6816 42.9039 37.6935Z" fill="#fdba74"/>
                                    <path d="M55.2592 32.5651C55.2009 32.8565 55.2592 33.2645 55.3757 33.6141C55.4923 33.9055 55.7254 38.6261 55.9003 44.1043L56.1916 54.0116L59.9797 54.1864L63.8261 54.3613L63.7678 49.5242V44.687L66.7983 44.5122C69.9454 44.3374 71.4606 43.2884 70.8195 41.7731C70.5864 41.1321 69.5957 40.899 66.9732 40.899H63.4764V38.3347C63.4764 35.1877 64.3506 34.7214 68.4884 35.6539C70.9944 36.2367 71.4023 36.1784 72.1017 35.2459C72.5096 34.6632 72.7427 33.8473 72.6844 33.3228C72.5096 32.6234 71.0526 32.4486 63.8844 32.2737C59.1638 32.2155 55.2592 32.332 55.2592 32.5651Z" fill="#fdba74"/>
                                    <path d="M76.2389 32.5651C76.1806 32.8565 76.2389 33.2645 76.3555 33.6141C76.472 33.9055 76.7052 38.6261 76.88 44.1043L77.1714 54.0116L80.9595 54.1864L84.8059 54.3613L84.7476 49.5242V44.687L87.7781 44.5122C90.9251 44.3374 92.4403 43.2884 91.7993 41.7731C91.5661 41.1321 90.5754 40.899 87.9529 40.899H84.4562V38.3347C84.4562 35.1877 85.3304 34.7214 89.4681 35.6539C91.9741 36.2367 92.382 36.1784 93.0814 35.2459C93.4893 34.6632 93.7225 33.8473 93.6642 33.3228C93.4893 32.6234 92.0324 32.4486 84.8641 32.2737C80.1436 32.2155 76.2389 32.332 76.2389 32.5651Z" fill="#fdba74"/>
                                    <path d="M97.2191 32.565C97.1608 32.8564 97.2191 33.2643 97.2774 33.614C97.3939 33.9054 97.3939 38.3928 97.3939 43.4631C97.3356 49.4075 97.5688 53.079 97.9767 53.5452C98.4429 54.128 100.658 54.3029 106.369 54.3029H114.178L115.169 52.2631C116.393 49.7571 115.985 49.2909 113.595 50.5148C112.43 51.0975 110.74 51.3889 108.758 51.2724L105.728 51.0975L105.553 47.7174L105.378 44.3955H108.234C111.206 44.3955 112.43 43.6962 112.43 41.9478C112.43 41.0737 111.905 40.8988 108.875 40.8988H105.378L105.553 38.1015C105.728 35.071 106.077 34.8961 110.798 35.8286C112.663 36.2365 113.071 36.12 113.595 35.071C114.994 32.4485 114.236 32.1571 105.436 32.1571C100.949 32.1571 97.2191 32.3319 97.2191 32.565Z" fill="#fdba74"/>
                                    <path d="M119.307 41.8896C119.365 47.3094 119.598 52.2631 119.715 52.9625C120.006 54.3029 120.181 54.3029 128.223 54.3029H136.382L137.256 52.2631C138.364 49.524 138.364 49.524 135.974 50.5148C133.41 51.5638 128.515 51.6803 127.757 50.6313C127.466 50.2816 127.291 48.9995 127.349 47.8922C127.407 46.7849 127.524 45.5028 127.524 45.0949C127.582 44.6286 128.573 44.3955 130.438 44.3955C133.41 44.3955 134.984 43.3465 134.401 41.8313C134.168 41.2485 133.002 40.8988 130.671 40.7823L127.291 40.6074L127.116 38.5094C126.883 35.4789 127.932 34.7796 131.72 35.5955C134.401 36.1783 134.809 36.12 135.508 35.2458C135.974 34.663 136.266 33.7889 136.149 33.3226C136.033 32.6233 134.517 32.4485 127.582 32.2736L119.132 32.0988L119.307 41.8896Z" fill="#fdba74"/>
                                </svg> 
                            </div>
                            <a href='#' onClick={() => closeNav()}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </a>
                        </div>
                        {/* Nav Menu */}
                        <div className='py-6'>
                            <ul className='flex flex-col pr-2.5 gap-x-7 dark:text-white border-t border-t-gray-100 dark:border-t-white/10 pt-6 text-zinc-600 text-lg tracking-tightest'>
                                <li className='flex cursor-pointer items-center gap-x-2 text-orange-300 bg-orange-200/20 mb-4 pr-2.5 -mr-2.5 h-10 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg><a href="#">صفحه اصلی</a></li>
                                {/* Has li */}
                                <li className='flex dark:text-white cursor-pointer items-center gap-x-2 group relative leading-[55px]' onClick={() => subMenuHandler()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 transition-all group-hover:text-orange-300"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                                    <a href="#" className='flex items-center justify-between group-hover:text-orange-300 transition-all'>
                                        فروشگاه
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={iconRotate ? 'rotate-180 size-5 absolute left-0 transition-all' : "size-5 absolute left-0 transition-all group group-hover:text-orange-300"}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </a>
                                </li>
                                {/* Submenu */}
                                <div className={active ? 'px-[28px] transition-all group-hover:opacity-100 group-hover:visible tracking-normal space-y-4 border-t-orange-300 text-zinc-600 dark:text-white text-sm' : 'hidden transition-all'}>
                                    <a href="#" className='block hover:text-orange-300'>قهوه ویژه</a>
                                    <a href="#" className='block hover:text-orange-300'></a>
                                    <a href="#" className='block hover:text-orange-300'>قهوه درجه یک</a>
                                    <a href="#" className='block hover:text-orange-300'>تکیبات تجاری</a>
                                    <a href="#" className='block hover:text-orange-300'>کپسول قهوه</a>
                                    <a href="#" className='block hover:text-orange-300'>قهوه برزیلی</a>
                                </div>
                                <li className='flex cursor-pointer group transition-all hover:text-orange-300 items-center gap-x-2 leading-[55px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg><a href="#">دیکشنری</a></li>
                                <li className='flex cursor-pointer group transition-all hover:text-orange-300 items-center gap-x-2 leading-[55px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg><a href="#">درباره ما</a></li>
                                <li className='flex cursor-pointer group transition-all hover:text-orange-300 items-center gap-x-2 leading-[55px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg><a href="#">بلاگ</a></li>
                                <li className='flex cursor-pointer group transition-all hover:text-orange-300 items-center gap-x-2 leading-[55px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" /></svg><a href="#">تماس با ما</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Nav Footer */}
                    <div className="flex items-start flex-col gap-y-6 pt-8 border-t border-t-gray-100 dark:border-t-white/10">
                        <a href="#" className='inline-flex gap-x-2 items-center text-orange-300 tracking-tightest'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                            </svg>
                            <span className=''>ورود | ثبت نام</span>
                        </a>

                        <a href="#" className='flex items-center text-orange-300 gap-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            سبد خرید
                        </a>
                        <div className='flex items-center gap-x-2 cursor-pointer text-orange-300'>
                            <svg onClick={() => darkModeBtn()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 inline-block dark:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                            <svg onClick={() => darkModeBtn()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 hidden dark:inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                            <span>تم تیره</span>
                        </div>
                    </div>
                </div>

                {/* Basket Icon */}
                <a href="#" onClick={() => openBasketNav()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-zinc-700 dark:text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </a>
                {/* User Basket */}
                <div className={isBasketOpen ? "hidden transition-all" : "flex justify-between transition-all absolute dark:bg-zinc-700 py-5 px-4 dark:text-white flex-col left-0 top-0 w-[17rem] bg-white min-h-screen"}>
                    {/* cart header */}
                    <div>
                        <div className='pb-5 border-b border-b-gray-300 dark:border-b-white/10'>
                            <div className='flex justify-between items-center'>
                                <a href='#' className='font-DanaMedium text-zinc-700 dark:text-white' onClick={() => closeBasketNav()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </a>
                                سبد خرید
                            </div>
                        </div>
                        {/* cart body */}
                        <div className="border-b border-b-gray-300 pb-1 dark:border-b-white/10 divide-y divide-gray-100/10 dark:divide-white/10">
                        </div>
                    </div>
                    <div className='flex flex-col rounded-2xl space-y-4 dark:bg-zinc-700 bg-white '>
                        {/* cart footer */}
                        <div className="flex items-center justify-between">
                            <a href="#" className='transition-all hover:bg-teal-700 dark:hover:bg-emerald-600 bg-teal-600 dark:bg-emerald-500 text-white rounded-2xl w-[130px] h-14 tracking-tightest flex items-center justify-center'>
                                ثبت سفارش
                            </a>
                            {/* Total price */}
                            <div>
                                <p className='text-xs font-DanaMedium mb-[3px] text-gray-300 tracking-tighter'>مبلغ قابل پرداخت</p>
                                <h1 className='font-DanaDemiBold text-zinc-700 dark:text-white'>{data.reduce((acc, item) => acc + item.price * item.count, 0)}<span className='text-sm font-Dana'>تومان</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
