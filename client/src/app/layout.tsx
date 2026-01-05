import type { Metadata } from "next";
import {Manrope ,Space_Grotesk} from "next/font/google";
import "./globals.css";
 
 
const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable:"--font-grotesk-sans",
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Genesis.ai",
  description: "One stop image gen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manropeSans.variable} ${spaceGrotesk.variable} antialiased`}
      > 
         
        {children}
      </body>
    </html>
  );
}
