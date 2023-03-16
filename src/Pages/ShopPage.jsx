import React from 'react'
import NavBar from '../Componets/NavBar/NavBar'

function ShopPage() {
    const bestseller = [1, 2, 3, 4,]
    const ItemBox = () => {
        return (
            <div className=' h-60 w-48 flex-grow-0 flex-shrink-0  bg-white'>

            </div>
        )
    }

    return (
        <div className='h-[100vh] relative bg-black'>

            <NavBar />

            <div className='transition-all duration-1000 ease-in-out lg:w-[50%] w-[50%] md:w-96 h-[35rem] rounded-b-full bg-gray-600 absolute right-0'>


            </div>

            <div className='h-24 empty'></div>

            <div className="w-[50%]">
                <div className="items-center justify-center w-48 md:w-96 m-auto h-96 p-4 relative">
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

            <div className='p-12 mt-40 m-auto w-[90%]'>
                <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-40 items-center">
                    <div className=' rounded-full border-dotted border-4 h-96 w-60 center'>
                        <div className='w-[90%] h-[90%] bg-white rounded-full'></div>
                    </div>
                    <div className='h-96 w-96 p-4'>
                        <h1 className='w-20 text-xs my-4'>Established 2020</h1>
                        <div>
                            <h1 className='text-2xl font-bold'>Humaine Grandure Philosophy</h1>
                            <h1 className='font-semibold italic'>"5 is the goat"</h1>
                        </div>
                        <div>
                            <br />
                            <h1 className='text-sm'>
                                Now seven world think timed while her.
                                Spoil large oh he rooms on since an.
                                Am up unwilling eagerness perceived incommode.
                            </h1>
                            <br />
                            <h1 className='text-sm'>
                                Of recommend residence education be on difficult
                                repulsive offending. Judge views
                            </h1>
                        </div>
                        <button className='my-12 border-2 p-2 border-gray-500 trans-slow hover:text-black hover:bg-gray-300'>Shop Now</button>

                    </div>
                </div>
            </div>

            <div className='bg-[#141414] h-96 overflow-hidden'>
                <div className=' w-full m-auto p-2 md:p-24'>
                    <div className='m-auto w-[51rem] flex justify-between items-center'>
                        <h1 className='text-3xl my-4'>Best Seller</h1>
                        <div>
                            <h1 className='font-bold'>VIEW ALL  {' >>'}</h1>
                        </div>
                    </div>
                    <div className='gap-4 flex justify-center overflow-x-scroll'>
                        {bestseller.map((item) => {
                            return (<ItemBox key={item} />)
                        })}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ShopPage