import React, { useRef, useState } from 'react'
import Modal from './Modal'
import Button from './Button'
import Input from './Input'

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

                const newProject = {
                id: projects.length ? projects[projects.length - 1].id + 1 : 0,
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                date: dateRef.current.value,
                tasks: [],
                };
                setProjects(newProject)
            // setProjects({
            //     title: titleRef.current.value,
            //     description: descriptionRef.current.value,
            //     date: dateRef.current.value,
            // })in app

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
        
        <div className='p-4 bg-[#fafaf9] min-h-screen w-full'>
            <div className='flex flex-col w-[80%]'>
                <form>
                    <div className='flex justify-end items-center w-full gap-2'>
                        <Button text={'Cancel'} type={'reset'} />
                        <Button text={'Save'} type={'submit'} onClick={handleSubmit} />
                    </div>
                    <div className='flex flex-col'>
                        <Input title={'Title'} type={'text'} name={'title'} ref={titleRef} />
                        <Input title={"Description"} type={'textarea'} name={'description'} ref={descriptionRef} />
                        <Input title={'Due Date'} type={"date"} name={'date'} ref={dateRef} />
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default NewProject