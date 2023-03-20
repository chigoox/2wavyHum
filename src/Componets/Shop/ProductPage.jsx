import React from 'react'

function ProductPage({ toggleProductPage }) {
    return (
        <div className='z-30 fixed h-screen w-screen  border-pink-400 border-2 flex items-center justify-center'>
            <div className='bg-white h-[30rem] w-96 overflow-y-scroll hidescroll relative'>
                <button onClick={toggleProductPage} className="absolute right-0 top-0 m-2 bg-black h-5 w-5"></button>
            </div>
        </div>
    )
}

export default ProductPage