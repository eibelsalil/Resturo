import React, { useReducer } from "react";
import AppContext from "./AppContext";
import { ADD_PRICE, DELETE_PRICE,ADD_DISH,DELETE_DISH, priceReducer,dishReducer } from "./reducer";

const GlobalState = ({ children }) => {
  const [totalState, dispatch] = useReducer(priceReducer, { total: [] });
  const [orderDishState,dishdispatch] = useReducer(dishReducer,{orderDish: []})

  const addPrice = (price) => {
    dispatch({ type: ADD_PRICE, price: price });
  };
  const deletPrice = (index) => {
    dispatch({ type: DELETE_PRICE, index: index });
  };

  const addDish = (dish) =>{
    dishdispatch({ type: ADD_DISH, dish: dish });
  }

   const deleteDish = (index) =>{
    dishdispatch({ type: DELETE_DISH, index: index });
   }
  return (
    <AppContext.Provider
      value={{
        total: totalState.total,
        addPrice: addPrice,
        deletPrice: deletPrice,
        orderDish: orderDishState.orderDish,
        addDish: addDish,
        deleteDish: deleteDish
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;
