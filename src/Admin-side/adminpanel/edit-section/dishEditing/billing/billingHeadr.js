import React from 'react'
import "./billhead.css"

const BillingHeadr = ({name}) =>{
    return(
        <div className="bill-header">
        <p>{name}</p>
        </div>
    )
}

export default BillingHeadr