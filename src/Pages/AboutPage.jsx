import React, { useEffect, useState } from 'react'
import ItemIcon from '../Componets/Shop/ItemIcon'
import ProductPage from '../Componets/Shop/ProductPage'
import { disableScroll } from '../ED5/DisableScroll'


function ShopPage() {




    const [hovered, setHovered] = useState({})
    const [productPageOpened, setProductPageOpened] = useState(false)
    const [categorySelected, setCategorySelected] = useState({ All: true })



    return (
        <div className={`h-full w-full flex-col flex items-center`} >
            <div className='between gap-4 w-full relative flex-col md:flex-row'>
                <div className='bg-[#141414] rounded-b-xl md:rounded-none h-[40rem] overflow-hidden relative text-sm flex flex-col justify-end z-10 md:text-base p-4 w-80 '>
                    <h1 className='z-[1] text-3xl font-bold'>Title</h1>
                    <h1 className='z-[1]  bg-black p-2 bg-opacity-[20%] rounded'>
                        Do am he horrible
                        distance marriage so although.
                        Afraid assure square so happen
                        mr an before. His many same been
                        well can high that. Forfeited did
                        law eagerness allowance improving
                        assurance bed. Had saw put seven
                        joy short first. Pronounce so
                        enjoyment my resembled in forfeited s
                        portsman. Which vexed did began son
                    </h1>
                    <img className='h-full w-full left-0 top-0 absolute object-cover' src="https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                </div>
                <div className='overflow-hidden  w-96 h-96 p-4 shadow shadow-black scale-75 md:scale-100 bg-[#141414] relative rotate-45'>
                    <div className='border center gap-4 flex-col w-full h-full z-10 relative'>
                        <h1 className='text-3xl font-bold  text-white -rotate-45 text-center  w-full'>Meet owner! lol</h1>
                        <h1 className='text-sm md:text-base  text-white -rotate-45 text-center  w-full'>this guy 2wavy stole my chikens and I need to get them back</h1>

                    </div>
                    <img className='h-full w-full left-0 top-0 absolute scale-[1.45] object-cover -rotate-45' src="https://cdn.pixabay.com/photo/2017/08/06/09/56/man-2590836_1280.jpg" alt="" />

                </div>
                <div className='bg-[#141414] rounded-t-xl md:rounded-none overflow-hidden relative  z-10 w-80 p-8   h-[40rem] text-sm flex flex-col md:justify-end'>
                    <h1 className='z-[1] text-3xl font-bold'>Title</h1>
                    <h1 className='z-[1] bg-black p-2 bg-opacity-[20%] rounded'>
                        Do am he horrible
                        distance marriage so although.
                        Afraid assure square so happen
                        mr an before. His many same been
                        well can high that. Forfeited did
                        law eagerness allowance improving
                        assurance bed. Had saw put seven
                        joy short first. Pronounce so
                        enjoyment my resembled in forfeited s
                        portsman. Which vexed did began son
                    </h1>
                    <img className='h-full w-full left-0 top-0 absolute object-cover' src="https://cdn.pixabay.com/photo/2016/11/19/09/45/man-1838330_1280.jpg" alt="" />

                </div>

            </div>




        </div>
    )
}

export default ShopPage