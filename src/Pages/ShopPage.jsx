import React, { useEffect, useState } from 'react'
import ItemIcon from '../Componets/Shop/ItemIcon'
import ProductPage from '../Componets/Shop/ProductPage'
import { disableScroll } from '../ED5/DisableScroll'
import { useOutletContext } from "react-router-dom";
import Notification from '../Componets/Notification';


function ShopPage() {
    const getRand = (max) => { return Math.floor(Math.random() * max) + 1; }
    const [startAni, setStartAni] = useState()
    const [message, setMessage] = useState()

    const randAni = (rand) => {
        if (rand == 1) setStartAni('Right')
        if (rand == 2) setStartAni('Zoom')
        if (rand == 3) setStartAni('Bottom')
    }


    const [hovered, setHovered] = useState({})
    const [isProductPageOpened, setIsProductPageOpened] = useState(false)
    const [categorySelected, setCategorySelected] = useState({ All: true })
    const [typeSelected, setTypeSelected] = useState({ All: true })
    const [selectedProduct, setSelectedProduct] = useState({ name: '', img: '', price: '', rating: '', desc: '', salePrice: '' })
    const [PRODUCTDATA, SETPRODUCTDATA] = useState()
    const [clientCart, setClientCart] = useOutletContext();


    const toggleMenu = (name, menuType) => {
        if (menuType == 'category' || menuType == undefined) {
            if (categorySelected[name]) {
                setCategorySelected({ All: true })
            } else {
                setCategorySelected({ [name]: true })
            }


        }

        if (menuType == 'type') setTypeSelected({ [name]: true })
    }

    const toggleProductPage = () => { setIsProductPageOpened(!isProductPageOpened); disableScroll(!isProductPageOpened) }
    const type = ['Men', 'Women', 'Recommended', 'Featured', 'All',]


    async function fetchProuductsFromStripe() {
        fetch(`http://localhost:4242/fethProducts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                test: 'testing'
            })
        }).then(res => {
            res.json().then(res => {
                SETPRODUCTDATA(res)
            })
        })
    }








    useEffect(() => {
        /*  const fetch = async () => { await fetchProuductsFromStripe() }
         fetch().then(
         ) */
        fetch('/.netlify/functions/FetchProducts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            console.log(res)
            res.json().then(res => {
                console.log(res)
                SETPRODUCTDATA(res)
            })
        })
        randAni(getRand(3))


    }, [])
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);


    return (
        <div className={`h-full w-full flex-col flex items-center fadeInBottom overflow-hidden`} >
            {true && <Notification message={message} setMessage={setMessage} />}
            {isProductPageOpened &&
                <ProductPage
                    productInfo={selectedProduct}
                    toggleProductPage={toggleProductPage}
                    setClientCart={setClientCart}
                />}
            <div className='z-10 '>
                <div className={`grid gap-2 hover:gap-4 fadeIn${startAni} grid-flow-col scale-75 md:scale-100 w-fit grid-rows-2 text-black rotate-45 m-auto relative trans-slow  top-0 right-0 left-0 bottom-0 ${hovered.n ? 'top-6' : hovered.s ? '-top-6' : hovered.w ? '-left-8' : hovered.e ? 'left-8' : ''}  justify-center`}>
                    <div onClick={() => { toggleMenu('hats') }} onMouseOut={() => { setHovered({}) }} onMouseOver={() => { setHovered({ n: true }) }} className={`h-52 w-52 cursor-pointer relative pointer-events-none  trans-slow`}>
                        <div className={`${categorySelected.hats ? ' ring-orange-500 ring-2 ring-offset-slate-900 ring-offset-8' : 'outline-0 outline-offset-0'} bg-white justify-center overflow-hidden items-center flex  hover:w-[90%] hover:h-[90%] w-[60%] h-[60%] m-2 absolute bottom-0 right-0 pointer-events-auto trans-slow`}>
                            <h1 className='font-bold text-5xl z-10 text-white -rotate-45'>Hats</h1>
                            <img className='h-full w-full object-cover scale-[2] bottom-4 absolute' src="https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                        </div>
                    </div>
                    <div onClick={() => { toggleMenu('shirts') }} onMouseOut={() => { setHovered({}) }} onMouseOver={() => { setHovered({ w: true }) }} className={`${categorySelected.shirts ? ' ring-orange-500 ring-2 ring-offset-slate-900 ring-offset-8' : 'outline-0 outline-offset-0'} h-52 w-52 group cursor-pointer overflow-hidden bg-white relative group hover:bg-black trans-slow`}>
                        <div className='bg-black  group-hover:w-[90%] overflow-hidden z-10 flex justify-center items-center group-hover:h-[90%] w-[60%] h-[60%] m-2 absolute right-0 pointer-events-auto trans-slow'>
                            <h1 className='font-bold text-3xl z-10 shadow-inner  text-white -rotate-45 '>T-Shirts</h1>
                            <img className='h-full w-full object-cover scale-[1.5] left-3  absolute  -rotate-45' src="https://images.unsplash.com/photo-1606115757624-6b9bfe9fa5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />

                        </div>
                        <img className='h-full w-full object-cover scale-[1.2] bottom-4 absolute' src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />

                    </div>
                    <div onClick={() => { toggleMenu('sweatpants') }} onMouseOut={() => { setHovered({}) }} onMouseOver={() => { setHovered({ e: true }) }} className={`${categorySelected.sweatpants ? ' ring-orange-500 ring-2 ring-offset-slate-900 ring-offset-8' : 'outline-0 outline-offset-0'} h-52 w-52 group cursor-pointer overflow-hidden bg-white relative hover:bg-black trans-slow`}>
                        <div className={`bg-black group-hover:w-[90%] overflow-hidden z-10 flex  flex-col justify-center items-center group-hover:h-[90%] hover:w-[90%] hover:h-[90%] w-[60%] h-[60%] m-2 absolute left-0 bottom-0 pointer-events-auto trans-slow`}>
                            <h1 className='font-bold text-3xl z-10 text-white -rotate-45'>Sweat</h1>
                            <h1 className='font-bold text-3xl z-10 text-white -rotate-45'>pants</h1>

                            <img className='h-full w-full object-cover scale-[1] absolute' src="https://images.unsplash.com/photo-1650461970708-7bf32499516d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN3ZWF0cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />

                        </div>
                        <img className='h-full w-full object-cover scale-[1.2] bottom-4 absolute' src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dlYXRwYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>
                    <div onClick={() => { toggleMenu('hoodies') }} onMouseOut={() => { setHovered({}) }} onMouseOver={() => { setHovered({ s: true }) }} className='h-52 w-52 relative pointer-events-none cursor-pointer hover:bg-black trans-slow'>
                        <div className={`${categorySelected.hoodies ? ' ring-orange-500 ring-2 ring-offset-slate-900 ring-offset-8' : 'outline-0 outline-offset-0'} bg-white flex z-10 overflow-hidden justify-center items-center hover:w-[90%] hover:h-[90%] w-[60%] h-[60%] m-2 absolute pointer-events-auto trans-slow`}>
                            <h1 className='font-bold z-10 text-white text-3xl -rotate-45'>Hoodies</h1>
                            <img className='h-full w-full object-cover scale-[1.26] bottom-4 absolute' src="https://images.unsplash.com/photo-1590316519564-ebeeca222a95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9vZGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className=' h-20  md:h-32 w-full z-0 flex justify-between items-center absolute md:top-[9.5rem] pointer-events-auto top-[23rem]'>
                <div className='h-full trans-slow w-[35%] md:w-[20%] group hover:w-[40%] rounded-r-3xl bg-white overflow-hidden'>

                    <img className='h-full w-full trans-slow group-hover:scale-125 object-cover' src="https://images.unsplash.com/photo-1579969406275-0b37fa82deca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80" alt="" />

                </div>
                <div className='h-full w-[35%] overflow-hidden trans-slow md:w-[20%] hover:w-[40%] rounded-l-3xl bg-white'>
                    <img className='h-full w-full trans-slow group-hover:scale-125 object-cover' src="https://images.unsplash.com/photo-1494607239400-ff147da48308?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVyYmFuJTIwYXBwZXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />

                </div>

            </div>




            <div className=' w-full mt-10 h-20 p-2 gap-2 flex overflow-x-scroll md:justify-center justify-start items-center  overflow-hidden hidescroll'>
                {type.map((type) => {
                    return (
                        <button onClick={() => { toggleMenu(type, 'type') }} key={type} className={`${typeSelected[type] ? ' ring-orange-500 ring-2 ring-offset-slate-900 ring-offset-4 text-orange-500 bg-black-800' : 'outline-0 outline-offset-0 text-black bg-white'}  hover:scale-125 z-[11] ml-8 trans-slow flex center w-32 min-w-[130px] rounded-full h-9`}>{type}</button>
                    )
                })}
            </div>

            <div className=' justify-center items-center w-[90%] m-auto gap-12 md:gap- grid grid-flow-rows md:grid-cols-2 lg:grid-cols-4'>
                {
                    PRODUCTDATA?.map((product, index) => {
                        const { name, default_price, images, metadata, description } = product
                        const { rating, type, category, realPrice, isNew, salePrice } = metadata



                        const matchesCategory = categorySelected[category] ? categorySelected[category] : categorySelected.All
                        const matchesType = typeSelected.All ? true : type.includes(Object.keys(typeSelected)[0])


                        if ((matchesCategory && matchesType)) {
                            return (
                                <ItemIcon
                                    key={index}
                                    salePrice={realPrice ? salePrice : null}
                                    name={name}
                                    price={realPrice ? realPrice : salePrice ? salePrice : null}
                                    rating={rating}
                                    toggleProductPage={toggleProductPage}
                                    setSelectedProduct={setSelectedProduct}
                                    selectedProduct={selectedProduct}
                                    setClientCart={setClientCart}
                                    img={images ? images[0] : img}
                                    desc={description}
                                    priceID={default_price}


                                />
                            )
                        }
                    })
                }

            </div>
        </div>
    )
}

export default ShopPage