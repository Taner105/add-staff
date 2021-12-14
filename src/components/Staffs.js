import React from 'react'
import Staff from './Staff'

const Staffs = ({staffs, deleteId}) => {
    return (
        <div className='staffs'>
            {
                staffs.map((staff) => {
                    return(
                        <Staff 
                        staff={staff} 
                        deleteId={deleteId}/>
                    )
                })
            }
        </div>
    )
}

export default Staffs
