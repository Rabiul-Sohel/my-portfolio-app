import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rabiul Sohel",
  description: "Web Developer and Web Designer",
};
const poppins = Poppins({ weight: ['400', '600', '800'], subsets: ['latin'] })

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  selection:text-black  text-white  selection:bg-gold ${poppins.className}`}
      >
        <div className="     ">
          <Navbar></Navbar>
        </div>
        <div className=" bg-deepBlue">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
