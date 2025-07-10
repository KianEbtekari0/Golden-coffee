import React, { useState } from 'react'
import Product from '../Product/Product'
import Header from '../Header/Header'
import Datas from '../../Datas'
import BestSelling from '../BestSelling/BestSelling'

export default function Products() {

  const [products, setProducts] = useState(Datas)

  const [userBasket, setUserBasket] = useState([])

  const addProductToBasket = (productId) => {
    setUserBasket(prevBasket => {
      const existingProduct = prevBasket.find(item => item.id === productId);

      if (existingProduct) {
        return prevBasket.map((item) =>
          item.id === productId ? { ...item, count: item.count + 1 } : item
        );
      } else {
        const mainProduct = products.find((product) => product.id === productId);
        if (mainProduct) {
          return [...prevBasket, { ...mainProduct, count: 1 }];
        }
      }

      return prevBasket;
    })
  }

  const plus = (productId) => {
    setUserBasket(prevBasket => {
      const existingProduct = prevBasket.find(item => item.id === productId);

      if (existingProduct) {
        return prevBasket.map((item) =>
          item.id === productId ? { ...item, count: item.count + 1 } : item
        );
      } else {
        const mainProduct = products.find((product) => product.id === productId);
        if (mainProduct) {
          return [...prevBasket, { ...mainProduct, count: 1 }];
        }
      }

      return prevBasket;
    })
  }

  const minus = (productId) => {
    setUserBasket(prevBasket => {
      const existingProduct = prevBasket.find(item => item.id === productId);

      if (existingProduct) {
        return prevBasket.map((item) =>
          item.id === productId ? { ...item, count: item.count - 1 } : item
        );
      } else {
        const mainProduct = products.find((product) => product.id === productId);
        if (mainProduct) {
          return [...prevBasket, { ...mainProduct, count: 1 }];
        }
      }

      return prevBasket;
    })
  }

  const deleteProduct = (productId) => {
    setUserBasket(prev => prev.filter(item => item.id !== productId));
  }

  return (
    <>
      <section id='prodcuts' className='products w-fit mx-auto md:mb-20 xl:mb-72 pt-8 md:pt-24'>
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
        </div>
      </section>
      <Header data={userBasket} PlusBtn={plus} MinusBtn={minus} RemoveItem={deleteProduct} />
      <BestSelling onAddProduct={addProductToBasket} />
    </>
  )
}

