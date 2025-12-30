import React from 'react'

function Modal({errors, handleCloseModal}) {  
  //console.log(errors);
  
  return (
    <div className='w-[300px] h-[150px] px-2 py-1 absolute bg-neutral-300 top-[40%] left-[40%] rounded-md border-2 border-neutral-400'>
        <div className='w-full flex flex-row items-center justify-end text-red-500 text-sm font-bold hover:underline pointer' onClick={handleCloseModal}>Close</div>
        <div className='mt-1 flex items-center justify-start w-full'>
            <ul className='p-3'>
                {errors.map((err, key) => (
                    <li key={key}>{err}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Modal