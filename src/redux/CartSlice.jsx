import { createSlice } from "@reduxjs/toolkit";



const cart = createSlice({
    name: "shoppingCart",
    initialState: {
        cartBasket: [] ,
        totalSum: 0
    },
    reducers: {
        AddToCart: (state, action) => {
            const isInBasket = state.cartBasket.some(item => item.id === action.payload.id)
            // const findInd = state.cartBasket.findIndex(el => el.id === action.payload.id)
            if (isInBasket) {
                state.cartBasket = state.cartBasket.map(item=>{
                    if(item.id === action.payload.id){
                        let newQuentity = item.quntity + 1
                        return {
                            ...item , 
                            quntity : item.quntity + 1 , 
                            total : (newQuentity) * (item.price)
                        }
                    }
                    return item
                })
            } else {
                state.cartBasket.push(action.payload)
            }
            state.totalSum = state.cartBasket.reduce((prev , current)=>prev + current.total , 0)
        },
        SelfIncreament: (state, action) => {
            state.cartBasket = state.cartBasket.map(item=>{
                if(item.id === action.payload.id){
                    let newQuentity = item.quntity + 1
                    return {
                        ...item , 
                        quntity : item.quntity + 1 , 
                        total : (newQuentity) * (item.price)
                    }
                }
                return item
            })
            state.totalSum = state.cartBasket.reduce((prev , current)=>prev + current.total , 0)
        } , 
        SelfDecreament : (state , action) =>{
            state.cartBasket = state.cartBasket.map(item=>{
                if(item.id === action.payload.id){
                    let newQuentity = item.quntity - 1
                    return {
                        ...item , 
                        quntity : item.quntity - 1 , 
                        total : (newQuentity) * (item.price)
                    }
                }
                return item
            })
            state.cartBasket.map(temp=>{
                if(temp.id===action.payload.id){
                    if(temp.quntity<1){
                       state.cartBasket = state.cartBasket.filter(el=> el.id !== temp.id)
                    }
                }
                return temp
            })
            state.totalSum = state.cartBasket.reduce((prev , current)=>prev + current.total , 0)
        } , 
        selfRemove : (state , action) =>{
            state.cartBasket.map(item=>{
                if(item.id===action.payload.id){
                    state.cartBasket = state.cartBasket.filter(el=>el.id!==action.payload.id)
                }
                return item
            })
            state.totalSum = state.cartBasket.reduce((prev , current)=>prev + current.total , 0)
        }

    }
})


export const { AddToCart, SelfIncreament , SelfDecreament , selfRemove} = cart.actions
export default cart.reducer