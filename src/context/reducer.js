import _ from "lodash";



export const ADD_PRICE = "ADD_PRICE";
export const DELETE_PRICE = "DELETE_PRICE";
export const ADD_DISH = "ADD_DISH";
export const DELETE_DISH = "DELETE_DISH ";
export const ADMIN_PAGE = "ADMIN_PAGE";
export const LOGIN_USER = "LOGIN_USER";
export const GET_DISH = "GET_DISH";
export const GET_DISHID = "GET_DISHID";
export const GET_TABLES = "GET_TABLES";
export const ADD_ORDERDISH = "ADD_ORDERDISH";
export const DEC_COUNT = "DEC_COUNT";
export const INC_COUNT = "INC_COUNT";
export const INC_TOTAL = "INC_TOTAL";
export const DEC_TOTAL = "DEC_TOTAL";
export const DELETE_TOTAL = "DELETE_TOTAL";
export const DELETE_AllORDER= "DELETE_AllORDER"
export const DELETE_ALLDISH="DELETE_ALLDISH"
export const DELETE_ALLID = "DELETE_ALLID"
export const INC_RATING = "INC_RATING";
export const DEC_RATING = "DEC_RATING"
export const CHANGE_ID = "CHANGE_ID"
export const DELETE_SHIFT = "DELETE_SHIFT"
export const ADD_RATING = "ADD_RATING"
export const CHRATING_ID= "CHRATING_ID"
export const SET_COLLAPSE= "SET_COLLAPSE"
export const GET_CATEGORYMOD= "GET_CATEGORYMOD"
export const GET_LIVEORDER = "GET_LIVEORDER"


export const priceReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRICE:
      return {
        ...state,
        total: [...state.total, action.price]
      };
    case DELETE_PRICE:
      state.total.splice(action.index, 1);
      return {
        ...state
      };
     case DELETE_TOTAL:
       state.total.length = 0
       return {
         ...state
       }
    default:
      return state;
  }
};

export const dishReducer = (state, action) => {
  switch (action.type) {
    case ADD_DISH:
      let dish = action.dish
      return {
        ...state,
        orderDish: [...state.orderDish,dish]
      };
    case DELETE_DISH:
        _.remove(state.orderDish[1], function(el) {
          return el.count === 0;
        });
      return {
        ...state
      };
      case DELETE_AllORDER:
        state.orderDish.length =0
        return{
            ...state
        }
    case DEC_COUNT:
      state.orderDish[1].map((o) =>
        o.id === action.id ? (o.count = o.count - 1) : o
      );
      return {
        ...state
      };
    case INC_COUNT:
      state.orderDish[1].map((o) =>
        o.id === action.id ? (o.count = o.count + 1) : o
      );
      return {
        ...state
      };
    case INC_TOTAL:
      state.orderDish[1].map((o) =>
        o.id === action.id ? (o.total = o.total + parseInt(o.price)) : o
      );
      return {
        ...state
      };
    case DEC_TOTAL:
      state.orderDish[1].map((o) =>
        o.id === action.id ? (o.total = o.total - parseInt(o.price)) : o
      );
      return {
        ...state
      };
      case DELETE_SHIFT: 
      state.orderDish.shift()
      return{
        ...state
      }
    default:
      return state;
  }
};

export const AdminPageReducer = (state, action) => {
  switch (action.type) {
    case ADMIN_PAGE:
      return {
        ...state,
        AdminPage: action.data
      };

    default:
      return state;
  }
};

export const DishIdReducer = (state, action) => {
  switch (action.type) {
    case GET_DISHID:
      return {
        ...state,
        dishId: [...state.dishId, action.id]
      };
      case DELETE_ALLID:
        state.dishId.length = 0
        return{
          ...state
        }
    default:
      return state;
  }
};

export const getDishReducer = (state, action) => {
  switch (action.type) {
    case GET_DISH:
      return {
        ...state,
        dish: [...state.dish, action.data]
      };
      case DELETE_ALLDISH: 
      state.dish.length = 0
      return{
      ...state
      }
    default:
      return state;
  }
};

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: { action: action.data }
      };
    default:
      return state;
  }
};

export const TablesReducer = (state, action) => {
  switch (action.type) {
    case GET_TABLES:
      return {
        ...state,
        table: action.data
      };
    default:
      return state;
  }
};

export const OrderInfoReducer = (state, action) => {
  switch (action.type) {
    case ADD_ORDERDISH:
   
      return {
        ...state,
        orderInfo: action.data
      };
    default:
      return state;
  }
};

export const RatingReducer = (state,action) =>{
   switch (action.type) {
     case INC_RATING:
       return {
        ...state,
        RatingCount: action.count,
       }
       default:
         return state
   }
}

export const chageIdReducer = (action,state) =>{
  switch(action.type){
    case CHANGE_ID:
      return{
        ...state,
        changeId: action.id
      }
      default:
        return state
  }
}

export const RatingArrayReducer = (action,state) =>{
   switch(action.type){
     case ADD_RATING:
       return{
         ...state,
         RatingDish: action.RatingObj
       }
     default:
       return state
   }
}

export const RatingIdReducer = (action,state) =>{
  switch(action.type){
    case CHRATING_ID:
      return{
        ...state,
        RatingId: action.id
      }
      default: 
      return state
  }
}

export const CollapseReducer = (action,state) =>{
    switch(action.type){
      case SET_COLLAPSE:
        return{
          ...state,
          Collapse: action.bool
        }
        default:
          return state
    }
}

export const CategoryModReducer = (action,state) =>{
   switch(action.type){
     case GET_CATEGORYMOD:
       state.CategoryModel.push(action.data)
       return{
         ...state,
       }
       default:
         return state
   }
}

export const LiveOrderReducer =(action,state) =>{
  switch(action.type){
    case GET_LIVEORDER:
      return{
        ...state,
        LiveOrder: [...state.LiveOrder,action.order]
      }
      default:
        return state
  }
}