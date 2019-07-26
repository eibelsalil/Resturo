import React from 'react'


export default React.createContext({
    total:[],
    orderDish: [],
    AdminPage:"list",
    user: {},
    dish: [],
    dishId: [],
    table: null,
    orderInfo: [],
    setDishId: id => {},
    addPrice: price =>{},
    deletPrice: index =>{},
    addDish: dish =>{},
    deleteDish: index =>{},
    IncCount: (id,count) =>{},
    DecCount: (id,count) =>{},
    Inctotal:(id,total) =>{},
    Dectotal:(id,total) =>{},
    setAdminPage: data =>{},
    LoginUser: data =>{},
    getDish: dish =>{},
    setTable: N =>{},
    setOrderInfo: info =>{},
    DeletTotal: total =>{}
})