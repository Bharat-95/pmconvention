import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/Header' 
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PM Convention ",
  description: "Affordable Function Hall",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Banner />
        <Header />
        {children}
         <Footer />
      </body>
    </html>
  );
}
