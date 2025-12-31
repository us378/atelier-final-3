import React from 'react'

function Button({text, type, onClick}) {
  if (type === 'reset') {
    return(
      <>
        <button type={type} className='w-20 h-10 pointer rounded-md'>{text}</button>
      </>
    )
  }
  return (
    <>
        <button className='border w-20 h-10 pointer bg-black text-white text-sm rounded-md' onClick={onClick} type={type}>{text}</button>
    </>
  )
}

export default Button