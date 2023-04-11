import React from 'react'

function AddToCart({ setCartHovered, setClientCart, product }) {

    const addToCart = () => {
        const price = product.salePrice ? product.salePrice : product.price
        setClientCart(old => {
            if (!Object.keys(old).includes(product.name + price)) {
                return (
                    { ...old, [product.name + price]: { ...product, count: 1 } }
                )
            } else {
                return (
                    { ...old, [product.name + price]: { ...product, count: old[product.name + price].count + 1 } }
                )
            }
        })
    }
    return (
        /* at shop page */
        <div onClick={() => { addToCart() }} onMouseLeave={() => { setCartHovered && setCartHovered(false) }} onMouseOver={() => { setCartHovered && setCartHovered(true) }} className='bg-rose-400 w-full m-auto h-12 z-20 group-hover:opacity-100 flex items-start md:items-center justify-center hover:bg-blue-900 cursor-pointer opacity-100 pointer-events-auto trans-slow'>
            <h1 className='font-bold'>Add To Cart</h1>

        </div>
    )

}

export default AddToCart