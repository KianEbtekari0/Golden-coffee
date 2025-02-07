import React, { useState } from 'react'

export default function BasketProducts({product, data}) {

  return (
    <div className='flex gap-x-2 text-zinc-700 py-5'>
      <img src={product.img} alt="products img" className='h-30 w-30' />
      <div className="flex flex-col justify-between">
            <h4 className='text-base font-DanaMedium text-zinc-700 dark:text-white'>{product.description}</h4>
            <div>
                <p className='text-teal-600 text-xs dark:text-emerald-500'>۱۴,۵۰۰ تومان تخفیف</p>
                <h1 className='text-zinc-700 font-DanaNum dark:text-white'>{product.price} <span className='tracking-tighter text-smfont-Dana'>تومان</span></h1>
            </div>
      </div>
    </div>
  )
}
