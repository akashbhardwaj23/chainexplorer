import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar";
import QueryProvider from "./(query)/QueryProvider";
import Footer from "../components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});


export const metadata: Metadata = {
  title: "ChainExplorer",
  description: "Shows the price and blocks mined on different blockchains",
  icons : {
    icon : "./icon.svg"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-poppins min-h-screen dark:bg-[#161616]`}>
        <QueryProvider>
        <Navbar />
        {children}
        <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
