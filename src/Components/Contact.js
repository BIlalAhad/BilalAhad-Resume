import React from 'react'
import {AiFillEnvironment, AiFillRedEnvelope,AiFillPhone,AiFillLinkedin ,AiFillFacebook, AiFillGithub} from 'react-icons/ai'

export default function Contact() {
  return (
    <div className='mt-20'>
    <h2 className='text-3xl font-serif font-bold w-44 border-b-2 border-black mb-16' id='contact'>
    Contact Us
  </h2>
    <section className='grid sm:grid-flow-col sm:grid-cols-2 gap-5 shadow-2xl sm:shadow-none '>
        <div className='grid gap-4 sm:shadow-2xl p-5'>
            <div className='flex items-center gap-5'>
                <AiFillEnvironment className='text-3xl' />
                <div>
                    <h2 className='text-2xl font-serif '>Location</h2>
                    <p>Pakistan Mingora Swat</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <AiFillRedEnvelope className='text-3xl' />
                <div >
                    <h2 className='text-2xl font-serif '>Email</h2>
                    <p>engr.bilalahad2001@gmail.com</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
            <AiFillPhone className='text-3xl' />
                <div >
                    <h2 className='text-2xl font-serif '>Call</h2>
                    <p>+92-3448354004</p>
                </div>
            </div>
        </div>
        <div className='grid gap-4 sm:shadow-2xl pt-0 sm:pt-5 p-5'>
        <div className='flex items-center gap-5'>
        <AiFillLinkedin className='text-3xl'/>
       <div>
            <h2 className='text-2xl font-serif '>Linkedin</h2>
            <p>Engr BilalAhad</p>
       </div>
        </div>
        <div className='flex items-center gap-5'>
        <AiFillFacebook className='text-3xl'/>
           <div className=''>
                <h2 className='text-2xl font-serif '>Facebook</h2>
                <p>Bilal Ahad</p>
           </div>
        </div>
        <div className='flex items-center gap-5'>
            <AiFillGithub className='text-3xl'/>
           <div>
                <h2 className='text-2xl font-serif '>Github</h2>
                <p>Engr Bilal Ahad</p>
           </div>
        </div>
        
        </div>
        
        </section>
    </div>
  )
}
