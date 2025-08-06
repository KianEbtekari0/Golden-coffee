import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Datas from '../../Datas'

export default function MainProduct() {
  
  const { id } = useParams()

  let mainProductData = Datas.find(data => data.id == id)
  
  return (
    <>
    <Header />
    <div className='flex flex-col container mt-[50px] md:mt-[200px] max-w-[1000px] p-6'>
      <div className='flex justify-start rtl:flex-row-reverse w-full'>
        <Link to='/' class="inline-flex items-center gap-1.5 text-orange-300 font-DanaMedium text-base md:text-lg px-5 py-2.5 dark:focus:ring-primary-900">
          صفحه اصلی
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </Link>
      </div>
      <section className='max-w-[1000px] p-6 flex-col md:flex-row flex items-center justify-between'>
        <div>
          <img src={mainProductData.img} className='w-[300px] md:w-[350px]' alt="Products image" />
        </div>
        <div className='flex flex-col gap-3'>
          {mainProductData.available === true ? (
            <p className='bg-[#d0f2e4] text-teal-600 tracking-tighter font-DanaMedium w-[85px] text-sm py-[3px] text-center rounded-md'>موجود در انبار</p>
          ) : (
            <p className='bg-[#FDE8E8] text-[#9B1C1C] tracking-tighter font-DanaMedium w-[85px] text-sm py-[3px] text-center rounded-md'>ناموجود در انبار</p>
          )}
          <div className='flex items-center justify-between'>
            <p className='font-Dana text-lg md:text-xl'>{mainProductData.name}</p>
            <p className='text-zinc-700 font-DanaNum text-lg md:text-xl dark:text-white'>
              {mainProductData.price}
              <span className='text-xs md:text-sm font-DanaMedium'> تومان</span>
            </p>
          </div>
          <div className="flex text-orange-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 md:size-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 md:size-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 md:size-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 md:size-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </div>
          <div>
            <h1 className='font-DanaDemiBold text-base md:text-lg'>اندازه ها</h1>
            <div className='flex gap-3 mt-2'>
              <div className='font-Dana border px-4 py-2 border-gray-300 rounded-lg items-center flex justify-center'>
                <p>بزرگ</p>
              </div>
              <div className='font-Dana border px-4 py-2 border-gray-300 rounded-lg items-center flex justify-center'>
                <p>متوسط</p>
              </div>
              <div className='font-Dana border px-4 py-2 border-gray-300 rounded-lg items-center flex justify-center'>
                <p>کوچک</p>
              </div>
            </div>
            <button className='mt-4 transition-all hover:bg-teal-700 dark:hover:bg-emerald-600 bg-teal-600 dark:bg-emerald-500 font-DanaDemiBold w-[200px] text-white rounded-2xl h-12 tracking-tightest flex items-center justify-center'>
              افزودن به سبد خرید
            </button>
          </div>
          <div>
            <h1 className='font-DanaDemiBold text-base md:text-lg'>توضیحات</h1>
            <p className='mt-2 font-Dana'>{mainProductData.description}</p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}