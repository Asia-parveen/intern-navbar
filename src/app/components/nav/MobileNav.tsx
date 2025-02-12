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
   <div>
    {/* black shade overlay */}
     <div 
    className={`fixed ${navOpenStyle} top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]`}>
    </div>
    <ul className={`text-white ${navOpenStyle} fixed flex top-0 items-center justify-center flex-col h-[100vh] transform transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-[#AF3CFF] space-y-10 z-[10006]`}>
      <li className='navlink text-[25px] sm:text-[30px]'>
        <Link href= "#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Home</Link>
      </li>
      <li className='navlink text-[25px] sm:text-[30px]'>
        <Link href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Company</Link>
      </li>
      <li className='navlink text-[25px] sm:text-[30px]'>
        <Link href= "#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</Link>
      </li>
      <li className='navlink text-[25px] sm:text-[30px]'>
        {/* <Link href= "#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Resources</Link> */}
      </li>
      <li className='navlink text-[25px] sm:text-[30px]'>
        <Link href= "#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Blog</Link>
      </li>
      <li className='navlink text-[25px] sm:text-[30px]'>
        <Link href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</Link>
      </li>
      <ImCross 
      onClick={closeNav}
       className='absolute top-[-1.4rem] right-[1.4rem] w-[1.4rem] h-[1.4rem] text-white' />
    </ul>
    
   
   
   </div>
      
  )
}

export default MobileNav; 