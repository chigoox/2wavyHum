import React, { useState } from 'react'

function ItemIcon({ img, price, name, rating, salePrice }) {
    const [cartHovered, setCartHovered] = useState(false)
    console.log(cartHovered)
    const Rating = ({ rate }) => {
        return (
            <div className="flex gap-1 items-center">
                {rate >= 1 && <div className={'h-5 w-5 bg-yellow-400'}></div>}
                {rate >= 2 && <div className={'h-5 w-5 bg-yellow-400'}></div>}
                {rate >= 3 && <div className={'h-5 w-5 bg-yellow-400'}></div>}
                {rate >= 4 && <div className={'h-5 w-5 bg-yellow-400'}></div>}
                {rate >= 5 && <div className={'h-5 w-5 bg-yellow-400'}></div>}

            </div>
        )
    }
    return (
        <button disabled={cartHovered} onClick={() => { alert('xxx') }} className={`group h-[382px] w-[260px] relative overflow-hidden z-0 rounded-xl`}>
            {salePrice && <div className='absolute top-0 left-0 m-2 h-6 w-10 z-10 bg-gray-900 rounded-lg items-center justify-center flex'>Sale</div>}
            <div className='group-hover:bottom-16 bottom-0 relative trans flex flex-col gap-5 '>
                <div className='bg-white w-[260px] h-[260px]'>
                    <img src={img} className={'w-full h-full object-cover'} alt="" />

                </div>
                <div className='h-[83px] flex flex-col gap-2'>
                    <h1 className=' font-bold text-xl w-fit'>{name}</h1>
                    <Rating rate={rating} />
                    <div className="flex gap-2">
                        <h1 className=' str'>{salePrice ? <s>{price}</s> : <h1>{price}</h1>}</h1>

                        <h1 className={''}>{salePrice}</h1>
                    </div>


                </div>
                <button onMouseLeave={() => { setCartHovered(false) }} onMouseOver={() => { setCartHovered(true) }} onClick={() => { alert('heelo') }} className='bg-rose-400 h-12 z-20 group-hover:opacity-100 hover:bg-blue-900 opacity-0 pointer-events-auto trans-slow'>
                    <h1 className='font-bold'>Add To Cart</h1>

                </button>
            </div>

        </button>
    )
}

export default ItemIcon