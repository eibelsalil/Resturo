import React from 'react'
import CompletedCard from '../../../cards/completedCard';
import PlateTable from '../../../cards/plateTable';
import uuid from "uuid"
import html2canvas from "html2canvas";
import jsPDF  from "jspdf"

const RenderSelectedBill = ({selectedBill,CompletedTimer,Back}) =>{
   const selectElement = (orderId) =>{
       let item = document.getElementById("bill")
       html2canvas(item,{scale: "1"})
       .then((canvas)=>{
        const imgdata = canvas.toDataURL("img/png")
        const pdf = new jsPDF("landscape", "mm", "a5")
        let width = pdf.internal.pageSize.getWidth()
        let hieght = pdf.internal.pageSize.getHeight()
        pdf.addImage(imgdata, 'JPEG', 0, 0,width, hieght);
        pdf.save(orderId)
     }) 
   }
  let id = selectedBill.orderId.split("-").splice(0,2).join("")
    return(
        <div   id="bill">
        <CompletedCard
         key={selectedBill.orderId}
         tableNumber={selectedBill.table}
         timer={CompletedTimer(selectedBill.time)}
         borderDepend={"plateNumberBill"}
         classDpends={"bill-Cont"}
         pageDepend={"bill-Button"}
         buttonText={"PDF"}
         Statedpend={"tableBillCont"}
         borderTabledpend={"table-paltes-Billing2"}
         tabletextDepend={"plate-commentsDis"}
         orderId={id}
         clickRef={()=>{
            selectElement(selectedBill.orderId)
            Back()
         }}
       >
         {Object.keys(selectedBill.dishes[0]).map((key) => (
           <PlateTable
             key={uuid()}
             plateName={key}
             palteNumber={selectedBill.dishes[0][key]}
             borderDepend={"palteNumber"}
             plateTableDepend={"table-paltes"}
           />
         ))}
       </CompletedCard>
       </div>
    )
}

export default RenderSelectedBill