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
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Nosotros",
    href: "/about",
    submenu: [
      { label: "Nuestra Historia", href: "/about#historia" },
      { label: "Objetivos", href: "/about#objetivos" },
      { label: "¿Por qué elegirnos?", href: "/about#porque-elegirnos" },
    ],
  },
  { label: "Servicios", href: "/services" },
  { label: "Contacto", href: "/contact" },
];

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
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300",
        scrolled ? "bg-background/80" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-1 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo_Blindaje.svg"
              alt="Logo Blindaje"
              width={42}
              height={42}
            />
            <Image
              src="/images/Logotipo_Blindaje.svg"
              alt="Logo Blindaje"
              width={150}
              height={60}
              className="hidden md:block"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6 text-base items-center">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isActive(item.href) &&
                            "relative text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary"
                        )}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-2 p-4 w-56">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.label}>
                              <Link
                                href={subItem.href}
                                className={navigationMenuTriggerStyle()}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isActive(item.href) &&
                            "relative text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary"
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background px-6 py-4 space-y-4 text-base overflow-hidden"
          >
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block"
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileOpen(false)}
                        className="block"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
