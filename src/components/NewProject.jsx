import React, { useRef, useState } from 'react'
import Modal from './Modal'
import Button from './Button'

function NewProject({projects, setProjects}) {
    const [showModal, setShowModal] = useState(false)
    const [errors, setErrors] = useState([])

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const dateRef = useRef(null)
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const validatedErrors = validateform()
        setErrors(validatedErrors);
        
        if (validatedErrors.length > 0) {
            setShowModal(true)
        }else {
            setShowModal(false)
            setErrors([])

            // setProjects({
            //     title: titleRef.current.value,
            //     description: descriptionRef.current.value,
            //     date: dateRef.current.value,
            // })

            titleRef.current.value = ''
            descriptionRef.current.value = ''
            dateRef.current.value = ''
        }
    }

    const validateform = () => {
        const newErrors = []
        
        if (!titleRef.current.value) {
            newErrors.push('Title error')
        }
        if (!descriptionRef.current.value) {
            newErrors.push('Description error')
        }
        if (!dateRef.current.value) {
            newErrors.push('Date error')
        }
        return newErrors
        
    }

    const handleCloseModal = () => {
        setErrors([])
        setShowModal(false)
    }

  return (
    <>
        {showModal ? <Modal errors={errors} handleCloseModal={handleCloseModal} /> : ""}
        
        <div className='p-4 bg-[#fafaf9] min-h-screen w-full inset-0'>
            <div className='flex flex-col w-[80%]'>
                <form>
                    <div className='flex justify-end items-center w-full gap-2'>
                        <button type='reset' className='w-20 h-10 pointer rounded-md'>Cancel</button>
                        <button onClick={handleSubmit} className='border w-20 h-10 pointer bg-black text-white text-sm rounded-md'>Save</button>
                    </div>
                    <div className='flex flex-col'>
                        <label className='project-label' htmlFor="title">Title</label>
                        <input className='project-input' type="text" name="title" ref={titleRef} />
                        <label className='project-label' htmlFor="description">Description</label>
                        <textarea className='project-input' name="description" ref={descriptionRef} rows="2" ></textarea>
                        <label className='project-label' htmlFor="title">Due Date</label>
                        <input className='project-input' type="date" name="date" ref={dateRef} />
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default NewProject