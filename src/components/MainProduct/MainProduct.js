import React from 'react'
import { useParams } from 'react-router'
import Datas from '../../Datas'

export default function MainProduct() {
  
  const { id } = useParams()

  let mainProductData = Datas.find(data => data.id == id)

  console.log(mainProductData);
  
  
  return (
    <div>
      <img src={mainProductData.img} alt="" />
      {mainProductData.id}
      {mainProductData.description}
      {mainProductData.price}
    </div>
  )
}
