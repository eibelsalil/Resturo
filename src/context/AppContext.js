import React from 'react'


export default React.createContext({
    total:[],
    orderDish: [],
    AdminPage:"list",
    user: {},
    dish: [],
    addPrice: price =>{},
    deletPrice: index =>{},
    addDish: dish =>{},
    deleteDish: index =>{},
    setAdminPage: data =>{},
    LoginUser: data =>{},
    getDish: dish =>{}
})