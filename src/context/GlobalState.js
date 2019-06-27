import React, { useReducer } from "react";
import AppContext from "./AppContext";
import { ADD_PRICE, DELETE_PRICE, priceReducer } from "./reducer";

const GlobalState = ({ children }) => {
  const [totalState, dispatch] = useReducer(priceReducer, { total: [] });

  const addPrice = (price) => {
    dispatch({ type: ADD_PRICE, price: price });
  };
  const deletPrice = (index) => {
    dispatch({ type: DELETE_PRICE, index: index });
  };
  return (
    <AppContext.Provider
      value={{
        total: totalState.total,
        addPrice: addPrice,
        deletPrice: deletPrice
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;
