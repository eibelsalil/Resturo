import React, { useReducer } from "react";
import AppContext from "./AppContext";
import {
  ADD_PRICE,
  DELETE_PRICE,
  ADD_DISH,
  DELETE_DISH,
  priceReducer,
  dishReducer,
  ADMIN_PAGE,
  AdminPageReducer,
  LOGIN_USER,
  LoginReducer,
  GET_DISH,
  getDishReducer,
  GET_DISHID,
  DishIdReducer,
  GET_TABLES,
  TablesReducer,
  ADD_ORDERDISH,
  OrderInfoReducer,
  DEC_COUNT,
  INC_COUNT,
  INC_TOTAL,
  DEC_TOTAL,
  DELETE_TOTAL,
  DELETE_SHIFT,
  INC_RATING,
  RatingReducer,
  CHANGE_ID,
  chageIdReducer,
  RatingArrayReducer,
  ADD_RATING,
  CHRATING_ID,
  RatingIdReducer
} from "./reducer";

const GlobalState = ({ children }) => {
  const [totalState, dispatch] = useReducer(priceReducer, { total: [] });
  const [orderDishState, dishdispatch] = useReducer(dishReducer, {
    orderDish: []
  });
  const [userState, dispatchUser] = useReducer(LoginReducer, {
    user: {}
  });
  const [adminPageState, pagedishpatch] = useReducer(AdminPageReducer, {
    AdminPage: "list"
  });
  const [dishState, getDishdishpatch] = useReducer(getDishReducer, {
    dish: []
  });
  const [dishIdState, getdishIdDihpatch] = useReducer(DishIdReducer, {
    dishId: []
  });
  const [tableState, getTableDishpacth] = useReducer(TablesReducer, {
    table: null
  });
  const [orderInfoState, setOrderinfoDishpatch] = useReducer(OrderInfoReducer, {
    orderInfo: []
  });
  const [ratingState,setRatingSDishpatch] = useReducer(RatingReducer,{
    RatingCount: 0
  })

  const [changeidState,setChangeIdDishpatch] = useReducer(chageIdReducer,{
    changeId: ""
  })
  const [RatingDishState,setRatingDishDishpatch] = useReducer(RatingArrayReducer,{
    RatingDish: null
  })
 const [RatingIdState,setRatingIdDishpatch] = useReducer(RatingIdReducer,{
  RatingId: ''
 })

 


  const addPrice = (price) => {
    dispatch({ type: ADD_PRICE, price: price });
  };
  const deletPrice = (index) => {
    dispatch({ type: DELETE_PRICE, index: index });
  };
  const DeletTotal = () => {
    dispatch({type: DELETE_TOTAL})
  }
  const addDish = (dish) => {
    dishdispatch({ type: ADD_DISH, dish: dish });
  };

  const deleteDish = (index) => {
    dishdispatch({ type: DELETE_DISH, index: index });
  };

  const DecCount = (id, count) => {
    dishdispatch({ type: DEC_COUNT, id: id, count: count });
  };

  const IncCount = (id, count) => {
    dishdispatch({ type: INC_COUNT, id: id, count: count });
  };
  const Inctotal = (id, count) => {
    dishdispatch({ type: INC_TOTAL, id: id, count: count });
  };
  const Dectotal = (id, count) => {
    dishdispatch({ type: DEC_TOTAL, id: id, count: count });
  };
const DeleteFirstDish = () =>{
  dishdispatch({type: DELETE_SHIFT})
}

  const setAdminPage = (data) => {
    pagedishpatch({ type: ADMIN_PAGE, data: data });
  };

  const LoginUser = (data) => {
    dispatchUser({ type: LOGIN_USER, data: data });
  };

  const getDish = (data) => {
    getDishdishpatch({ type: GET_DISH, data: data });
  };
  const setDishId = (id) => {
    getdishIdDihpatch({ type: GET_DISHID, id: id });
  };

  const setTable = (data) => {
    getTableDishpacth({ type: GET_TABLES, data });
  };

  const setOrderInfo = (data) => {
    setOrderinfoDishpatch({ type: ADD_ORDERDISH, data: data });
  };
 
  const IncRating = (count) =>{
    setRatingSDishpatch({type: INC_RATING, count: count})
  }
  
  const changeTheId = (id) =>{
   setChangeIdDishpatch({type: CHANGE_ID, id:id})
  }


 const setRatingDish = (RatingObj) =>{
   setRatingDishDishpatch({type: ADD_RATING, RatingObj:RatingObj})
 }

 const setRatingId = (id) =>{
  setRatingIdDishpatch({type: CHRATING_ID, id:id})
 }

  return (
    <AppContext.Provider
      value={{
        total: totalState.total,
        addPrice: addPrice,
        deletPrice: deletPrice,
        orderDish: orderDishState.orderDish,
        addDish: addDish,
        deleteDish: deleteDish,
        AdminPage: adminPageState.AdminPage,
        setAdminPage: setAdminPage,
        user: userState.user,
        LoginUser: LoginUser,
        dish: dishState.dish,
        getDish: getDish,
        dishId: dishIdState.dishId,
        setDishId: setDishId,
        table: tableState.table,
        setTable: setTable,
        orderInfo: orderInfoState.orderInfo,
        setOrderInfo: setOrderInfo,
        DecCount: DecCount,
        IncCount: IncCount,
        Inctotal: Inctotal,
        Dectotal: Dectotal,
        DeletTotal: DeletTotal,
        DeleteFirstDish: DeleteFirstDish,
        RatingCount: ratingState.RatingCount,
        IncRating: IncRating,
        changeId: changeidState.changeId,
        changeTheId: changeTheId,
        RatingDish: RatingDishState.RatingDish,
        setRatingDish: setRatingDish,
        RatingId: RatingIdState.RatingId,
        setRatingId: setRatingId
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;
