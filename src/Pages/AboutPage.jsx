import React, { useEffect, useState } from 'react'
import ItemIcon from '../Componets/Shop/ItemIcon'
import ProductPage from '../Componets/Shop/ProductPage'
import { disableScroll } from '../ED5/DisableScroll'
import { useOutletContext } from "react-router-dom";

function ShopPage() {




    const [hovered, setHovered] = useState({})
    const [productPageOpened, setProductPageOpened] = useState(false)
    const [categorySelected, setCategorySelected] = useState({ All: true })



    return (
        <div className={`h-full w-full flex-col flex fadeInZoom items-center`} >
            <div className='between gap-4 w-full relative flex-col md:flex-row'>
                <div className='bg-[#141414] rounded-b-xl md:rounded-none h-[40rem] overflow-hidden relative text-sm flex flex-col justify-end z-10 md:text-base p-4 w-80 '>
                    <h1 className='z-[1] text-3xl font-bold'>About Us</h1>
                    <h1 className='z-[1]  bg-black p-2 bg-opacity-[20%] rounded'>
                        Welcome to Humaine Grandeur, where fashion meets compassion.
                        Our brand is committed to creating a better world through
                        sustainable and ethical fashion. We offer a range of eco-friendly
                        and cruelty-free clothing and accessories that are both chic and timeless.
                        Our designs prioritize versatility and comfort, suitable for any occasion.

                    </h1>
                    <img className='h-full w-full left-0 top-0 absolute object-cover' src="https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                </div>
                <div className='overflow-hidden  w-96 h-96 p-4 shadow shadow-black scale-75 md:scale-100 bg-[#141414] relative rotate-45'>
                    <div className='border center gap-4 flex-col w-full h-full z-10 relative'>
                        <h1 className='text-3xl font-bold  text-white -rotate-45 text-center  w-full'>Humaine Grandeur</h1>
                        <h1 className='text-sm md:text-base  text-white -rotate-45 text-center  w-full'>Fashion for the Humaine</h1>

                    </div>
                    <img className='h-full w-full left-0 top-0 absolute scale-[1.45] object-cover -rotate-45' src="https://cdn.pixabay.com/photo/2017/08/06/09/56/man-2590836_1280.jpg" alt="" />

                </div>
                <div className='bg-[#141414] rounded-t-xl md:rounded-none overflow-hidden relative  z-10 w-80 p-8   h-[40rem] text-sm flex flex-col md:justify-end'>
                    <h1 className='z-[1] text-3xl font-bold'>Our commitment</h1>
                    <h1 className='z-[1] bg-black p-2 bg-opacity-[20%] rounded'>
                        We collaborate with suppliers
                        who share our values and strive
                        to reduce their impact on the planet.
                        As a socially responsible brand, we
                        donate a portion of our profits to
                        organizations promoting sustainability
                        and animal welfare.
                        Thank you for choosing Humaine Grandeur,
                        where you can look and feel your best while
                        making a positive impact. Enjoy our collection!
                    </h1>
                    <img className='h-full w-full left-0 top-0 absolute object-cover' src="https://cdn.pixabay.com/photo/2016/11/19/09/45/man-1838330_1280.jpg" alt="" />

                </div>

            </div>




        </div>
    )
}

export default ShopPage