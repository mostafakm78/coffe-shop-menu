
'use client';

import React, { useEffect } from 'react';
import { useMenuContext } from '../layout';
import MenuOption from '@/components/menuOption';
;


export default function WarmMenu() {

    const { setTitle } = useMenuContext();

    useEffect(() => {
        setTitle('نوشیدنی های سرد'); // ارسال متن به Layout
    }, [setTitle]);


    return (
            <>
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full justify-items-center gap-8">
                <MenuOption span='نوشیدنی' details='این نوشیدنی شامل محتویات قهوه و شکلات و شیر داغ میباشد ین نوشیدنی شامل محتویات قهوه و شکلات و شیر داغ میباشد'  />
                <MenuOption span='نوشیدنی' details='نوشیدنی'  />
                <MenuOption span='نوشیدنی' details='نوشیدنی'  />
                <MenuOption span='نوشیدنی' details='نوشیدنی'  />
                <MenuOption span='نوشیدنی' details='نوشیدنی'  />
                <MenuOption span='نوشیدنی' details='نوشیدنی'  />
                <MenuOption span='نوشیدنی' details='نوشیدنی'  />
                <MenuOption span='نوشیدنی' details='نوشیدنی'  />
            </div>
            </>
    )
}
