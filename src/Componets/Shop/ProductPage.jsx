import React from 'react'
import Rating from './Rating'
function ProductPage({ toggleProductPage, productInfo }) {

    const { name, price, salePrice, desc, rating, img } = productInfo
    return (
        <div className='z-30 fixed h-screen w-screen flex items-center justify-center'>

            <div className='bg-white trans-slow hover:scale-[1.01] h-[80%] border-2 shadow-xl shadow-black border-white  rounded w-[60%] overflow-y-scroll  flex-col  hidescroll relative p-2'>
                <button onClick={toggleProductPage} className="absolute right-0 top-0 m-2 bg-black h-5 w-5 z-10"></button>


                <div className='h-1/2 w-3/4 hover:scale-105 trans-slow overflow-hidden md:h-[70%] md:w-[50%] rounded shadow-lg shadow-black sticky m-auto z-[5]  bg-white'>
                    <img src={img} alt="" />
                </div>

                <div className='h-fit w-3/4 my-4 hover:scale-105 trans-slow overflow-hidden  md:w-[60%] rounded flex flex-col gap-2 shadow-lg shadow-black sticky m-auto z-[5]  bg-white bg-opacity-50 p-2'>
                    <h1 className='font-bold text-black text-2xl'>{name}</h1>
                    <Rating rate={rating} />
                    <div className="flex gap-2 font-bold text-black">
                        <h1 className=' str'>{salePrice ? <s className='text-xl'>{price}</s> : <h1 className='text-2xl'>{price}</h1>}</h1>

                        <h1 className={'text-xl'}>{salePrice}</h1>
                    </div>
                </div>

                <div className='h-fit p-4 w-3/4 my-4 overflow-hidden trans-slow hover:scale-105 md:w-[60%] rounded shadow-lg shadow-black sticky m-auto z-[5]  bg-white'>
                    <h1>{desc}</h1>
                </div>


                <img src={img} className={'w-full blur-xl z-0 absolute top-0 left-0 h-full object-cover'} alt="" />
            </div>

        </div>
    )
}

export default ProductPage