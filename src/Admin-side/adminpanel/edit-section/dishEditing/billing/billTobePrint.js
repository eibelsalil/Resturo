import React, { useEffect, useState } from "react";
import CompletedCard from "../../../cards/completedCard";
import uuid from "uuid";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PlateTableCC from "../../../cards/plateTableCompleted";
import { add } from "../../../../../Client-side/order/orderHelper";

const RenderSelectedBill = ({ selectedBill, CompletedTimer, Back }) => {
  const [total, setTotal] = useState([]);
  const [tax,setTax] = useState()
  let amount = add(total)
  useEffect(() => {
    if (selectedBill) {
      Object.keys(selectedBill.dishes[0]).map((key) =>
        setTotal((total) => [...total, selectedBill.dishes[0][key][2]])
      );
    }
  }, [selectedBill]);
 
  useEffect(()=>{
     setTax(add(total) * (7 / 100))
  },[total])


  const selectElement = (orderId) => {
    let item = document.getElementById("bill");
    html2canvas(item, { scale: "1" }).then((canvas) => {
      const imgdata = canvas.toDataURL("img/png");
      const pdf = new jsPDF("landscape", "mm", "a5");
      let width = pdf.internal.pageSize.getWidth();
      let hieght = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgdata, "JPEG", 0, 0, width, hieght);
      pdf.save(orderId);
    });
  };
  let id = selectedBill.orderId
    .split("-")
    .splice(0, 2)
    .join("");
  return (
    <div id="bill">
      <CompletedCard
        key={selectedBill.orderId}
        tableNumber={selectedBill.table}
        timer={CompletedTimer(selectedBill.time)}
        borderDepend={"plateNumberBill"}
        classDpends={"bill-cont-print"}
        pageDepend={"bill-Button2"}
        buttonText={"PRINT"}
        Statedpend={"tableBillCont"}
        borderTabledpend={"table-paltes-Billing1"}
        tabletextDepend={"plate-commentsDis"}
        OrderNumber={"OrderId-bill"}
        orderId={id}
        clickRef={() => {
          selectElement(selectedBill.orderId);
          Back();
        }}
      >
        {Object.keys(selectedBill.dishes[0]).map((key) => (
          <PlateTableCC
            key={uuid()}
            plateName={key}
            palteNumber={selectedBill.dishes[0][key][0]}
            price={selectedBill.dishes[0][key][1]}
            total={selectedBill.dishes[0][key][2]}
            borderDepend={"plateBill"}
            plateTableDepend={"table-paltes"}
          />
        ))}
        <div className="billTotal">
        <div className="billTotalCont">
          <div className="sub-total">
            <p className="SUB_TO">SUB TOTAL</p>
            <p className="TOT">{amount}</p>
          </div>
          <div className="GST">
            <div className="SUB-GST">
              <p className="gst">GST</p>
              <p className="perscentage">(7.00%)</p>
            </div>
            <p className="totalTax">{parseFloat(tax).toFixed(3)}</p>
          </div>
        </div>
        <div className="Amout-withTaxes">
        <p className="amount-Title">Amount Incl of all Taxes</p>
        <p className="amount-number">{amount + tax}</p>
        </div>
        </div>
      </CompletedCard>
    </div>
  );
};

export default RenderSelectedBill;
