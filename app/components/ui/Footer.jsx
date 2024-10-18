import Image from 'next/image'
import Link from 'next/link'
import {FaInstagram, FaFacebook, FaLinkedin, FaMap} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center pt-8 md:pt-12 pb-2 md:pb-4 px-8 md:px-24 gap-2 md:gap-8 ">
        <div className="flex items-center gap-16">
            <hr className='border-slate-600 hidden md:flex md:w-48'/>
            <div className='flex gap-8'>
                <Link href={'/'}> 
                    <FaInstagram size={32} className='transition hover:text-secondary hover:scale-125'/>    
                </Link>
                <Link href={'/'}>
                    <FaFacebook size={32} className='transition hover:text-secondary hover:scale-125'/>
                </Link>
                <Link href={'/'}>
                    <FaLinkedin size={32} className='transition hover:text-secondary hover:scale-125'/>
                </Link>
                <Link href={'/'}>
                    <FaMap size={32} className='transition hover:text-secondary hover:scale-125'/>
                </Link>
            </div>
            <hr className='border-slate-600 hidden md:flex md:w-48'/>
        </div>
        <div>
            <Link href={'/'}>
                <Image 
                    src={'/images/BN_Logo_Blindaje_Completo.svg'}
                    height={64}
                    width={240}
                    alt=''
                />
            </Link>
        </div>
        <div className='flex gap-8'>
            <Link href={'/'} className='transition hover:text-secondary hover:scale-110'>
                Home
            </Link>
            <Link href={'/about'} className='transition hover:text-secondary hover:scale-110'>
                Nosotros
            </Link>
            <Link href={'/services'} className='transition hover:text-secondary hover:scale-110'>
                Servicios 
            </Link>
            <Link href={'/contact'} className='transition hover:text-secondary hover:scale-110'>
                Contacto
            </Link>
        </div>
        <span className='text-slate-500'>Blindaje® 2024 - Todos los derechos reservados</span>
    </footer>
  )
}

export default Footer