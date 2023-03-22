import React, { useEffect, useState } from 'react'
import { AiFillMail, AiFillPlusSquare } from 'react-icons/ai'
import ItemIcon from '../Componets/Shop/ItemIcon'
import ProductPage from '../Componets/Shop/ProductPage'
import { disableScroll } from '../ED5/DisableScroll'


function BlogPage() {




    const [hovered, setHovered] = useState({})
    const [productPageOpened, setProductPageOpened] = useState(false)
    const [categorySelected, setCategorySelected] = useState({ All: true })



    return (
        <div className={`h-full w-full flex`} >
            <div className='bg-slate-600 center h-[40rem] w-[40%] md:w-[20%] relative overflow-hidden'>
                <h1 className='z-10 text-5xl text-center'>COMING SOON!</h1>
                <img className='h-full w-full left-0 top-0 absolute object-cover' src="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg" alt="" />
            </div>

            <div className=' w-full flex justify-center flex-col'>
                <h1 className='font-bold text-4xl p-2'>Blog</h1>
                <div className='h-12 w-full center bg-white'>
                    <button className='font-bold text-2xl text-black'><AiFillPlusSquare /></button>
                </div>
                <div className='hidden overflow-y-scroll gap-2 w-full relative  h-96 center flex-wrap p-4'>

                    <div className='flex gap-2 w-full'>
                        <div className='bg-slate-400 w-3/4 h-52'></div>
                        <div className='bg-slate-400 w-64 h-52'></div>
                    </div>

                    <div className='flex gap-2 w-full'>
                        <div className='bg-slate-400 w-3/4 h-52'></div>
                        <div className='bg-slate-400 w-64 h-52'></div>
                    </div>


                </div>


            </div>




        </div>
    )
}

export default BlogPage