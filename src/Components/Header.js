import React from 'react'
import vg from '../Assets/profilepic.JPG'
import { AiFillFacebook,AiFillLinkedin,AiFillGithub, AiFillHome  ,AiFillProject , AiFillCustomerService, AiOutlineProfile, AiFillContacts} from 'react-icons/ai'
import { HashLink } from 'react-router-hash-link'
import developer from '../Assets/developer.jpeg'
import Home from './Home'

export default function Header() {
    function hamburger(){
        let items=document.getElementById('navitems');
        items.classList.toggle('hidden');
    }
  return (

    <>
    <div className=''>

   <section className='grid grid-flow-col justify-between p-5 sm:hidden' onClick={hamburger}>
    <ul className='grid gap-1'>
    <li className='w-10 h-2 gap-1 rounded-2xl bg-black'></li>
    <li className='w-10 h-2 gap-1 rounded-2xl bg-black'></li>
    <li className='w-10 h-2 gap-1 rounded-2xl bg-black'></li>
        </ul>

        <h2 className='text-2xl font-bold font-serif'>Resume.com</h2>
   </section>
   
    <section className=' sm:fixed bg-[#040B14] sm:w-[25%] h-[100vh]  hidden sm:grid' id='navitems'>
    <nav className=''>
        <div className='py-8 space-y-3'>
            <img className='mx-auto border-8 border-[#2C2F3F] w-32 rounded-full' src={vg} alt="" />
            <h1 className='text-center text-2xl font-bold text-white'>Bilal Ahad </h1>
            <div className=' flex flex-row justify-center gap-4'>
                <AiFillFacebook className='bg-white cursor-pointer text-3xl rounded-lg hover:brightness-75'/>
                <AiFillGithub className='bg-white cursor-pointer text-3xl rounded-lg hover:brightness-75'/>
                <AiFillLinkedin className='bg-white cursor-pointer text-3xl rounded-lg hover:brightness-75'/>
            </div>
        </div>

        <main className='flex flex-col gap-8 my-9 translate-x-8'>
            <div className='flex items-center gap-4'>
                <AiFillHome className='text-2xl bg-gray-400'/>
                <HashLink to={"./#home"} className="text-white">HOME</HashLink>
            </div>
            <div className='flex items-center gap-4'>
                <AiOutlineProfile className='text-2xl bg-gray-400'/>
                <HashLink to={"./#about"} className="text-white"> About</HashLink>
            </div>
            <div className='flex items-center gap-4'>
                <AiFillProject className='text-2xl bg-gray-400'/>
                <HashLink to={"./Portfolio"} className="text-white">Portfolio</HashLink>
            </div>
           
            <div className='flex items-center gap-4'>
                <AiFillContacts className='text-2xl bg-gray-400'/>
                <HashLink to={"./#Contact"} className="text-white">Contact</HashLink>
            </div>    
        </main>
    </nav>
    <h2 className='text-gray-200 text-center '>Coded By Bilal Ahad</h2>
    </section>
    </div>

    <section className='bg-[#040B14] w-full sm:h-[100vh] ' >
        <div className='sm:ml-[25%] relative '>
           <img className='sm:h-[100vh] object-cover' src={developer} alt="" />  
           <h2 className='sm:text-4xl md:text-5xl font-serif border-b-2  font-bold bg-black bg-opacity-30 top-52  text-white absolute sm:top-40 md:top-52  right-0 left-0 text-center ' id='home'>Yes I am Web Developer</h2>    
        </div>    
    </section>

   </>
  )
}
