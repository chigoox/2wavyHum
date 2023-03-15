import React from 'react'

function ShopPage() {
    const shopitems = [
        {
            name: 'hat',
            price: 40,
            new: false,
            desc: 'none',
            img: 'https://static.wixstatic.com/media/42ea5f_8d4afe95282744ba88001700f0186eba~mv2.png/v1/fill/w_185,h_185,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42ea5f_8d4afe95282744ba88001700f0186eba~mv2.png'
        },
        {
            name: 'shirt',
            price: 90,
            new: false,
            desc: 'none',
            img: 'https://static.wixstatic.com/media/42ea5f_1bb09376f0a440f393b6c205f2ad6cd2~mv2.png/v1/fill/w_185,h_185,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42ea5f_1bb09376f0a440f393b6c205f2ad6cd2~mv2.png'
        },
        {
            name: 'cape',
            price: 200,
            new: true,
            desc: 'none',
            img: 'https://static.wixstatic.com/media/42ea5f_ae19b7e686c94e9dbfaf931ec8121916~mv2.png/v1/fill/w_139,h_185,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42ea5f_ae19b7e686c94e9dbfaf931ec8121916~mv2.png'
        },
        {
            name: 'cape',
            price: 200,
            new: true,
            desc: 'none',
            img: 'https://static.wixstatic.com/media/42ea5f_734864f133f147cb991376a10757c8ac~mv2.png/v1/fill/w_139,h_185,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42ea5f_734864f133f147cb991376a10757c8ac~mv2.png'
        },
    ]
    return (
        <div className='h-[100vh]'>
            <div className='bg-white pb-1 flex flex-col items-center hover:bg-slate-900 tansition-all duration-300 ease-out'>
                <div className='bg-slate-900 h-12 flex w-full'>
                    <h1 className='text-white text-xl font-bold text-center m-auto'>SHIPPING WORLDWIDE</h1>
                </div>
                <div className='w-fit '>
                    <h1 className='text-4xl font-bold text-center my-10 hover:scale-110 hover:text-rose-700 transition-all ease-in-out duration-1000'>HUMAINE GRANDEUR</h1>
                </div>
            </div>

            <div className='h-[40%] lg:h-[80%] bg-black'>


            </div>

            <div className=''>
                <div className='font-bold text-2xl m-auto'>
                    <h1 className='text-center my-5'>LIMITED EDITION COLLECTION</h1>
                </div>
                <div className="flex justify-between">
                    <div className='flex justify- flow-row m-auto h-52 lg:h-fit'>
                        {shopitems.map((item) => {
                            return (
                                <div className='pt-2 h-32 w-20 md:h-72 md:w-52 lg:h-96 lg:w-72  m-2'>

                                    <div className='m-auto bg-white w-[70%] h-[70%] hover:scale-105 transiton-all duration-500 ease-out'>
                                        <img className='h-full min-w-max' src={item.img} alt="" />
                                    </div>

                                    <div className='m-2 flex flex-col items-center'>
                                        <h1 className='font-bold'>name</h1>
                                        <h1>$0.00</h1>
                                    </div>

                                    <div className='flex'>
                                        <button className='hover:bg-blue-700 hover:border-white hover:text-white ease-in-out duration-700 transition-all m-auto w-[90%] h-12 border border-black'>
                                            <h1>Add to cart</h1>
                                        </button>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <div className="flex justify-center">
                <button className='p-3 top-10 transition-all duration-700 ease-in-out my-4 w-32 border-black border bg-black hover:bg-white text-white hover:text-black'>Shop All</button>
            </div>
            <div className='bg-black h-72 flex'>
                <img className='h-20' src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="" />
                <img className='h-20' src="https://www.vectorico.com/wp-content/uploads/2018/02/Instagram-Icon-300x300.png" alt="" />
            </div>

        </div>
    )
}

export default ShopPage