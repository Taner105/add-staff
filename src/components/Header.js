import React from 'react'
import Button from './Button'

const Header = ({handleClick}) => {
    return (
        <div className='header'>
           <h1>Add Staff Information</h1> 
           <Button handleClick={handleClick}/>
        </div>
    )
}
<h2></h2>
export default Header
