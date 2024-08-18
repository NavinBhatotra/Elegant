"use client"
import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathName = usePathname()

  const getLayout = () => {
    if (pathName === "/signup" || pathName === "/signin") {
      return (
        <html lang="en" className={`${poppins.variable}`}>
          <body>
            <Head>
              <title>My Next.js App</title>
              <meta name="description" content="A Next.js application" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{children}</main>
          </body>
        </html>
      );
    } else {
      return (
        <html lang="en" className={`${poppins.variable}`}>
          <body>
            <Head>
              <title>My Next.js App</title>
              <meta name="description" content="A Next.js application" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
      );
    }
  }

  return getLayout()
};

export default Layout;
