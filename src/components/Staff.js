import React from 'react'
import {AiFillCloseCircle} from "react-icons/ai"
const Staff = ({staff, deleteId}) => {
    return (
        <div className='staff'>
            <h3>{staff.name} {staff.surname}
             <AiFillCloseCircle 
             style={{color:"red"}}
             onClick={() => deleteId(staff.id)}
             />
             </h3>
            <h4 style={{color:"red"}}>{staff.email}</h4>
        </div>
    )
}

export default Staff
