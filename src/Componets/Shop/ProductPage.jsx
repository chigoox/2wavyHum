import React from 'react'
import Rating from './Rating'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import AddToCart from './AddToCart'
function ProductPage({ toggleProductPage, productInfo, setClientCart }) {

    const { name, price, salePrice, desc, rating, img } = productInfo
    return (
        <div className='z-30 fixed h-screen w-screen flex items-center justify-center'>

            <div className='bg-black-800 trans-slow hover:scale-[1.01] h-[70%] shadow-xl shadow-black -white border rounded w-[95%] md:w-[60%] overflow-y-scroll  flex-col  hidescroll relative p-2'>
                <button onClick={toggleProductPage} className="sticky hover:scale-110 group trans-slow right-0 top-0 m-2 bg-white bg-opacity-25 h-12 w-12 z-10">
                    <h1 className='text-5xl text-rose-600 group-hover:text-rose-800  trans-slow'>
                        <AiOutlineCloseSquare />
                    </h1>
                </button>


                <div className='h-[60%] w-3/4 hover:scale-105 trans-slow overflow-hidden md:h-[70%] md:w-[75%] rounded shadow-sm shadow-black sticky m-auto z-[5]  bg-black-900'>
                    <img className='w-full h-full object-cover rounded' src={img} alt="" />
                </div>

                <div className='h-fit w-3/4 my-4 hover:scale-105 trans-slow overflow-hidden  md:w-[60%] rounded flex flex-col gap-2  sticky m-auto z-[5]  bg-black bg-opacity-50 p-2'>
                    <h1 className='font-bold text-white text-2xl'>{name}</h1>
                    <Rating rate={rating} />
                    <div className="flex gap-2 font-bold text-white">
                        <h1 className=' str'>${salePrice ? <s className='text-xl'>{price}</s> : price}</h1>

                        {salePrice && <h1 className={'text-xl'}>${salePrice}</h1>}
                    </div>
                </div>

                <div className='h-fit p-4 w-3/4 my-4 overflow-hidden trans-slow hover:scale-105 md:w-[60%] rounded sticky m-auto z-[5] bg-opacity-50 text-white text-xl bg-black'>
                    <h1>{desc}</h1>
                </div>

                <div className='center z-10 sticky w-[60%] m-auto'>
                    <AddToCart setClientCart={setClientCart} product={productInfo} inProduct={true} />
                </div>


                <img src={img} className={'w-full blur-xl z-0 absolute top-0 left-0 h-full object-cover'} alt="" />
            </div>

        </div >
    )
}

export default ProductPage