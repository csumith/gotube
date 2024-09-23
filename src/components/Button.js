import React from 'react'

const Button = () => {
    let button = ["Defence","Music","Lives" ,"Indian", "Games", "Cricket","News","Whether", "Serial","Movies", "Politics", "High-Court"  ,"Supreme-Court"];
  return (
    <div className=''>
      {button.map((btn)=><button key={btn} className='bg-black opacity-90 text-white p-2 m-2 mt-2 rounded-lg'>{btn}</button>)}
    </div>
  )
}

export default Button
