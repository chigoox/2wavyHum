import { useState } from "react"
import { AiFillHome } from "react-icons/ai"
import { BsFillPersonFill, BsNewspaper, BsShop } from "react-icons/bs"
import { menuItems } from "../MenuItems"
import MenuButton from "./MenuButton"
import { Link, useLocation } from "react-router-dom"



function SideBar() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => { setShowMenu(!showMenu) }
    const currentPage = useLocation().pathname.substring(1)
    const [selectedMenu, setSeletctedMenu] = useState({ [currentPage != '' ? `${currentPage}` : 'Home']: true })


    const Icon = ({ item }) => {
        if (item.includes('Home')) {
            return (<AiFillHome color='white' className='m-auto' />)
        } else if (item.includes('About')) {
            return (<BsFillPersonFill color='white' className='m-auto' />)
        } else if (item.includes('Portfolio')) {
            return (<BsNewspaper color='white' className='m-auto' />)

        } else if (item.includes('Shop')) {
            return (<BsShop color='white' className='m-auto' />)

        }
    }
    const menuMap = menuItems.map((item) => {
        return (
            <Link key={item}
                to={`/${item == 'Home' ? '' : item}`}
                className={`${selectedMenu[item] ? 'bg-orange-500' : 'bg-[#131313]'} w-[90%] h-12 my-8 center relative rounded hover:font-bold hover:text-black trans hover:bg-orange-600 text-2xl`}
            >
                <button onClick={() => { return setSeletctedMenu({ [item]: true }) }} className="w-full h-full absolute">

                </button>

                <h1>{showMenu ? item : <Icon item={item} />}</h1>
            </Link>
        )
    })



    return (
        <div className={`${showMenu ? 'w-[200px]' : 'w-0 md:w-[6rem]'} md:invisible right-0   z-[99999] h-full flex fixed transition-all duration-500 ease-in-out`} >
            <button onClick={toggleMenu} className={`relative ${showMenu ? ' -right-12 text-black' : 'text-black  p-1 right-20 md:-right-11'} top-0  w-12 h-8 text-3xl  transition-all duration-500 ease-in-out flex justify-center items-center ml-1 mt-6`}>
                <MenuButton menuOpen={showMenu} />
            </button>
            <div className={`w-full items-center flex flex-col justify-center  bg-[#070707] shadow-sm shadow-black h-full transition-all duration-500 ease-in-out`}>
                {menuMap}
            </div>
        </div>
    )
}

export default SideBar