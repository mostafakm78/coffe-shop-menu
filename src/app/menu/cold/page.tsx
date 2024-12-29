
'use client';

import React, { useEffect } from 'react';
import { useMenuContext } from '../layout';
;


export default function WarmMenu() {

    const { setTitle } = useMenuContext();

    useEffect(() => {
        setTitle('نوشیدنی های سرد'); // ارسال متن به Layout
    }, [setTitle]);


    return (
            <>
            <div className="grid md:grid-cols-4 grid-cols-2 w-full justify-items-center gap-8">
                <div className="bg-gray-300 w-full h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-evenly items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                        نوشیدنی سرد
                        <img src="../image/4212NEW.jpg" className="h-20 rounded-full"/>
                </div>
                <div className="bg-gray-300 w-full h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-evenly items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                        نوشیدنی گرم
                        <img src="../image/4212NEW.jpg" className="h-20 rounded-full"/>
                </div>
                <div className="bg-gray-300 w-full h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-evenly items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                        منوی کامل
                        <img src="../image/4212NEW.jpg" className="h-20 rounded-full"/>
                </div>
                <div className="bg-gray-300 w-full h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-evenly items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                        سایر
                        <img src="../image/4212NEW.jpg" className="h-20 rounded-full"/>
                </div>
                <div className="bg-gray-300 w-full h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-evenly items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                        سایر
                        <img src="../image/4212NEW.jpg" className="h-20 rounded-full"/>
                </div>
                <div className="bg-gray-300 w-full h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-evenly items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                        سایر
                        <img src="../image/4212NEW.jpg" className="h-20 rounded-full"/>
                </div>
                <div className="bg-gray-300 w-full h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-evenly items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                        سایر
                        <img src="../image/4212NEW.jpg" className="h-20 rounded-full"/>
                </div>
                <div className="bg-gray-300 w-full h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-evenly items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                        سایر
                        <img src="../image/4212NEW.jpg" className="h-20 rounded-full"/>
                </div>
            </div>
            </>
    )
}
