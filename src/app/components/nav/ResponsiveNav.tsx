"use client";

import React, { useState } from 'react'
import Nav from "../nav/Nav";
import MobileNav from '../nav/MobileNav';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);


  return (
    <div >
        <Nav openNav={showNavHandler} />
        <MobileNav closeNav={closeNavHandler}showNav={showNav}/>
    </div>
  )
}

export default ResponsiveNav;