import React from 'react'
import Table from "./table"
import PlateTable from "./plateTable"


const CompletedCard = ({tableNumber,timer,num,click}) =>{
    return(
        <div className="completedCard">
        <Table tableNumber={tableNumber} timer={timer} click={click} pageDepend={"done-buttonHidden"} />
        <div className="table-paltesCompleted">
        <PlateTable plateName={"FRIED CHICKEN"} palteNumber={num} />
        <PlateTable plateName={"FRIED RICE"} palteNumber={num} />
        <PlateTable plateName={"COLD COFFEE"} palteNumber={num} />
        <PlateTable plateName={"FRIED CHICKEN"} palteNumber={num} />
        <textarea className="plate-comments" />
        </div>
      </div>
    )
}

export default CompletedCard