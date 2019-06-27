export const ADD_PRICE = "ADD_PRICE";
export const DELETE_PRICE = "DELETE_PRICE";



export const priceReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRICE:
      return {
        ...state,
        total: [...state.total, action.price]
      };
    case DELETE_PRICE:
      state.total.splice(action.index,1);
      return {
        ...state
      };
    default:
      return state;
  }
};
