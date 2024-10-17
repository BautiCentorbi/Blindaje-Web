'use client'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const pathname = usePathname()
    const navItems = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Nosotros',
            href: '/about',
        },
        {
            label: 'Servicios',
            href: '/services',
        },
    ]

    return (
    <Navbar className="absolute" onMenuOpenChange={setToggleMenu}>
        <NavbarBrand>
            <Image 
                src={'/images/BN_Logo_Blindaje.svg'}
                width={64}
                height={64}
                alt="Logo Blindaje"
            />
        </NavbarBrand>
        <NavbarContent justify="center" className="hidden md:flex gap-8">
            {navItems.map((item) => (
                <NavbarItem><Link color="foreground" className={`flex h-full text-xl text-center ${pathname === item.href.toLowerCase() ? 'border-b-2 font-bold' : ''}`} href={item.href}>{item.label}</Link></NavbarItem>
            ))}
        </NavbarContent>
        <NavbarMenuToggle
            aria-label={toggleMenu ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
        />
        <NavbarMenu className="flex">
            {navItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                        color={
                        index === 2 ? 'primary' : index === navItems.length - 1 ? 'danger' : 'foreground'
                        }
                        className="w-full"
                        href={item.href}
                        size="lg"
                    >
                    {item.label}
                    </Link>
                </NavbarMenuItem>
            ))}
        <NavbarContent justify='end' className="text-slate-400 flex flex-col gap-0">
            <span >® Blindaje 2024</span>
            <p>Todos los derechos reservados</p>
        </NavbarContent>
        </NavbarMenu>
        <NavbarContent className="hidden md:flex" justify="end">
            <Button color="primary"><span className="font-bold">Contacto</span></Button>
        </NavbarContent>
    </Navbar>
  )
}

export default NavBar