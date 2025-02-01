import React from 'react'
import telegramImg from '../../assets/svgs/telegram.svg'
import logoTypeImg from '../../assets/svgs/logo-type.svg'
import logoImg from '../../assets/svgs/logo.svg'

export default function Footer() {
  return (
    <footer className='px-5 md:px-10 xl:px-16 pt-9 pb-5 bg-zinc-700'>
        <div>
            <div className='flex flex-wrap gap-y-4 justify-between'>
                <div className='text-gray-300 px-3'>
                    <div className='flex gap-4 mb-3'>
                        <img src={logoImg} alt="Logo" />
                        <img src={logoTypeImg} className='w-24 md:w-30' alt="Logo" />
                    </div>
                    <p className='text-xs md:text-base xl:text-lg xl:max-w-[700px]'>و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                </div>
                <div className='px-3'>
                    <h1 className='text-white font-DanaDemiBold text-base md:text-lg mb-3'>دسترسی سریع</h1>
                    <div className='flex flex-wrap gap-x-4 gap-y-3 md:gap-8 text-xs xs:text-base text-gray-300'>
                        <div className='flex space-y-1 flex-col gap-x-4'>
                            <div className='flex gap-x-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                                <a href="#">قهوه مخصوص</a>
                            </div>
                            <div className='flex gap-x-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                                <a href="#">شرایط استفاده</a>
                            </div>
                            <div className='flex gap-x-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                                <a href="#">ثبت سفارش</a>
                            </div>
                            <div className='flex gap-x-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                                <a href="#">قهوه اکسپرس</a>
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <div className='flex gap-x-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                                <a href="#">پرسش های متداول</a>
                            </div>
                            <div className='flex gap-x-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                                <a href="#">فرصت های شغلی</a>
                            </div>
                            <div className='flex gap-x-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                                <a href="#">شماره تماس</a>
                            </div>
                            <div className='flex gap-x-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                </svg>
                                <a href="#">ارتباط با ما</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-3'>
                    <h1 className='text-white font-DanaDemiBold text-base md:text-lg mb-3'>در تماس باشیم</h1>
                    <div className='flex gap-x-1 text-xs xs:text-base text-gray-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 xs:size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        خ آزادی نبش خ خمسه پلاک ۵۲۵ 
                    </div>
                    <div className='flex gap-x-3 mt-2 text-xs xs:text-base text-gray-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 xs:size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        ۷۰۶۹ ۱۱۵ ۰۹۱۲ 
                    </div>
                    <div className='flex gap-3 flex-wrap mt-4'>
                        <a href="#" className='text-zinc-700 flex items-center justify-center bg-gradient-btn gap-x-1.5 text-base w-[120px] md:w-[150px] h-[30px] rounded-xl'>
                            <img src={telegramImg} className='w-5' alt="Telegram image" />
                            lil_coffee
                        </a>
                        <a href="#" className='text-gray-300 flex items-center justify-center bg-zinc-700 border border-orange-300 gap-x-1.5 w-[120px] md:w-[150px] h-[30px] rounded-xl'>
                            <svg viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6'>
                                <path d="M13.7405 5.9375C9.52393 5.9375 6.05884 9.39795 6.05884 13.6191V24.3809C6.05884 28.5974 9.51929 32.0625 13.7405 32.0625H24.5022C28.7188 32.0625 32.1838 28.6021 32.1838 24.3809V13.6191C32.1838 9.40259 28.7234 5.9375 24.5022 5.9375H13.7405ZM13.7405 8.3125H24.5022C27.4385 8.3125 29.8088 10.6829 29.8088 13.6191V24.3809C29.8088 27.3171 27.4385 29.6875 24.5022 29.6875H13.7405C10.8042 29.6875 8.43384 27.3171 8.43384 24.3809V13.6191C8.43384 10.6829 10.8042 8.3125 13.7405 8.3125ZM26.135 10.9102C25.5366 10.9102 25.0588 11.3879 25.0588 11.9863C25.0588 12.5847 25.5366 13.0625 26.135 13.0625C26.7334 13.0625 27.2112 12.5847 27.2112 11.9863C27.2112 11.3879 26.7334 10.9102 26.135 10.9102ZM19.1213 11.875C15.2017 11.875 11.9963 15.0803 11.9963 19C11.9963 22.9197 15.2017 26.125 19.1213 26.125C23.041 26.125 26.2463 22.9197 26.2463 19C26.2463 15.0803 23.041 11.875 19.1213 11.875ZM19.1213 14.25C21.7607 14.25 23.8713 16.3606 23.8713 19C23.8713 21.6394 21.7607 23.75 19.1213 23.75C16.4819 23.75 14.3713 21.6394 14.3713 19C14.3713 16.3606 16.4819 14.25 19.1213 14.25Z" fill="#d1d5db"/>
                            </svg>
                            lil_coffee
                        </a>
                    </div>
                </div>
            </div>
            <hr className='text-gray-300 my-5' />
            <div className='flex text-gray-300 items-center justify-between'>
                <div className='hidden xs:flex items-center gap-x-3'>
                    <span className='text-orange-300'>
                        .
                    </span>
                    خ آزادی نبش خ خمسه پلاک 525
                </div>
                <h1 className='text-xs md:text-base'>تمام حقوق محفوظ است</h1>
            </div>
        </div>
    </footer>
  )
}
