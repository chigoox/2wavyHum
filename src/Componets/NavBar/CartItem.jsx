import React from 'react'


function CartItem({ name, price, QTY }) {
    return (
        <div className='w-[90%] center gap-2  h-16 m-auto'>
            <div className='flex gap-2'>
                <div className='bg-black h-14 w-14'>
                    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1528139494595-a848e52c6335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" alt="" />
                </div>
                <div className='flex center flex-col'>
                    <h1>Name</h1>
                    <h1>Price</h1>
                </div>
            </div>
            <div className=' h-12 w-40 flex-grow'>
                <div className='w-20 h-full center m-auto'>
                    <div className='rounded-full  h-8 m-auto bg-black center'>
                        <button className='rounded-l-full h-full w-1/3 bg-white text-black'>-</button>
                        <input className='h-full m-auto text-center  w-1/3 bg-slate-500' type={'text'} maxLength={2} />
                        <button className='rounded-r-full h-full w-1/3 bg-white text-black'>+</button>
                    </div>
                </div>
            </div>
            <div>
                <button className={'bg-black p-2 rounded-full'}>
                    <h1 className='font-bold font-white'>
                        Remove
                    </h1>
                </button>
            </div>
        </div>
    )
}

export default CartItem