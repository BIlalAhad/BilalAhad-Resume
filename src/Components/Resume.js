import React from 'react'
import frontend from '../Assets/certeficate.jfif'
export default function Resume() {
  return (
    <section className='mt-20'>
    <h2 className='text-3xl font-serif font-bold w-28 border-b-2 border-black ' id='about'>
    Resume
  </h2>

        <section className='grid sm:grid-flow-col gap-10 sm:gap-5 sm:grid-cols-2 mt-5 sm:mt-16 shadow-2xl sm:shadow-none'>
            <div className='sm:shadow-xl p-5 border-l-4 border-[#040B14]'>
            <h2 className='text-2xl font-serif mb-4'>Summary</h2>
            <p>
            Reliable Software Engineer with 6 Month experience at Governament Thecnical College . Looking for the Role Website Frontend Developement With Reputed Organization that Gives me an Opportunity Where I can Improve my Abilities Which Provide Environment to Share my Skill With other so that i will be a part of success in that Organization
            </p>

           <div className='text-sm'>
                <h2 className='text-2xl font-serif mb-1 mt-14 mb-4'>Education</h2>
                <h3 className=' font-bold'>BS SOFTWARE ENGINEERING</h3>
                <address className='bg-gray-200 p-1'>In progress</address>
                <p>UNIVERSITY OF SWAT (UOS)</p>
           </div>
           <div className='text-sm mt-14'>
                <h3 className=' font-bold'>INTERMEDIATE (PRE ENGINEERING)</h3>
                <address className='bg-gray-200 p-1'>date: 28-july-2020</address>
                <p>Governament Degrss College  Takhtaban Swat</p>
           </div>
           <div className='text-sm mt-14'>
                <h3 className=' font-bold'>MATRICULATION (SCIENCE)</h3>
                <address className='bg-gray-200 p-1'>date: 28-jun-2018</address>
                <p>Khpal Kor Model School & College</p>
           </div>
            </div>
            <div className='shadow-xl p-5 border-l-4 border-[#040B14]'>
                <h2 className='text-2xl font-serif mb-4'>Professional Experience</h2>
                <p>
                Website Frontend Developer
                </p>

                <div className='sm:text-sm'>
                    <h2 className='text-2xl font-serif mb-1 mt-14 mb-4'>Skills</h2>
                    <ul className='list-disc px-2 space-y-1'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>BOOTSTRAP</li>
                        <li>TAILWIND</li>
                        <li>REACT</li>
                        <li>WORDPRESS</li>
                    </ul>
                 </div>
                <div className='text-sm'>
                    <h2 className='text-2xl font-serif mb-1 mt-14 mb-4'>Certeficates</h2>
                    <img src={frontend} alt="" />
                 </div>

            </div>
        </section>
    </section>
  )
}
