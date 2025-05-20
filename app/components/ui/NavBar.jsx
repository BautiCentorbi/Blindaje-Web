"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        scrolled ? "bg-background/80" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Isotipo_Blindaje.svg"
            alt="Logo Blindaje"
            width={64}
            height={64}
          />
          <Image
            src="/images/Logotipo_Blindaje.svg"
            alt="Logo Blindaje"
            width={156}
            height={64}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6 text-base items-center">
              {/* Home */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/") &&
                        "relative text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Nosotros */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive("/about") &&
                      "relative text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300"
                  )}
                >
                  <Link href="/about">Nosotros</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-56">
                    <li>
                      <Link
                        href="/about#historia"
                        className={navigationMenuTriggerStyle()}
                      >
                        Nuestra Historia
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#objetivos"
                        className={navigationMenuTriggerStyle()}
                      >
                        Objetivos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#porque-elegirnos"
                        className={navigationMenuTriggerStyle()}
                      >
                        ¿Por qué elegirnos?
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Servicios */}
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/services") &&
                        "relative text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300"
                    )}
                  >
                    Servicios
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Contacto */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/contact") &&
                        "relative text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300"
                    )}
                  >
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background px-6 py-4 space-y-4 text-base animate-slide-down">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block">
            Home
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block">
            Nosotros
          </Link>
          <div className="pl-4 space-y-1">
            <Link
              href="/about#historia"
              onClick={() => setMobileOpen(false)}
              className="block"
            >
              Nuestra Historia
            </Link>
            <Link
              href="/about#objetivos"
              onClick={() => setMobileOpen(false)}
              className="block"
            >
              Objetivos
            </Link>
            <Link
              href="/about#porque-elegirnos"
              onClick={() => setMobileOpen(false)}
              className="block"
            >
              ¿Por qué elegirnos?
            </Link>
          </div>
          <Link href="/services" onClick={() => setMobileOpen(false)} className="block">
            Servicios
          </Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block">
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;