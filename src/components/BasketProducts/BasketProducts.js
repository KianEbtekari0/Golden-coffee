import React from 'react'

export default function BasketProducts(props) {


    const PlusBtn = () => {
        props.PlusBtnBasket()
    }

    const MinusBtn = () => {
        props.MinusBtnBasket()
    }

  return (
    <div className='flex gap-x-2 text-zinc-700 py-5'>
      <img src={props.img} alt="img" className='h-30 w-30' />
        <div className="flex flex-col justify-between">
            <h4 className='text-base font-DanaMedium text-zinc-700 dark:text-white'>{props.description}</h4>
            <div class="flex py-3 items-center">
              <button onClick={() => PlusBtn()} class="group dark:text-white rounded-r-xl px-1 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 22 22" fill="none">
                      <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                          stroke-linecap="round" />
                      <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                          stroke-width="1.6" stroke-linecap="round" />
                      <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                          stroke-width="1.6" stroke-linecap="round" />
                  </svg>
              </button>
              <input type="text"
                  class="border-y border-gray-200 outline-none font-semibold text-sm w-10 py-[7px] dark:placeholder:text-gray-100 placeholder:text-zinc-700 text-center bg-transparent"
                  placeholder={props.count} />
              <button onClick={() => MinusBtn()} class="group rounded-l-xl px-1 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 22 22" fill="none">
                      <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                          stroke-linecap="round" />
                      <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                          stroke-linecap="round" />
                      <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                          stroke-linecap="round" />
                  </svg>
              </button>
            </div>
            <div>
                <p className='text-teal-600 text-xs dark:text-emerald-500'>۱۴,۵۰۰ تومان تخفیف</p>
                <h1 className='text-zinc-700 font-DanaNum dark:text-white'>{props.price} <span className='tracking-tighter text-smfont-Dana'>تومان</span></h1>
            </div>
        </div>
    </div>
  )
}
