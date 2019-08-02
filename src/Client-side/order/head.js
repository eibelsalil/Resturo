import React,{useContext} from "react";
import AppContext from "../../context/AppContext";

const OrderHead = ({ back, order, click,hotelid,table,history }) => {
 const context = useContext(AppContext)

  return (
    <div className="header-order">
      <div className="head-bg-order" />
      <div className="order-headContent">
        {!order ? (
            <img src={back} alt="back" className="back-arrow" onClick={()=>{
              context.changeTheId("123")
              setTimeout(()=>{
               history.push(`/menu/${hotelid}/${table}`)
              },1000)
            }} />
        ) : (
          <img src={back} alt="back" className="back-arrow" onClick={click} />
        )}

        <div className="head-order-text">
          <p className="rest-order">resturant name</p>
          <p className="plate-order">my plate</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHead;
