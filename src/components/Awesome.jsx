import React, { useState } from 'react'
import Nav from './Nav'

const Awesome = () => {
  const [nav,setNav] = useState(false)

  function click(){
    setNav(!nav)
  }


  return (
    <div>

      {
        !nav?
          ""
        : <Nav/> 
      }

      <button className='text-orange-500 border-black p-5' onClick={click}>Display The Nav Component</button>

    </div>
  )
}

export default Awesome