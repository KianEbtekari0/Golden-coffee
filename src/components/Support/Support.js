import React from 'react'
import supportImg from '../../assets/svgs/services/support.svg'
import expressDelvery from '../../assets/svgs/services/express-delivery.svg'
import coffeeImg from '../../assets/svgs/services/coffee.svg'
import pitcherImg from '../../assets/svgs/services/pitcher.svg'

export default function Support() {
  return (
    <section className='mb-8 px-4 md:px-0 md:mb-20'>
        <div className='container'>
            <div className='flex items-center justify-between flex-wrap gap-y-7'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={supportImg} className='w-12 xs:w-14' alt="" />
                    </div>
                    <div>
                        <h1 className='dark:text-white text-base md:text-lg'>پشتیبانی شبانه روزی</h1> 
                        <p className='text-xs mt-2.5 dark:text-white'>7 روز هفته . 24 ساعته</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        <img src={expressDelvery} className='w-[70px] xs:w-[85px]' alt="" />
                    </div>
                    <div className=''>
                        <h1 className='dark:text-white text-base md:text-lg'>امکان تحویل اکسپرس</h1> 
                        <p className='text-xs mt-2.5 dark:text-white'>ارسال بسته با سرعت</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={coffeeImg} className='w-9 xs:w-11' alt="" />
                    </div>
                    <div className=''>
                        <h1 className='dark:text-white text-base md:text-lg'>رست تخصصی</h1> 
                        <p className='text-xs mt-2.5 dark:text-white'>تازه و با کیفیت</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={pitcherImg} className='w-12 xs:w-14' alt="" />
                    </div>
                    <div>
                        <h1 className='dark:text-white text-base md:text-lg'>اکسسوری قهوه</h1> 
                        <p className='text-xs mt-2.5 dark:text-white'>وسایل و ابزار دم آوری</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
