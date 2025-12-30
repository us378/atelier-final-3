import React, { useState } from 'react'
import Modal from './Modal'
import Button from './Button'

function NewProject({projects, setProjects}) {
    const [showModal, setShowModal] = useState(false)
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: ""
    })

    const validateform = (formData) => {
        if (formData.title === "") {
            setErrors(prev => [...prev, 'Title error'])
        }else if (formData.description === "") {
            setErrors(prev => [...prev, 'Title error'])
        } else if (formData.date === "") {
            setErrors(prev => [...prev, 'Title error'])
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateform(formData)) {
            setProjects(formData)
            setShowModal(false)
        } else {
            setShowModal(true)
        }
        
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleCancel = () => {
        setFormData({
            title: "",
            description: "",
            date: "",
        })
    }

  return (
    <>
        {showModal ? <Modal errors={errors} /> : ""}
        
        <div className='p-4 bg-[#fafaf9] min-h-screen w-full inset-0'>
            <div className='flex flex-col w-[80%]'>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-end items-center w-full gap-2'>
                        <button onClick={handleCancel} className='w-20 h-10 pointer rounded-md'>Cancel</button>
                        <button className='border w-20 h-10 pointer bg-black text-white text-sm rounded-md'>Save</button>
                    </div>
                    <div className='flex flex-col'>
                        <label className='project-label' htmlFor="title">Title</label>
                        <input className='project-input' type="text" name="title" value={formData.title} onChange={handleChange}  />
                        <label className='project-label' htmlFor="description">Description</label>
                        <textarea className='project-input' name="description" value={formData.description} onChange={handleChange} rows="2"></textarea>
                        <label className='project-label' htmlFor="title">Due Date</label>
                        <input className='project-input' type="date" name="date" value={formData.date} onChange={handleChange}/>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default NewProject