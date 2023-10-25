import React, { useEffect, useState } from 'react'
// import {GiGoat} from 'react-icons/gi'

const Drizzy = () => {
  const [display, setDisplay] = useState("")
  const [search, setSearch] = useState("Batman")

  function handleSubmit(e){
    e.preventDefault()
    const name = e.target.names.value
    setDisplay(name)
    e.target.reset()
  }




  
  return (
    <div className='bg-cyan-700 flex flex-col items-center h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center my-20 w-[500px]'>
            <input className='border w-full py-4 px-10 outline-none rounded-md' name='names' type="search" placeholder='Search'/>
            <button className='bg-blue-500 text-white w-full py-4 rounded-md'>Submit</button>
            <div className='bg-cyan-500 w-[500px] mt-7 text-[30px] py-5 px-5 rounded-md'>{display}</div>
        </form>
    </div>
  )
}

export default Drizzy