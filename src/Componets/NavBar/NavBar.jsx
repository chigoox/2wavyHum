import React from 'react'

function NavBar() {
    const navItems = ['Home', 'Shop', 'Product', 'Blog', 'Pages']
    const NavItemsLook = ({ item }) => { return (<h1 className='font-bold text-xs'>{item}</h1>) }
    return (
        <div className='flex items-center p-12 h-[76px] w-full fixed z-10'>
            <div className="w-42 md:w-64 h-10 mr-16 font-bold text-sm md:text-lg">Humaine Grandure</div>
            <div className='w-[550px] p-2 scale-0 md:scale-100 flex trans-slow justify-around items-center text-white'>
                {navItems.map((item) => { return <NavItemsLook item={item} /> })}
            </div>
            <div className="flex-grow h-12 scale-0 md:scale-100 w-96 trans-slow">
                <div className="flex justify-end items-center">
                    <div className='h-6 w-6 bg-white m-2'></div>
                    <div className='h-6 w-6 bg-white m-2'></div>
                    <div className='flex items-center text-sm'>
                        <div className='h-6 w-6 bg-white m-2'></div>
                        <h1>$9999</h1>
                    </div>
                    <div className='h-12 border mx-4'></div>
                    <div className='h-6 w-6 bg-white m-2'></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar



