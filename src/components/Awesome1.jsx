import React, { useState } from 'react'

const Awesome1 = () => {

  const[count,setcount] = useState(0)

  function add (){
    setcount(count+1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>CLICK</button>
    </div>
  )
}

export default Awesome1