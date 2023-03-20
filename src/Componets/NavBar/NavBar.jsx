import React from 'react'
import { BsSearch, BsPerson, BsCart2, BsFillMenuButtonWideFill } from "react-icons/bs";

function NavBar() {
    const navItems = ['Home', 'Shop', 'Product', 'Blog', 'Pages']
    const NavItemsLook = ({ item }) => { return (<a href={`/${item == 'Home' ? '' : item}`} className='font-bold text-xs trans hover:scale-105 text-slate-400 hover:text-white hover:underline  underline-offset-8'>{item}</a>) }
    return (
        <div className='flex items-center p-12 h-[76px] w-full fixed z-[99999]'>
            <div className="w-32 lg:w-64 h-10 font-bold text-sm md:text-lg">Humaine Grandure</div>
            <div className='w-[550px] p-2 scale-0 md:scale-90 lg:scale-100 flex trans-slow justify-around items-center text-white'>
                {navItems.map((item) => { return <NavItemsLook item={item} /> })}
            </div>
            <div className="flex-grow h-12 scale-0 md:scale-90 lg:scale-100 w-96 trans-slow">
                <div className="flex justify-end items-center text-xl">
                    <button className='h-6 w-6 m-2'><BsSearch /></button>
                    <button className='h-6 w-6 m-2'><BsPerson /></button>
                    <div className='flex items-center text-sm'>
                        <button className='h-6 w-6  m-2 text-xl'><BsCart2 /></button>
                        <h1>$9999</h1>
                    </div>
                    <div className='h-12 border mx-4 '></div>
                    <button className='h-6 w-6 m-2'><BsFillMenuButtonWideFill /></button>
                </div>
            </div>
        </div>
    )
}

export default NavBar



