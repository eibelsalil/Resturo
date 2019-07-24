



export const ADD_PRICE = "ADD_PRICE";
export const DELETE_PRICE = "DELETE_PRICE";
export const ADD_DISH = "ADD_DISH";
export const DELETE_DISH = "DELETE_DISH "
export const ADMIN_PAGE = "ADMIN_PAGE"
export const LOGIN_USER = "LOGIN_USER"
export const GET_DISH = "GET_DISH"
export const GET_DISHID = "GET_DISHID"
export const GET_TABLES = "GET_TABLES"
export const ADD_ORDERDISH = "ADD_ORDERDISH"


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

export const DishIdReducer = (state,action) =>{
  switch(action.type){
    case GET_DISHID:
      return{
        ...state,
        dishId: [...state.dishId,action.id]
      }
      default:
        return state
  }
}

export const getDishReducer = (state,action) =>{
  switch(action.type){
    case GET_DISH:
    return {
      ...state,
      dish: [...state.dish,action.data]
    }
    default:
      return state
  }
}

export const LoginReducer = (state,action)=>{
  switch(action.type){
    case LOGIN_USER:
    return {
      ...state,
      user: {action: action.data}
    }
    default:
      return state
  }
}

export const TablesReducer = (state,action) =>{
  switch(action.type){
    case GET_TABLES: 
    return{
      ...state,
      table:action.data
    }
    default:
      return state
  }
}

export const OrderInfoReducer = (state,action) =>{
  switch(action.type){
    case ADD_ORDERDISH: 
    return{
      ...state,
      orderInfo: [...state.orderInfo,action.data]
    }
    default: 
    return state
  }
}