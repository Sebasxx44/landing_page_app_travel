
import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel UI/UX App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
