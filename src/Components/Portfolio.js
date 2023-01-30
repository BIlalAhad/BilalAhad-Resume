import React from 'react'
import hostaclass from '../Assets/hostaclass.png'
import pizza from '../Assets/pizza.png'
import uec from '../Assets/uec.png'
import cv from '../Assets/cv.png'
import card from '../Assets/card.png'
import businesscard from '../Assets/businesscard.png'
import fourcard from '../Assets/fourcard.png'
import summary from '../Assets/summary.png'
import services from '../Assets/services.png'

export default function Portfolio() {
  return (
    <div>
    <h2 className='text-3xl font-serif font-bold w-28 border-b-2 border-black  mb-16 mt-20 mx-auto sm-mx-0' id='about'>
     Portfolio
     </h2>
       <section className=' bg-[#ADB1B8] bg-opacity-50  p-5'>
        <div className='grid sm:grid-flow-col sm:grid-cols-3 gap-5'>
         <div className='grid gap-5  text-center border-4 pb-4'>
            <img className='w-full h-64 object-cover brightness-90' src={uec} alt="" />
            <a className='' href="https://uec-web-2nd-templet.netlify.app"><button className=' hover:opacity-70 py-1 px-8 rounded-3xl bg-[#325178] text-white  pb-4'>Visit</button></a>
         </div>
         
         <div className='grid gap-5 text-center border-4 pb-4'>
         <img className='w-full h-64 object-cover brightness-90' src={hostaclass} alt="" />
         <a className='' href="https://hostaclass-website.netlify.app"><button className='hover:opacity-70 py-1 px-8 rounded-3xl bg-[#325178] text-white pb-4 '>Visit</button></a>
         </div>
         <div className='grid gap-5 text-center border-4 pb-4'>
           <img className='w-full h-64 object-cover brightness-90' src={cv} alt="" />
           <a className='' href=""><button className='hover:opacity-70 py-1 px-8 rounded-3xl bg-[#325178] text-white  pb-4'>Visit</button></a>
        </div>

        
        </div>

        <div className='grid sm:grid-flow-col sm:grid-cols-3 gap-5 mt-12'>
        <div className='grid gap-5 text-center border-4 pb-4'>
           <img className='w-full h-64 object-cover brightness-90 ' src={card} alt="" />
           <a className='' href="https://rainbow-praline-a0b6fc.netlify.app/"><button className='hover:opacity-70 py-1 px-8 rounded-3xl bg-[#325178] text-white  pb-4'>Visit</button></a>
        </div>
        
        <div className='grid gap-5 text-center border-4 pb-4'>
           <img className='w-full h-64 object-cover brightness-90 ' src={fourcard} alt="" />
           <a href="https://deft-douhua-685f66.netlify.app"><button className='hover:opacity-70 py-1  px-8 rounded-3xl bg-[#325178] text-white  pb-4'>Visit</button></a>
        </div>
        <div className='grid gap-5 text-center border-4 pb-4'>
        <img className='w-full h-64 object-cover brightness-90 ' src={businesscard} alt="" />
        <a href="https://lighthearted-hummingbird-39f98e.netlify.app/"><button className='hover:opacity-70 py-1  px-8 rounded-3xl bg-[#325178] text-white  pb-4'>Visit</button></a>
     </div> 
       </div>


       <div className='grid sm:grid-flow-col sm:grid-cols-3 gap-5 mt-12'>
       <div className='grid gap-5 text-center border-4 pb-4'>
          <img className='w-full h-64 object-cover brightness-90 ' src={summary} alt="" />
          <a className='m' href="https://incomparable-longma-f75013.netlify.app/"><button className='hover:opacity-70 py-1 px-8 rounded-3xl bg-[#325178] text-white  '>Visit</button></a>

       </div>
       <div className='grid gap-5 text-center border-4 pb-4'>
       <img className='w-full h-64 object-cover brightness-90 ' src={services} alt="" />
       <a href="https://dev-bilalahad-services-web.netlify.app"><button className='hover:opacity-70 py-1  px-8 rounded-3xl bg-[#325178] text-white  pb-4'>Visit</button></a>
    </div>
       </div>


       </section>
    </div>
  )
}
