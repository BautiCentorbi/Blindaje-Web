import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/ui/NavBar";
import { Hanken_Grotesk } from 'next/font/google'
import Footer from "./components/ui/Footer";
const HankenGrotesk = Hanken_Grotesk({subsets: ['latin']})

export const metadata = {
  title: "Blindaje - Seguridad Privada Integral",
  description: "Blindaje es una empresa argentina dedicada a la seguridad privada integral. Donde nos enfocamos en brindar el mejor servicio posible, contamos con servicios como...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${HankenGrotesk.className}`}
      >
        <NextUIProvider>
          <NavBar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
