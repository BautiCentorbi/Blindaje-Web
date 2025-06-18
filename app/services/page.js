import React from 'react'
import MainSection from './components/MainSection'
import { Abril_Fatface } from "next/font/google";

const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });


const ServicesPage = () => {
  return (
    <main className='h-screen mt-4 md:mt-32 flex flex-col items-center mx-4 md:mx-40'>
      <h1 className="text-2xl max-w-4xl md:text-5xl md:max-w-3xl text-center dk:text-white">
          Seguridad<br className="md:hidden"/> Privada
          <span className={`${AbrilFatface.className} text-dk_primary text-4xl md:text-5xl`}>
            {" "}
            Integral
          </span>
      </h1>
      <MainSection />
    </main>
  )
}

export default ServicesPage