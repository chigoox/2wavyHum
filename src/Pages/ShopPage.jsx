import React from 'react'
import NavBar from '../Componets/NavBar/NavBar'

function ShopPage() {

    return (
        <div className='h-[100vh] relative bg-black'>
            <NavBar />
            <div className='transition-all duration-1000 ease-in-out lg:w-[50%] w-[50%] md:w-96 h-[35rem] rounded-b-full bg-gray-600 absolute right-0'>


            </div>
            <div className="w-[50%]">
                <div className="items-center justify-center w-48 md:w-96 m-auto h-96 p-4 top-24  relative">
                    <div className='text-sm'>
                        <p>Autumn</p>
                        <p>Collection</p>
                        <p>2023</p>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-5xl md:text-7xl'>Autum</h1>
                        <h1 className='text-5xl md:text-7xl'>Vibes</h1>
                    </div>
                    <div className=''>
                        <p>Casual line. short desgin. 100% suade lather. etc that make store great</p>
                    </div>

                    <button className='my-12 border-2 p-2 border-gray-500 trans-slow hover:text-black hover:bg-gray-300'>Shop Now</button>
                </div>

            </div>
        </div>
    )
}

export default ShopPage