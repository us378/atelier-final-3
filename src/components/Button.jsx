import React from 'react'

function Button({text, type}) {
  return (
    <>
        <button className='w-20 h-10 pointer rounded-md' type={type}>{text}</button>
    </>
  )
}

export default Button