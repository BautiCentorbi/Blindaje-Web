import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main>
      <Image 
        src={'/'}
        height={240}
        width={1080}
      />
    </main>
  )
}

export default page