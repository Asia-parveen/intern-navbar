import React from "react";
import Link from "next/link";
// import { faDownload } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

interface Props {
  openNav:() => void;
}

const Nav = ({ openNav }:Props) => {
  return (
    <div className="h-[13vh] bg-[#181a1d]">
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto">
        <div className="text-[20px] sm:text-[25px] md:text-[27px] lg:text-[30px]  font-semibold text-[#E487FF]">
          Brit<span className="text-white">sols</span>.
          <span className="text-[#E487FF]">com</span>
        </div>
        <ul className=" max-w-screen-2xl mx-auto lg:flex hidden text-white items-center space-x-6 xl:space-x-10">
          <li className="navlink">
          <Link href="#">Home</Link>
          </li>
          <li className="navlink">
          <Link href="#" >Company</Link>
          </li>
          <li className="navlink">
          <Link href="#" >About</Link>
          </li>
          <li className="navlink">
          <Link href="#" >Resources</Link>
          </li>
          <li className="navlink">
          <Link href="#" >Blog</Link>
          </li>
          <li className="navlink">
          <Link href="#" >Contact</Link>
          </li>
        </ul>
        {/* download manu */}
        <div className="flex items-center space-x-6">
          <Link href="#">
            <button className="relative h-7 sm:h-10 w-[100px] ml-2 sm:w-[110px] md:w-[120px] overflow-hidden rounded-full bg-[#E487FF] text-lg shadow group">
              {/* Expanding white background on hover */}
              <span className="absolute inset-0 w-3 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>

              {/* Text color change effect */}
              <span className="relative flex items-center justify-center space-x-3 text-white font-sembold group-hover:text-[#AF3cFF] transition-colors duration-300">
                <span className="text-[14px] font-sembold ">Sign In</span>
              </span>
            </button>
          </Link>
          {/* burger manu */}
          <HiBars3BottomRight 
          onClick={openNav} 
          className="w-[2rem] text-white h-[2rem] lg:hidden"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;