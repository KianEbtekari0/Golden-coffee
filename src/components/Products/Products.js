import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import Header from '../Header/Header'
import img1 from '../../assets/products/p1.png'
import img2 from '../../assets/products/p2.png'
import img3 from '../../assets/products/p3.png'
import img4 from '../../assets/products/p4.png'
import img5 from '../../assets/products/p5.png'
import img6 from '../../assets/products/p6.png'
import img7 from '../../assets/products/p7.png'
import img8 from '../../assets/products/p8.png'

export default function Products() {

  const [products, setProducts] = useState([
    {"id": 1, "img": img1, "description": "قهوه ترک بن مانو به مقدار 100 گرم", "price": 155000},
    {"id": 2, "img": img2, "description": "قهوه ترک بن مانو به مقدار 50 گرم", "price": 30000},
    {"id": 3, "img": img3, "description": "قهوه ترک بن مانو به مقدار 80 گرم", "price": 105000},
    {"id": 4, "img": img4, "description": "قهوه ترک بن مانو به مقدار 150 گرم", "price": 35000},
    {"id": 5, "img": img5, "description": "قهوه ترک بن مانو به مقدار 250 گرم", "price": 125000},
    {"id": 6, "img": img6, "description": "قهوه ترک بن مانو به مقدار  300 گرم", "price": 155000},
    {"id": 7, "img": img7, "description": "قهوه اسپرسو بن مانو مدل پریسکا 500 گرمی", "price": 130000},
    {"id": 8, "img": img8, "description": "قهوه ترک بن مانو به مقدار 350 گرم", "price": 250000}
  ])

  const [userBasket, setUserBasket] = useState([])

  const addProductToBasket = (prodcutId) => {
    let mainProduct = products.find(product => {
      return prodcutId === product.id
    })

    setUserBasket(prevState => {
      return [...prevState, mainProduct]
    })
  }

  return (
    <section className='products w-fit mx-auto md:mb-20 xl:mb-72 pt-8 md:pt-24'>
      <div className='container'>
        <div className="flex px-4 md:px-10 justify-between mb-5 md:mb-12">
            <div>
                <h1 className='dark:text-white font-MorabbaMedium text-xl sm:text-4xl'>جدید ترین محصولات</h1>
                <p className='dark:text-white font-MorabbaLight text-base sm:text-2xl'>فرآوری شده از دانه قهوه</p>
            </div>
            <div className="flex items-center gap-2 mt-auto text-orange-300">
                <p className='font-DanaMedium text-xs sm:text-base'>مشاهده همه محصولات</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 sm:size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>
        </div>
        <div className="dark:text-white grid px-3 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <Product key={product.id} {...product} onAddProduct={addProductToBasket} />
          ))}
        </div>
        <Header data={userBasket} />
      </div>
    </section>
  )
}

