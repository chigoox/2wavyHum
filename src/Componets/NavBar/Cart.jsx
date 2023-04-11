import React, { useState } from 'react'
import CartItem from './CartItem'
import { AiOutlineCloseSquare } from 'react-icons/ai'

function Cart({ toggleCart, showCart, setClientCart, clientCart, cartTotal }) {
    const checkOut = async () => {
        const STRIPE_CART = Object.values(clientCart).map((item) => {
            return { quantity: item.count, price: item.priceID }
        })


        fetch('/.netlify/functions/CheckOut', {
            method: 'POST',
            redirect: 'follow',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cart: STRIPE_CART
            })
        }).then(res => {
            res.json().then(res => {
                window.location.href = res.url
            })
        })


    }
    return (
        <div className={`${showCart ? 'h-[40rem]' : 'h-[0rem]'}   w-[25rem] trans-slow bg-[#080808] m-auto rounded-b-3xl absolute  top-16 -right-[.3rem] md:right-16`}>
            <div className={`${showCart ? 'h-[40rem] visible' : 'h-0  invisible opacity-0'}  w-[25rem] trans-slow  flex items-center p-2 flex-col rounded-b-3xl `}>
                <div className='bg-[#080808] h-12 w-12  absolute right-[6.2rem] -top-10 rounded-t-full'></div>
                <button onClick={toggleCart} className='absolute right-0  mx-2 h-10 w-10 hover:text-rose-700 trans-slow hover:scale-105 text-4xl center text-white'><AiOutlineCloseSquare /></button>
                <h1 className='text-3xl font-bold'>Cart</h1>
                <div className=' w-[98%] overflow-y-scroll h-[80%] flex-col gap-5 mt-4 p-2 '>
                    {Object.values(clientCart).map((item, index) => (
                        <CartItem key={index}
                            qty={item.count}
                            name={item.name}
                            img={item.img}
                            price={item.salePrice ? item.salePrice : item.price}
                            setClientCart={setClientCart}
                        />))}

                </div>
                <div className='border-t-2 text-xl h-fit rounded-md  border-white p-2 gap-2 font-bold flex justify-between w-full'>
                    <div className='center flex-col '>
                        <h1 className=''>Total</h1>
                        <h1>${cartTotal}</h1>
                    </div>

                    <div className='flex-grow flex w-32 self-end'>
                        <button onClick={() => { checkOut() }} className={`${showCart ? 'trans-slow' : 'trans-fast'} bg-black  hover:bg-white hover:scale-105 hover:text-black w-32 rounded-xl p-2 m-auto`}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart