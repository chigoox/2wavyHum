import React, { useState } from 'react'
import { BsSearch, BsPerson, BsCart2, BsFillMenuButtonWideFill } from "react-icons/bs";
import Cart from './Cart';
import Search from './Search';
import { menuItems } from './MenuItems';

function NavBar({ clientCart, setClientCart, cartTotal }) {
    const navItems = menuItems
    const NavItemsLook = ({ item }) => { return (<a href={`/${item == 'Home' ? '' : item}`} className='font-bold text-xs trans hover:scale-105 text-slate-400 hover:text-white hover:underline  underline-offset-8'>{item}</a>) }
    const [showCart, setShowCart] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const toggleCart = () => { setShowCart(!showCart) }
    const toggleSearch = () => { setShowSearch(!showSearch) }
    const cartTotalSum = cartTotal.reduce((a, b) => a + b, 0)
    console.log(cartTotalSum)


    return (
        <div className='flex items-center p-12 h-[76px] w-full fixed z-[99999]'>
            {
                <Cart
                    clientCart={clientCart}
                    setClientCart={setClientCart}
                    toggleCart={toggleCart}
                    showCart={showCart}
                    cartTotal={cartTotalSum}
                />
            }
            {<Search toggleSearch={toggleSearch} showSearch={showSearch} />}
            <div className="w-32 lg:w-64 h-10 font-bold text-sm md:text-lg">Humaine Grandeur</div>
            <div className='w-[550px] p-2 scale-0 md:scale-90 lg:scale-100 flex trans-slow justify-around items-center text-white'>
                {navItems.map((item) => { return <NavItemsLook key={item} item={item} /> })}
            </div>
            <div className="flex-grow h-12 scale-0 md:scale-90 lg:scale-100 w-96 trans-slow">
                <div className="flex justify-end items-center text-xl ">
                    <button onClick={toggleSearch} className='h-6 w-6 m-2 hover:scale-110 trans-slow'><BsSearch /></button>
                    <button className='h-6 w-6 m-2 hover:scale-110 trans-slow'><BsPerson /></button>
                    <div className='flex items-center text-sm z-10'>
                        <button onClick={toggleCart} className='h-6 w-6  hover:scale-110  m-2 text-xl trans-slow'><BsCart2 /></button>
                        {(cartTotalSum > 0) && <h1>${cartTotalSum}</h1>}
                    </div>
                    <div className='h-8 border mx-4 z-0'></div>
                    <button className='h-6 w-6 m-2 hover:scale-110 trans-slow'><BsFillMenuButtonWideFill /></button>
                </div>
            </div>
        </div>
    )
}

export default NavBar



