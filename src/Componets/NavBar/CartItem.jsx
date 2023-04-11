import React, { useEffect, useState } from 'react'


function CartItem({ name, price, qty, img, setClientCart }) {
    const [qtyInputValue, setQtyInputValue] = useState()
    const handleInputChange = ({ target }) => {
        setQtyInputValue(target.value);
        //
        setClientCart(old => {
            return (
                { ...old, [name + price]: { ...old[name + price], count: Number(target.value) } }
            )
        })
    }
    const updateCart = (minus) => {
        if (minus) {
            setQtyInputValue(old => Number(old) - 1)
            setClientCart(old => {
                return (
                    { ...old, [name + price]: { ...old[name + price], count: old[name + price].count - 1 } }
                )
            })

        } else {
            setQtyInputValue(old => Number(old) + 1)
            setClientCart(old => {
                return (
                    { ...old, [name + price]: { ...old[name + price], count: old[name + price].count + 1 } }
                )
            })

        }
    }

    useEffect(() => {
        setQtyInputValue(qty)

    }, [qty])
    return (
        <div className='w-[90%] center gap-4   h-16 m-auto'>
            <div className='flex gap-2'>
                <div className='bg-black h-14 w-14 my-2 rounded overflow-hidden'>
                    <img className='h-full w-full object-cover' src={img} alt="" />
                </div>
                <div className='flex center text-center flex-col w-20'>
                    <h1>{name}</h1>
                    <h1>${price}</h1>
                </div>
            </div>
            <div className=' h-12 w-40 flex-grow'>
                <div className='w-20 h-full center m-auto'>
                    <div className='rounded-full  h-8 m-auto bg-black center'>
                        <button onClick={() => { updateCart(true) }} className='rounded-l-full h-full w-1/3 bg-white text-black hover:bg-rose-600 trans hover:text-white'>-</button>
                        <input className='h-full m-auto text-center  w-1/3 bg-slate-500' inputMode='numeric' type={'text'} defaultValue={qty} value={qtyInputValue} onChange={handleInputChange} maxLength={2} />
                        <button onClick={() => { updateCart() }} className='rounded-r-full h-full w-1/3 bg-white text-black hover:bg-blue-600 trans hover:text-white'>+</button>
                    </div>
                </div>
            </div>
            <div>
                <button className={'bg-black p-2 rounded-full hover:text-rose-600 trans'}>
                    <h1 className='font-bold font-white'>
                        Remove
                    </h1>
                </button>
            </div>
        </div>
    )
}

export default CartItem