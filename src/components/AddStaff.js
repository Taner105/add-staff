import React from 'react'
import {useState} from "react"

const AddStaff = ({addStaff}) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        addStaff({name, surname, email})
        setName("");
        setSurname("");
        setEmail("");
    }

    return (
        
        <div>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor="staff">Name</label>
                    <input 
                    id='staff' 
                    type="text" 
                    name='text'
                    placeholder='Add Name'
                    required
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="staff">Surname</label>
                    <input 
                    id='staff' 
                    type="text" 
                    name='text'
                    placeholder='Add Surname'
                    required
                    value={surname} 
                    onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="staff">E-mail</label>
                    <input 
                    id='staff' 
                    type="email" 
                    name='email'
                    placeholder='Add E-mail'
                    required
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
                </div>
                <input type="submit" value="Add Staff" className='btn btn-block' />
            </form>
        </div>
    )
}

export default AddStaff
