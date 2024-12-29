'use client';

import React, { createContext, useState, ReactNode, useContext } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';


interface MenuContextType {
  setTitle: (title: string) => void;
}


const MenuContext = createContext<MenuContextType | undefined>(undefined);


export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within MenuLayout');
  }
  return context;
};

interface MenuLayoutProps {
  children: React.ReactNode;
}

export default function MenuLayout({ children }: MenuLayoutProps) {
  const [title, setTitle] = useState<string>('');

  return (
    <MenuContext.Provider value={{ setTitle }}>
      <div className="container flex flex-col justify-between items-center mx-auto">
        <Header src="../image/4212NEW.jpg" />
        <div className='mt-6 flex justify-between w-11/12 items-center'>
        <span className="text-3xl  text-gray-200 border-b-2 border-b-gray-200 pb-2 ">{title}</span>
        <Link href="/" className='text-gray-800 dark:text-gray-300 dark:bg-gray-600 bg-gray-300 py-4 px-6 rounded-md hover:cursor-pointer hover:scale-105 duration-300 md:text-xl text-lg hover:bg-gray-800 dark:hover:bg-gray-300 dark:hover:text-gray-600 hover:text-gray-300'>بازگشت</Link>
        </div>
        <div className="flex md:py-10 w-11/12 py-6">{children}</div>
        <Footer />
      </div>
    </MenuContext.Provider>
  );
}
