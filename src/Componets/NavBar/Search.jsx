import React from 'react'
import { AiOutlineCloseSquare, AiOutlineSearch } from 'react-icons/ai'

function Search({ showSearch, toggleSearch }) {
    return (
        <div className={`${showSearch ? 'h-[3.5rem]' : 'h-[0rem]'}  w-[25rem] trans-slow bg-[#080808] absolute  top-16 right-1 md:right-16`}>
            <div className={`${showSearch ? 'h-[7rem] trans-slow-2x visible' : 'h-0 trans invisible opacity-0'}  w-[25rem]   flex items-center p-2 flex-col rounded-b-3xl `}>
                <div className='bg-[#080808] h-12 w-12  absolute right-[10.7rem] -top-10 rounded-t-full'></div>

                <div className='flex justify-between items-center w-full'>
                    <input placeholder='Search Store' className='w-full z-10 text-black text-bold p-1 text-2xl trans-slow-2x' type="text" />
                    <button onClick={() => { alert('search not yet added!') }} className=' mx-2 h-10 w-10  hover:text-orange-500 trans-slow hover:scale-105 text-4xl center text-white'><AiOutlineSearch /></button>
                </div>


            </div>
        </div>
    )
}

export default Search