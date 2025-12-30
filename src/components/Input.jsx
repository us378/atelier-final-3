import React from 'react'

function Input({title, type, name, ref}) {

  if(type === 'textarea'){
    return (
      <>
        <label className='project-label' htmlFor={name}>{title}</label>
        <textarea className='project-input' name={name} ref={ref} rows="2" ></textarea>
      </>
    )
  }

  return (
    <>
        <label className='project-label' htmlFor={name}>{title}</label>
        <input className='project-input' type={type} name={name} ref={ref} />
    </>
  )
}

export default Input