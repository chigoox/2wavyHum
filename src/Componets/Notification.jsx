import React from 'react'

function Notification({ message, setMessage }) {
    if (message) {
        setTimeout(() => {
            setMessage()
        }, 5000)
    }
    return (
        <div className={`absolute bg-opacity-95 z-[9999999] trans-slow  drop-shadow shadow-black rounded-lg p-2 ${message ? 'h-32 top-20 opacity-100' : 'h-0 -top-20 opacity-0'} m-auto w-64 md:w-96 bg-emerald-600`}>
            <div className='center h-full'>
                <h1 className='text-xl'>{message}</h1>
            </div>
        </div>
    )
}

export default Notification