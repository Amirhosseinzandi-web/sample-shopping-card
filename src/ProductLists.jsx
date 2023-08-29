import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { AddToCart , SelfDecreament, SelfIncreament , selfRemove } from './redux/CartSlice'



function ProductLists() {
    const dispatch = useDispatch()
    const { cartBasket , totalSum} = useSelector(state => state.app)


    const AddToBasket = (e) => {
        let parent = e.currentTarget.parentElement
        const newCartItem = {
            name: parent.children[0].innerText,
            price: parent.children[1].innerText,
            quntity: Number(parent.children[2].innerText),
            id: parent.children[0].innerText,
            key: Date.now() ,
            total : (parent.children[1].innerText) * (Number(parent.children[2].innerText))
        }

        // const ind = cartBasket.findIndex(el=>el.id===newCartItem.id)

        dispatch(AddToCart(newCartItem))

    }



    return (
        <>
            <section className='d-flex flex-wrap'>

                <div className='border border-dark m-2 w-25 p-2'>
                    <h1>book</h1>
                    <p>12000</p>
                    <span className='d-block'>1</span>
                    <button onClick={AddToBasket}>buy</button>
                </div>

                <div className='border border-dark m-2 w-25 w-fit p-2'>
                    <h1>watch</h1>
                    <p>14000</p>
                    <span className='d-block'>1</span>
                    <button onClick={AddToBasket}>buy</button>
                </div>

                <div className='border border-dark m-2 w-25 w-fit p-2'>
                    <h1>shampoo</h1>
                    <p>16000</p>
                    <span className='d-block'>1</span>
                    <button onClick={AddToBasket}>buy</button>
                </div>

                <div className='border border-dark m-2 w-25 w-fit p-2'>
                    <h1>phone</h1>
                    <p>18000</p>
                    <span className='d-block'>1</span>
                    <button onClick={AddToBasket}>buy</button>
                </div>

                <div className='border border-dark m-2 w-25 w-fit p-2'>
                    <h1>laptop</h1>
                    <p>20000</p>
                    <span className='d-block'>1</span>
                    <button onClick={AddToBasket}>buy</button>
                </div>

            </section>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />

            <h2>Total is : {totalSum}</h2>

            <section className='border border-3 border-primary d-flex flex-wrap'>
                {
                    cartBasket.map(el => (
                        <div key={el.key} className='border border-dark m-2 w-25 p-2'>
                            <h1>{el.name}</h1>
                            <p>{el.price}</p>
                            <span className='d-block'>{el.quntity}</span>
                            <h3>total is : {el.total}</h3>
                            <button className='btn btn-primary'>{el.quntity}</button>
                            <button onClick={()=>dispatch(SelfIncreament(el))} className='mx-2 btn btn-success'>+</button>
                            <button onClick={()=> dispatch(SelfDecreament(el))} className='btn btn-danger'>-</button>
                            <button onClick={()=>dispatch(selfRemove(el))} className='btn btn-secondary mx-2'>*</button>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default ProductLists