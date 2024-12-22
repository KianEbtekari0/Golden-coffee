import React, { Component } from 'react'
import Category1 from '../../assets/categories/category5.png'
import Category2 from '../../assets/categories/category4.png'
import Category3 from '../../assets/categories/category3.png'
import Category4 from '../../assets/categories/category2.png'
import Category5 from '../../assets/categories/category1.png'

export default class ProductsCategory extends Component {
  render() {
    return (
      <section className='mt-10 lg:mt-10 xl:mt-72 lg:my-20'>
          <div className='container'>
              <div className='flex items-center justify-center gap-y-6 gap-x-[29px] md:gap-[65px] flex-wrap'>
                <div className='flex items-center justify-center flex-col md:gap-2.5 gap-1.5 w-25 md:w-50'>
                  <a href="#">
                      <img src={Category1} loading='lazy' alt="category image" />
                  </a>
                  <span className='font-DanaDemiBold text-sm text-zinc-700 dark:text-white md:text-xl'>قهوه دمی و اسپرسو</span>
                </div>
                <div className='flex items-center justify-center flex-col md:gap-2.5 gap-1.5 w-25 md:w-50'>
                  <a href="#">
                      <img src={Category2} loading='lazy' alt="category image" />
                  </a>
                  <span className='font-DanaDemiBold text-sm text-zinc-700 dark:text-white md:text-xl'>پک تستر قهوه</span>
                </div>
                <div className='flex items-center justify-center flex-col md:gap-2.5 gap-1.5 w-25 md:w-50'>
                  <a href="#">
                      <img src={Category3} loading='lazy' alt="category image" />
                  </a>
                  <span className='font-DanaDemiBold text-sm text-zinc-700 dark:text-white md:text-xl'>اسپرسو ساز</span>
                </div>
                <div className='flex items-center justify-center flex-col md:gap-2.5 gap-1.5 w-25 md:w-50'>
                  <a href="#">
                      <img src={Category4} loading='lazy' alt="category image" />
                  </a>
                  <span className='font-DanaDemiBold text-sm text-zinc-700 dark:text-white md:text-xl'>لوازم جانبی و تجهیزات</span>
                </div>
                <div className='flex items-center justify-center flex-col md:gap-2.5 gap-1.5 w-25 md:w-50'>
                  <a href="#">
                      <img src={Category5} loading='lazy' alt="category image" />
                  </a>
                  <span className='font-DanaDemiBold text-sm text-zinc-700 dark:text-white md:text-xl'>قهوه ترک</span>
                </div>
              </div>
          </div>
      </section>
    )
  }
}
