import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='relative h-screen'>
      <div className='bg-AboutParallax bg-cover bg-fixed h-96 w-full paralax-bg flex items-end justify-start'>
        <h1 className='leading-[0.7] text-background font-bold text-9xl uppercase'>Sobre Nosotros</h1>
      </div>
    </main>
  )
}

export default page