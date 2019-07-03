import React from 'react'


export default React.createContext({
    total:[],
    orderDish: [],
    addPrice: price =>{},
    deletPrice: index =>{},
    addDish: dish =>{},
    deleteDish: index =>{}
})