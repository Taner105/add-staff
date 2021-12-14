import React from 'react'

const Button = ({handleClick}) => {
    return (
        <div>
            <button className='btn' onClick={handleClick}>Add Infromation</button>
        </div>
    )
}

export default Button
