import React from 'react'
import NavBar from '../Componets/NavBar/NavBar'
import { Fa500Px, FaMoneyBillAlt, FaShieldAlt, FaShippingFast } from "react-icons/fa";

function ShopPage() {
    const bestseller = [1, 2, 3, 4,]
    const ItemBox = () => {
        return (
            <div className=' h-60 w-48 flex-grow-0 flex-shrink-0  bg-white'>

            </div>
        )
    }

    const Footer = () => {
        const footerItems = ['Free Shipping', 'Secure Payments', "Loyalty rewards", "30-Day Return"]
        const foot = footerItems.map(item => {
            return (
                <div className='h-32 w-52 flex justify-around gap-2 items-center text-center text-xs'>
                    {item.includes('Ship') && <h1 className='text-3xl'><FaShippingFast /></h1>}
                    {item.includes('Secure') && <h1 className='text-3xl'><FaShieldAlt /></h1>}
                    {item.includes('Loyalty') && < h1 className='text-3xl'><FaMoneyBillAlt /></h1>}
                    {item.includes('Return') && <h1 className='text-3xl'><Fa500Px /></h1>}



                    {item}
                </div>
            )

        })
        return foot
    }

    return (
        <div className='h-[100vh] relative bg-black'>

            <NavBar />

            <div className='transition-all hover:scale-110 md:hover:scale-y-150 md:hover:scale-x-125 top-0 hover:top-32 overflow-hidden duration-1000 ease-in-out lg:w-[50%] w-[50%] md:w-96 h-[35rem] rounded-b-full bg-gray-600 absolute right-0'>
                <img className=' object-cover h-full w-full' src="https://images.unsplash.com/photo-1614483080746-7739e19960a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2lvbiUyMG1hbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" alt="" />


            </div>

            <div className='h-24 empty'></div>

            <div className="w-[50%]">
                <div className="items-center justify-center w-48 md:w-96 m-auto h-96 p-4 relative">
                    <div className='text-sm'>
                        <p>Autumn</p>
                        <p>Collection</p>
                        <p>2023</p>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-5xl md:text-7xl'>Humaine</h1>
                        <h1 className='text-5xl md:text-7xl'>Vibes</h1>
                    </div>
                    <div className=''>
                        <p>Casual line. short desgin. 100% suade lather. etc that make store great</p>
                    </div>

                    <button className='my-12 border-2 p-2 border-gray-500 trans-slow hover:text-black hover:bg-gray-300'>Shop Now</button>
                </div>
            </div>

            <div className='p-12 mt-40 m-auto w-[90%]'>
                <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-40 items-center">
                    <div className='group  rounded-full hover:scale-125 trans-slow border-dotted border-4 h-96 w-60 center'>
                        <div className='w-[90%] group-hover:scale-75 group-hover:animate-pulse trans-slow h-[90%] overflow-hidden object-cover bg-white rounded-full'>
                            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1565537222174-2a43ca1c3462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w5MzY1ODN8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60" alt="" />
                        </div>
                    </div>
                    <div className='h-96 w-96 p-4'>
                        <h1 className='w-20 text-xs my-4'>Established 2020</h1>
                        <div>
                            <h1 className='text-2xl font-bold'>Humaine Grandeur Philosophy</h1>
                            <h1 className='font-semibold italic'>"5 is the goat"</h1>
                        </div>
                        <div>
                            <br />
                            <h1 className='text-sm'>
                                Now seven world think timed while her.
                                Spoil large oh he rooms on since an.
                                Am up unwilling eagerness perceived incommode.
                            </h1>
                            <br />
                            <h1 className='text-sm'>
                                Of recommend residence education be on difficult
                                repulsive offending. Judge views
                            </h1>
                        </div>
                        <button className='my-12 border-2 p-2 border-gray-500 trans-slow hover:text-black hover:bg-gray-300'>Shop Now</button>

                    </div>
                </div>
            </div>

            <div className='bg-[#141414] bottom-3 h-96 overflow-hidden'>
                <div className=' w-full p-2'>
                    <div className='m-auto w-[51rem] flex justify-between items-center'>
                        <h1 className='text-3xl my-4'>Best Seller</h1>
                        <div>
                            <h1 className='font-bold'>VIEW ALL  {' >>'}</h1>
                        </div>
                    </div>
                    <div className='gap-4 flex justify-center overflow-x-scroll'>
                        {bestseller.map((item) => {
                            return (<ItemBox key={item} />)
                        })}
                    </div>
                </div>
            </div>

            <div className='bg-white h-[35rem] overflow-hidden relative'>
                <div className='p-4 absolute top-0 flex justify-center flex-col items-center left-0 z-10 h-full w-full'>
                    <h1 className='text '>Gift Guide 2023</h1>
                    <h1 className='text-4xl md:text-5xl font-bold'>The Gift Guide 2023</h1>
                    <br />
                    <br />
                    <br />
                    <h1 className='text-center w-80 text- white'>present gifts for your family, friends, or other special people in your life, no matter the events</h1>
                </div>
                <img className='h-[220%] bottom-20 md:bottom-0 object-cover  md:left-0   w-[220%] relative' src="https://images.unsplash.com/photo-1555661398-9fd5131763ec" alt="" />
            </div>

            <div className='bg-[#141414] bottom-3 h-96 overflow-hidden'>
                <div className=' w-full p-2'>
                    <div className='m-auto w-[51rem] flex justify-between items-center'>
                        <h1 className='text-3xl my-4'>New Items</h1>
                        <div>
                            <h1 className='font-bold'>VIEW ALL  {' >>'}</h1>
                        </div>
                    </div>
                    <div className='gap-4 flex justify-center overflow-x-scroll'>
                        {bestseller.map((item) => {
                            return (<ItemBox key={item} />)
                        })}
                    </div>
                </div>
            </div>

            <div className='flex gap-1 justify-center items-center'>
                <div className='w-[50%] relative bg-slate-200 h-52 md:h-96 overflow-hidden'>
                    <div className='p-8 absolute top-0 flex justify-center flex-col items-center left-0 z-10 h-full w-full'>
                        <h1 className='text-sm'>Collection</h1>
                        <h1 className='text-xl text-black md:text-white text-center md:text-5xl font-bold'>Online Only</h1>
                        <br />
                        <br />
                        <br />
                        <h1 className='text-center bg-opacity-80 bg-black p-1 text-white'>Discover new items at a lower price</h1>
                    </div>
                    <img className='w-[120%] h-[120%] object-cover relative' src="https://images.unsplash.com/photo-1646805925007-510be75f20f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGlnaCUyMGZhc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60S" alt="" />
                </div>
                <div className='w-[50%] overflow-hidden relative bg-slate-200 h-52 md:h-96'>
                    <div className='p-8 absolute top-0 flex justify-center flex-col items-center left-0 z-10 h-full w-full'>
                        <h1 className='text-sm'>SALE UP TO</h1>
                        <h1 className='text-xl md:text-white text-center md:text-5xl font-bold'>{<div className='text-orange-400 inline-block'>40%</div>} OFF</h1>
                        <br />
                        <br />
                        <br />
                        <h1 className='text-center  bg-black bg-opacity-80 p-1 text-white '>Hurry only for a limited time!</h1>
                    </div>
                    <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" alt="" />
                </div>
            </div>

            <div className='w-[90%] md:h-32 h-fit  bg-white  m-auto my-20 overflow-hidden relative'>
                <div className='z-10 absolute text-black flex  justify-between md:p-8 items-center flex-col md:flex-row w-full h-full'>
                    <div>
                        <h1 className='text-4xl font-bold'>Humaine</h1>
                        <h1 className='font-semibold text-center'>Grandeur</h1>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-3xl'>Shop Now With Us</h1>
                        <h1 className='text-xs'>buy all your clothing needs</h1>
                    </div>
                    <button className='w-28 h-12 bg-white trans-slow hover:scale-110 shadow shadow-black hover:shadow-none hover:bg-black hover:text-white text-black m-4'>Shop Now</button>
                </div>
                <div className='bg-white w-full h-full absolute bg-opacity-75'></div>
                <img className='w-full h-full op object-cover' src="https://img.freepik.com/free-vector/larkspur-by-william-morris_53876-58889.jpg?w=1800&t=st=1678976980~exp=1678977580~hmac=4cbe4de4532ab7727485d1936d35c9bcc9aaa8e452acfd0428bddd013b41198a" alt="" />
            </div>

            <div className='h-60 p-14 overflow-hidden m-2'>
                <div className="flex justify-between md:w-[51rem] m-auto">
                    <h1 className='font-semibold text-sm md:text-lg'>World of Humaine Grandeur</h1>
                    <h1>ALL ARTICLES {' >>'}</h1>
                </div>
                <div className='gap-4 flex justify-center items-center overflow-x-scroll'>
                    {bestseller.map((item) => {
                        return (<ItemBox key={item} />)
                    })}
                </div>
            </div>

            <div className='mt-20 border-t-gray-600 gap-2 md:gap-16 border-t md:w-[51rem]  md:justify-between justify-center items-center m-auto flex w-[90%] p-4'>
                <Footer />
            </div>

            <div className='bg-[#141414] text-xs gap-12 h-fit  p-14 flex flex-col md:flex-row justify-start items-start'>
                <div className='p-2'>
                    <h1 className='my-1 font-bold text-2xl'>Humaine Grandeur</h1>
                    <h1 className='my-1 '>will add adress here if so?</h1>
                    <h1 className='my-1 '>+1234567890</h1>
                    <h1 className='my-1 '>email@email.com</h1>
                    <div className="my-1  flex gap-4  items-center">
                        <button className="h-4 w-4 trans hover:scale-105 bg-white"></button>
                        <button className="h-4 w-4 trans hover:scale-105 bg-white"></button>
                        <button className="h-4 w-4 trans hover:scale-105 bg-white"></button>
                        <button className="h-4 w-4 trans hover:scale-105 bg-white"></button>
                    </div>
                </div>
                <div className='my-10 p-2 h-full w-fit'>
                    <h1 className='text-2xl '> Company</h1>
                    <div className='h-12 '>
                        <button className='block'>Contact</button>
                        <button className='block'>About Store</button>
                    </div>
                </div>

                <div className=' h-fit'>
                    <div className='p-2 h-fit'>
                        <h1 className='m-1 font-bold text-2xl'>Newletter</h1>
                        <h1 className='m-1 '>Be the first to hear
                            the latest news from Humaine
                            Grandeur, and much more!
                        </h1>
                        <input className='w-full h-8 trans-slow focus:scale-110 hover:scale-105' type="text" placeholder='Email' />
                        <h1>By subscribing you agree to our privacy policy</h1>
                        <button className='h-12 w-32 p-2 bg-gray-700 trans-slow hover:bg-black hover:scale-110 my-8'>Subscribe</button>
                    </div>

                </div>

            </div>
            <div className='h-12 bg-white'></div>


        </div>
    )
}

export default ShopPage