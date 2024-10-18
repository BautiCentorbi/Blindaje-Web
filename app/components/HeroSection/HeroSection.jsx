import { Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="bg-parallax bg-cover flex flex-col h-screen w-full justify-center items-center gap-16">
        <div>
          <Image 
              src={'/images/BN_Logo_Blindaje_Completo.svg'}
              height={180}
              width={980}
              alt="Logo de Blindaje"
              
          />
        </div>
        <div className="max-w-[900px] flex flex-col gap-8">
          <h1 className="w-full text-2xl text-center">En Blindaje, ofrecemos servicios de seguridad integral con tecnología de punta, cubriendo seguridad física, electrónica, análisis de riesgos y asesorías profesionales</h1>
          <div className="w-full flex gap-4 justify-end">
            <Link href={'/about'}>
              <Button size='lg' color='background' variant="bordered">Nuestra Historia</Button>
            </Link>
            <Link href={'/contact'}>
              <Button className="font-medium" size='lg' color='primary' variant="solid">Contacta con Nosotros</Button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default HeroSection