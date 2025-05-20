import "./globals.css";
import NavBar from "./components/ui/NavBar";
import { Hanken_Grotesk, Abril_Fatface } from "next/font/google";
import Footer from "./components/ui/Footer";
const HankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });
const AbrilFatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Blindaje - Seguridad Privada Integral",
  description:
    "Blindaje es una empresa argentina dedicada a la seguridad privada integral. Donde nos enfocamos en brindar el mejor servicio posible, contamos con servicios como...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${HankenGrotesk.className} scroll-smooth`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
