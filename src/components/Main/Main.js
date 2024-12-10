import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <main>
        <section className='home h-[200px] xs:aspect-[2/1] md:aspect-auto xs:h-auto bg-no-repeat bg-cover bg-[center_top] md:bg-home-desktop bg-home-mobile'>
            <div className="container h-full md:min-h-screen flex justify-end items-center">
                <div className='text-white'>
                    <h2 className='font-MorabbaBold text-2xl md:mb-2 mb-0.5 md:text-6xl'>قهوه عربیکا</h2>
                    <span className='font-MorabbaLight text-xl md:text-5xl'>!یک فنجان بالانس</span>
                    <span className='block w-[100px] h-px md:h-0.5 md:my-8 my-3 bg-orange-300 '></span>
                    <p className='max-w-[201px] md:max-w-[460px] text-xs md:text-2xl'>قطعا نام آشنا عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواجی مختلف کمربند قهوه کشت میشود.</p>
                </div>
            </div>
        </section>
      </main>
    )
  }
}
