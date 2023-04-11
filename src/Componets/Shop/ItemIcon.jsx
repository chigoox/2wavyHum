import React, { useState } from 'react'
import AddToCart from './AddToCart'
import Rating from './Rating'

function ItemIcon({ priceID, img, price, name, rating, salePrice, desc, toggleProductPage, setSelectedProduct, selectedProduct, setClientCart }) {
    const [cartHovered, setCartHovered] = useState(false)
    const openProductWindow = () => {
        toggleProductPage()
    }

    const setItem = () => {
        if (selectedProduct.name !== name) setSelectedProduct({ priceID: priceID, img: img, price: price, name: name, desc: desc, rating: rating, salePrice: salePrice })
    }


    return (
        <button disabled={cartHovered} onMouseOver={setItem} onClick={openProductWindow} className={`group cursor-pointer h-[400px] md:h-[382px] fadeInBottom m-auto scale-125 md:scale-100 w-[260px] md:hover:scale-110 hover:scale-[1.3] trans  mt-16 md:mt-5 relative mb-12 overflow-hidden z-0 rounded-xl`}>
            {salePrice && <div className='absolute top-0 left-0 m-2 h-6 w-10 z-10 bg-gray-900 rounded-lg items-center justify-center flex'>Sale</div>}
            <div className='md:group-hover:bottom-16 bottom-0 relative trans flex flex-col gap-5 '>
                <div className='bg-white w-[260px] h-[260px]'>
                    <img src={img} className={'w-full h-full object-cover'} alt="" />

                </div>
                <div className='h-[83px] flex flex-col gap-2 '>
                    <h1 className=' font-bold text-xl w-fit'>{name}</h1>
                    <Rating rate={rating} />
                    <div className="flex gap-2">
                        <h1 className='str'>${salePrice ? <s>{price}</s> : price}</h1>

                        {salePrice && <h1 className={''}>${salePrice}</h1>}
                    </div>


                </div>
                <div className='relative bottom-16 md:bottom-0'>
                    <AddToCart setClientCart={setClientCart} product={selectedProduct} setCartHovered={setCartHovered} />

                </div>
            </div>

        </button>
    )
}

export default ItemIcon