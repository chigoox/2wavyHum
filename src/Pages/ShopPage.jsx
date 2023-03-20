import React, { useState } from 'react'
import ItemIcon from '../Componets/Shop/ItemIcon'
function ShopPage() {
    const [hovered, setHovered] = useState({})
    const [categorySelected, setCategorySelected] = useState({ All: true })
    const category = ['Men', 'Women', 'Recommended', 'Featured', 'All',]
    const x = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
        <div className='h-full w-full flex-col flex items-center'>

            <div className='z-10'>
                <div className={`grid gap-2 hover:gap-4  grid-flow-col scale-75 md:scale-100 w-fit grid-rows-2 text-black rotate-45 m-auto relative trans-slow  top-0 right-0 left-0 bottom-0 ${hovered.n ? 'top-6' : hovered.s ? '-top-6' : hovered.w ? '-left-8' : hovered.e ? 'left-8' : ''}  justify-center`}>
                    <div onMouseOut={() => { setHovered({}) }} onMouseOver={() => { setHovered({ n: true }) }} className='h-52 w-52  relative pointer-events-none  trans-slow'>
                        <div className='bg-white justify-center items-center flex  hover:w-[90%] hover:h-[90%] w-[60%] h-[60%] m-2 absolute bottom-0 right-0 pointer-events-auto trans-slow'>
                            <h1 className='font-bold text-3xl'>Hats</h1>
                        </div>
                    </div>
                    <div onMouseOut={() => { setHovered({}) }} onMouseOver={() => { setHovered({ w: true }) }} className='h-52 w-52 group bg-white relative group hover:bg-black trans-slow'>
                        <div className='bg-black group-hover:w-[90%] flex justify-center items-center group-hover:h-[90%] w-[60%] h-[60%] m-2 absolute right-0 pointer-events-auto trans-slow'>
                            <h1 className='font-bold text-3xl text-white'>T-Shirts</h1>

                        </div>
                    </div>
                    <div onMouseOut={() => { setHovered({}) }} onMouseOver={() => { setHovered({ e: true }) }} className='h-52 w-52 group bg-white relative hover:bg-black trans-slow'>
                        <div className='bg-black group-hover:w-[90%] flex  flex-col justify-center items-center group-hover:h-[90%] hover:w-[90%] hover:h-[90%] w-[60%] h-[60%] m-2 absolute left-0 bottom-0 pointer-events-auto trans-slow'>
                            <h1 className='font-bold text-3xl text-white'>Sweat</h1>
                            <h1 className='font-bold text-3xl text-white'>pants</h1>

                        </div>
                    </div>
                    <div onMouseOut={() => { setHovered({}) }} onMouseOver={() => { setHovered({ s: true }) }} className='h-52 w-52 relative pointer-events-none hover:bg-black trans-slow'>
                        <div className='bg-white flex justify-center items-center hover:w-[90%] hover:h-[90%] w-[60%] h-[60%] m-2 absolute pointer-events-auto trans-slow'>
                            <h1 className='font-bold text-3xl'>Hoodies</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' h-20  md:h-32 w-full z-0 flex justify-between items-center absolute md:top-[9.5rem] pointer-events-auto top-[23rem]'>
                <div className='h-full trans-slow w-[35%] md:w-[20%] hover:w-[40%] rounded-r-3xl bg-white'></div>
                <div className='h-full w-[35%] trans-slow md:w-[20%] hover:w-[40%] rounded-l-3xl bg-white'></div>

            </div>




            <div className=' w-full mt-10 h-20 p-2 gap-8 flex overflow-x-scroll justify-center items-center  overflow-hidden hidescroll'>
                {category.map((category) => {
                    return (
                        <div className="bg-white hover:scale-125 z-[11] trans text-black flex center w-32 min-w-[130px] rounded-full h-9">{category}</div>
                    )
                })}
            </div>

            <div className=' justify-center items-center w-[90%] m-auto gap-12 md:gap-2 grid grid-flow-rows md:grid-cols-2 lg:grid-cols-4'>
                {
                    x.map((product) => {
                        return (
                            <ItemIcon
                                salePrice={'$100'}
                                name={'New Hat'}
                                price={'$200'}
                                rating={5}
                                img={'https://images.unsplash.com/photo-1637248666370-70a4a603c23e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8ODZuRGxicjRsMmN8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ShopPage