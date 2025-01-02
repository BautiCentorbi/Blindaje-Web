'use client'
import { images } from '@/app/constants/Images'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const MainCarousell = () => {
    const [ activeImage, setActiveImage ] = useState(0)
    
    const nextImg = () => {
        activeImage === images.length - 1
        ? setActiveImage(0)
        : setActiveImage(activeImage + 1)
    }
    const prevImg = () => {
        activeImage === 0
        ? setActiveImage(images.length - 1)
        : setActiveImage(activeImage - 1)
    }

    useEffect(() => {
        const timer = setTimeout(() => {nextImg()},3000)
        return () => clearTimeout(timer)
    }, [activeImage])

    return (
    <div className='flex place-items-center w-full mx-auto rounded-2xl'>
        <div className='w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-300 rounded-2xl'>
            {images.map((img, i)=> (
                <div 
                key={i}
                className={`${
                    i === activeImage
                    ? 'block w-full h-auto object-cover transition-all duration-500 ease-in-out'
                    : 'transition hidden'
                }`}
                >
                    <Image 
                        src={img.src}
                        alt={img.description}
                        height={1200}
                        width={1200}
                        className='object-cover w-full h-full rounded-2xl'
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default MainCarousell