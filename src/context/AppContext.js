import React from 'react'


export default React.createContext({
    total:[],
    orderDish: [],
    AdminPage:"list",
    addPrice: price =>{},
    deletPrice: index =>{},
    addDish: dish =>{},
    deleteDish: index =>{},
    setAdminPage: data =>{}
})