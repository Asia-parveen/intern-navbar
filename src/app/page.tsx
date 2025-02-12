import React from 'react'
import First from './components/First';
import ResponsiveNav from "./components/nav/ResponsiveNav";

const HomePage = () => {
  return (
    <div>
      <div className='max-w-screen-2xl mx-auto'> <ResponsiveNav />
      <First/>
      </div>
      
    </div>
  )
}

export default HomePage

