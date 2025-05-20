import Image from 'next/image'
import Link from 'next/link'
import {FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center pt-8 md:pt-12 pb-2 md:pb-4 px-8 md:px-24 gap-4 md:gap-8 bg-gray-100">
        <div>
            <Link href={'/'}>
                <Image 
                    src={'/images/Imagotipo_Blindaje.svg'}
                    className='filter dk:brightness-0 dk:invert'
                    height={64}
                    width={240}
                    alt=''
                />
            </Link>
        </div>
        <div className='flex flex-col md:flex-row gap-2 md:gap-8'>
            <Link href={'/'} className='transition hover:text-dk_primary hover:scale-110'>
                Home
            </Link>
            <Link href={'/about'} className='transition hover:text-dk_primary hover:scale-110'>
                Nosotros
            </Link>
            <Link href={'/services'} className='transition hover:text-dk_primary hover:scale-110'>
                Servicios 
            </Link>
            <Link href={'/contact'} className='transition hover:text-dk_primary hover:scale-110'>
                Contacto
            </Link>
        </div>
        <div className="flex items-center gap-16">
            <hr className='border-slate-600 hidden md:flex md:w-48'/>
            <div className='flex gap-8'>
                <Link href={'/'}> 
                    <FaInstagram size={32} className='transition hover:text-dk_primary hover:scale-125'/>    
                </Link>
                <Link href={'/'}>
                    <FaWhatsapp size={32} className='transition hover:text-dk_primary hover:scale-125'/>
                </Link>
                <Link href={'/'}>
                    <FaFacebook size={32} className='transition hover:text-dk_primary hover:scale-125'/>
                </Link>
                <Link href={'/'}>
                    <FaLinkedin size={32} className='transition hover:text-dk_primary hover:scale-125'/>
                </Link>
            </div>
            <hr className='border-slate-600 hidden md:flex md:w-48'/>
        </div>
        <span className='text-slate-500 text-center text-sm md:text-lg'>Blindaje® 2024 - Todos los derechos reservados</span>
    </footer>
  )
}

export default Footer