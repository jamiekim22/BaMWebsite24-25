import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono, Rubik } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'] // adjust this as needed later
})

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: ['400', '700'] // adjust this as needed later
});


export const metadata: Metadata = {
  title: "BaM Website 2024/25",
  description: "Coded by the goat Jamie Kim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
