import React from 'react'
import Link from "next/link";
import { ImCross } from "react-icons/im";

interface Prop {
  showNav: boolean;
  closeNav:()=> void;
}

const MobileNav = ({closeNav,showNav}:Prop) => {
  const navOpenStyle = showNav ? 'translate-x-0': 'translate-x-[-100%]'


  return (
   <div >
    {/* black shade overlay */}
     <div 
    className={`fixed ${navOpenStyle} top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]`}>
    </div>
    <ul className={`text-white ${navOpenStyle} fixed flex top-0 pt-0  items-center justify-center flex-col h-[100vh] transform transition-all duration-300 delay-300 w-[58%] sm:w-[60%] bg-[#AF3CFF] space-y-6 z-[10006] `}>
      <li className='navlink text-[20px] sm:text-[25px] '>
        <Link href= "#">Home</Link>
      </li>
      <li className='navlink text-[20px] sm:text-[25px] '>
        <Link href="#" >Company</Link>
      </li>
      
      <li className='navlink text-[20px] sm:text-[25px] y'>
        <Link href= "#">Resources</Link>
      </li>
      <li className='navlink text-[20px] sm:text-[25px]'>
        <Link href="#" >Contact</Link>
      </li>
      <li className='navlink text-[20px] sm:text-[25px] '>
        <Link href= "#">About</Link>
      </li>
      <li className='navlink text-[20px] sm:text-[25px] '>
        <Link href= "#">Blog</Link>
      </li>
     
      <ImCross 
      onClick={closeNav}
       className='absolute top-[-1.4rem] right-[1.4rem] w-[1.4rem] h-[1.4rem] text-white' />
    </ul>
    
   
   
   </div>
      
  )
}

export default MobileNav; 