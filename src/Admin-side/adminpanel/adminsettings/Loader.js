import React from 'react'
import Looader from "react-loader-spinner"
import "./loader.css"

const Loader = () =>{
    return (
        <Looader 
    type="Oval"
    color="#707070"
    height="100"	
    width="100"
    className="loader"
    />
    )     
}

export default Loader
