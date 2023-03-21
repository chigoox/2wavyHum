import React from 'react'
import { BsStarFill } from 'react-icons/bs'

const Rating = ({ rate }) => {
    return (
        <div className="flex gap-1 items-center">
            {rate >= 1 && <div className={'h-5 w-5 text-yellow-400'}><BsStarFill /></div>}
            {rate >= 2 && <div className={'h-5 w-5 text-yellow-400'}><BsStarFill /></div>}
            {rate >= 3 && <div className={'h-5 w-5 text-yellow-400'}><BsStarFill /></div>}
            {rate >= 4 && <div className={'h-5 w-5 text-yellow-400'}><BsStarFill /></div>}
            {rate >= 5 && <div className={'h-5 w-5 text-yellow-400'}><BsStarFill /></div>}


        </div >
    )
}

export default Rating