"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Nosotros",
      href: "/about",
    },
    {
      label: "Servicios",
      href: "/services",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },);

  return (
    <Navbar
      dark
      className={`fixed w-full transition-colors duration-300 ${
        scrollPosition > 50 ? "bg-gray-800" : "bg-transparent"
      } backdrop-blur`}
      onMenuOpenChange={setToggleMenu}
    >
      <NavbarBrand>
        <Link href={"/"}>
          <Image
            src={"/images/BN_Logo_Blindaje.svg"}
            width={64}
            height={64}
            alt="Logo Blindaje"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link
              className={`transition border-b-2 border-transparent flex h-full text-xl text-center hover:border-white ${
                pathname === item.href.toLowerCase()
                  ? "border-b-secondary font-bold hover:border-b-secondary"
                  : ""
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={toggleMenu ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu className="flex">
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === navItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link className="w-full" href={"/contact"} size="lg">
            Contacto
          </Link>
        </NavbarMenuItem>
        <NavbarContent
          justify="end"
          className="text-slate-400 flex flex-col gap-0"
        >
          <span>® Blindaje 2024</span>
          <p>Todos los derechos reservados</p>
        </NavbarContent>
      </NavbarMenu>
      <NavbarContent className="hidden md:flex" justify="end">
        <Button className="font-medium" color="primary">
            Contacto
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
