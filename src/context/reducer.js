export const ADD_PRICE = "ADD_PRICE";
export const DELETE_PRICE = "DELETE_PRICE";
export const ADD_DISH = "ADD_DISH";
export const DELETE_DISH = "DELETE_DISH "
export const ADMIN_PAGE = "ADMIN_PAGE"


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

export const dishReducer = (state,action) =>{
  switch (action.type) {
    case ADD_DISH:
      return {
        ...state,
        orderDish: [...state.orderDish, action.dish]
      };
    case DELETE_DISH:
      state.orderDish.splice(action.index,1);
      return {
        ...state
      };
    default:
      return state;
  }
}

export const AdminPageReducer = (state,action) =>{
 switch(action.type){
   case ADMIN_PAGE:
     
     return {
       ...state,
       AdminPage: action.data
     }
      
      default:
        return state
 }
 
}