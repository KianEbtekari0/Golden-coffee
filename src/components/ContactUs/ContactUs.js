import React, { Component } from 'react'
import CoffeeImg from '../../assets/contact.png'

export default class ContactUs extends Component {
  render() {
    return (
      <section className='mb-8 px-4 md:px-0 md:mb-20'>
        <div className='container'>
            <div className='flex items-center justify-center gap-x-5 lg:gap-x-20'>
                <div className="hidden xs:block">
                    <img src={CoffeeImg} className='lg:w-[300px]' alt="coffee image" />
                </div>
                <div>
                    <h1 className='dark:text-white font-MorabbaMedium text-2xl sm:text-3xl lg:text-5xl'>یکی از بهترین قهوه ها!</h1>
                    <p className='dark:text-white font-MorabbaLight mt-0.5 lg:mt-2.5 text-base sm:text-xl lg:text-2xl'>کیفیت قهوه را از ما بخواهید...</p>
                    <span className='dark:text-white'>...</span>
                    <p className='dark:text-white text-xs sm:text-base lg:text-lg lg:max-w-[700px]'>فضای گرم و دنج ما را احساس کنید. جایی که همه میتوانید قهوه پیدا کنید و دسر های خوشمزه ما را که کاملا با قهوه داغ همراه شده است امتحان کنید. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را میسازد!</p>
                    <a href="#" className='flex items-center justify-center gap-x-2 w-[120px] sm:w-[140px] h-[30px] sm:h-[35px] border text-orange-300 mt-3 text-xs sm:text-base lg:text-base border-orange-300 rounded-3xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        تماس با ما
                    </a>
                </div>
            </div>
        </div>
      </section>
    )
  }
}
