import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="bg-parallax bg-cover flex flex-col h-screen w-full md:justify-center items-center gap-8 md:gap-16 px-4 py-24 md:py-0">
        <div>
          <Image 
              src={'/images/BN_Logo_Blindaje_Completo.svg'}
              height={180}
              width={980}
              alt="Logo de Blindaje"
              
          />
        </div>
        <h1 className="max-w-[900px] text-lg md:text-2xl text-center text-white">En Blindaje, ofrecemos servicios de seguridad integral con tecnología de punta, cubriendo seguridad física, electrónica, análisis de riesgos y asesorías profesionales</h1>
    </div>
  )
}

export default HeroSection