import React from 'react'

export default function BasketProducts(props) {

  console.log(props.count);
  

  return (
    <div className='flex gap-x-2 text-zinc-700 py-5'>
      <img src={props.img} alt="img" className='h-30 w-30' />
      <div className="flex flex-col justify-between">
            <h4 className='text-base font-DanaMedium text-zinc-700 dark:text-white'>{props.description}</h4>
            <p className='font-DanaNum text-[15px]'>تعداد محصول: {props.count}</p>
            <div>
                <p className='text-teal-600 text-xs dark:text-emerald-500'>۱۴,۵۰۰ تومان تخفیف</p>
                <h1 className='text-zinc-700 font-DanaNum dark:text-white'>{props.price} <span className='tracking-tighter text-smfont-Dana'>تومان</span></h1>
            </div>
      </div>
    </div>
  )
}
