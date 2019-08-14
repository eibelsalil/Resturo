import React from 'react'


const CardConfrimation = ({finish,finishTo,Cancel,Confirm,children}) =>{
    return(
        <div className="contbtnbtn">
        <div className="finishButton">
          <button
            className="cancel"
            onClick={finish}
          >
            <img src={Cancel} alt="cancel" />
          </button>
          <button
            className="confirm"
            onClick={finishTo}
          >
            <img src={Confirm} alt="confirm" />
          </button>
        </div>
        {children}
        <div className="finishConfirmation" />
      </div>
    )
}

export default CardConfrimation