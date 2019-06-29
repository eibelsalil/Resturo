import React from 'react'


const ErrorSingin = ({email,password}) => {
    return(
        <div className="err">
        {
            !email || !password ? 
            <p>required fields are empty</p>
            :
            <p>email or password is wrong </p>

        }
        
        
        </div>
    )
}

export default ErrorSingin