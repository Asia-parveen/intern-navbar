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
        <div className="text-[23px] md:text-[33px]  font-semibold text-white">
          Brit<span className="text-[#E487FF]">sols </span>Comp
          <span className="text-[#E487FF]">any</span>
        </div>
        <ul className="lg:flex hidden text-white items-center space-x-6 xl:space-x-10">
          <li className="navlink">
          <Link href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#E487FF] after:transition-all after:duration-300 hover:after:w-full">Home</Link>
          </li>
          <li className="navlink">
          <Link href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#E487FF] after:transition-all after:duration-300 hover:after:w-full">Company</Link>
          </li>
          <li className="navlink">
          <Link href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#E487FF] after:transition-all after:duration-300 hover:after:w-full">About</Link>
          </li>
          <li className="navlink">
          {/* <Link href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#E487FF] after:transition-all after:duration-300 hover:after:w-full">Resources</Link> */}
          </li>
          <li className="navlink">
          <Link href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#E487FF] after:transition-all after:duration-300 hover:after:w-full">Blog</Link>
          </li>
          <li className="navlink">
          <Link href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#E487FF] after:transition-all after:duration-300 hover:after:w-full">Contact</Link>
          </li>
        </ul>
        {/* download manu */}
        <div className="flex items-center space-x-6">
          <Link href="#">
            <button className="relative h-12 w-48 overflow-hidden rounded-full bg-[#E487FF] text-lg shadow group">
              {/* Expanding white background on hover */}
              <span className="absolute inset-0 w-3 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>

              {/* Text color change effect */}
              <span className="relative flex items-center justify-center space-x-3 text-white font-semibold group-hover:text-[#AF3cFF] transition-colors duration-300">
                <span>Sign In</span>
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