import React from 'react'
import bilalahad from '../Assets/bilalahad.JPG'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import bootstrap from '../Assets/bootstrap.jfif'
import react from '../Assets/react.png'
import tailwind from '../Assets/tailwind.png'
import js from '../Assets/js.png'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'


export default function Home() {
  return (
    <div className='sm:ml-[25%] p-5 sm:p-8'>
      <h2 className='text-3xl font-serif font-bold w-20 border-b-2 border-black ' id='about'>
        About
      </h2>

      <div className='grid sm:grid-flow-col sm:grid-cols-2 mt-16 items-center'>
        <img className='w-full sm:w-[80%]' src={bilalahad} alt="" />
        <div className=''>
         <h2  className='text-3xl mt-12 sm:mt-0 '>Web Developer </h2>
         <p>“We don't just sell websites, we create websites that SELL.”</p>
        <div className='flex flex-col mt-4 gap-2 sm:gap-4 mt-12 '>
            <ul className='grid sm:grid-cols-2 gap-2 sm:gap-0 sm:grid-flow-col'>
            <li><span className='text-lg font-bold text-center'>Birthday: </span> 11-Aug-2001</li>
            <li><span className='text-lg font-bold text-center'>Name: </span> Bilal Ahad</li>
        </ul>
        <ul className='grid sm:grid-cols-2 gap-2 sm:gap-0 sm:grid-flow-col'>
            <li><span className='text-lg font-bold text-center'>Phone: </span> +92-3448354004</li>
            <li><span className='text-lg font-bold text-center'>City: </span> Mingora Swat</li>
           
        </ul>
        <ul className='grid sm:grid-cols-2 gap-2 sm:gap-0 sm:grid-flow-col'>
            <li><span className='text-lg font-bold text-center'>Degree: </span> BS Software Engineering</li>
            <li><span className='text-lg font-bold text-center'>Email: </span> engr.bilalahad2001@gmail.com</li>
        </ul>
        </div>
        </div>
      </div>


      <section className='mt-20 bg-gray-100 p-1 sm:p-7 py-8 sm:py-7'>
        <h2 className='text-3xl font-serif font-bold w-20 border-b-2 border-black  mx-auto sm:mx-0' id='about'>
        Skills
        </h2>


        <section className='mt-16'>
           <div className='grid grid-flow-col grid-cols-3 gap-5'>
                <div className=' shadow-2xl border-t-4 border-blue-800 text-center p-2 sm:p-5'> 
                    <img className='mx-auto w-28' src={html} alt="" />
                    <h2 className='sm:text-xl font-bold'>HTML</h2>
                </div>
                <div className=' shadow-2xl border-t-4 border-blue-800 text-center p-2 sm:p-5'> 
                    <img className='mx-auto  w-28' src={css} alt="" />
                    <h2 className='sm:text-xl font-bold'>CSS</h2>
                </div>
                <div className=' shadow-2xl border-t-4 border-blue-800 text-center p-2 sm:p-5'> 
                    <img className='mx-auto  w-28' src={bootstrap} alt="" />
                    <h2 className='sm:text-xl font-bold'>bootstrap</h2>
                </div>
           </div>
           <div className='grid grid-flow-col grid-cols-3 gap-5 mt-5'>
                <div className=' shadow-2xl border-t-4 border-blue-800 text-center p-2 sm:p-5'> 
                    <img className='mx-auto  w-28' src={react} alt="" />
                    <h2 className='sm:text-xl font-bold'>React</h2>
                </div>
                <div className=' shadow-2xl border-t-4 border-blue-800 text-center p-2 sm:p-5'> 
                    <img className='mx-auto  w-28' src={tailwind} alt="" />
                    <h2 className='sm:text-xl font-bold'>tailwind</h2>
                </div>
                <div className=' shadow-2xl border-t-4 border-blue-800 text-center p-2 sm:p-5'> 
                    <img className='mx-auto  w-28' src={js} alt="" />
                    <h2 className='sm:text-xl font-bold'>Javascript</h2>
                </div>
           </div>
        </section>
      </section>
        <Resume/>
        <Portfolio/>
        <Contact/>
    </div>
  )
}
