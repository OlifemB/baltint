'use client'

import React, {useState} from 'react';
import Link from "next/link";
import {data, IHeaderData} from './data'
import {useAppSelector} from "@/redux/store";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import IconMenu from "@/assets/icons/icon-menu.svg"
import IconClose from "@/assets/icons/icon-close.svg"
import {useMediaQuery} from "usehooks-ts";
import Image from "next/image";


const Header = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const componentData = data[lang as keyof IHeaderData]
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const matches = useMediaQuery('(max-width: 768px)')
    
    const toggleMenuHandler = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <header className={'bg-primary shadow-xl fixed left-0 top-0 right-0 z-50'}>
            <div className={'flex flex-row flex-1 justify-between align-center container mx-auto py-4 px-4 md:px-0 relative'}>
                <Link
                    href={'/'}
                    className={clsx('font-bold text-xl lg:text-2xl flex-1 hover:text-gray-100 duration-300 uppercase tracking-wide', pathname === '/' ? 'text-gray-100' : 'text-gray-400')}
                >
                    <componentData.logo className={'h-6'}/>
                </Link>
                
                <nav
                    id={'desktop-menu'}
                    className={'hidden lg:flex flex-row gap-6 h-max'}
                >
                    {componentData.nav.map((item, index) =>
                        <div className={'relative'} key={item.title + item.link + index}>
                            <Link
                                href={item.link}
                                className={clsx('font-normal hover:text-gray-100  duration-300', item.id === pathname.slice(1) ? 'text-gray-100 font-bold' : 'text-gray-400 ')}
                            >
                                {item.title}
                            </Link>
                        </div>
                    )}
                </nav>
                
                {/*   MOBILE =================================================== */}
                <nav
                    id={'mobile-menu'}
                    className={clsx('fixed left-0 top-0 w-full h-0 0 bg-gray-800 overflow-hidden left-0 right-0 flex  flex-1 w-full flex-col justify-center items-start gap-2 md:hidden duration-300', isOpen ? 'h-full' : 'h-0')}
                >
                    {componentData.nav.map((item, index) =>
                        <div className={'relative px-8 flex flex-col gap-8'}
                             key={item.title + item.link + index} onClick={toggleMenuHandler}>
                            <Link
                                href={item.link}
                                className={clsx('font-normal hover:text-gray-100  duration-300 text-3xl', item.id === pathname.slice(1) ? 'text-gray-100 font-bold' : 'text-gray-400 ')}
                            >
                                {item.title}
                            </Link>
                        </div>
                    )}
                    <IconClose
                        className={'absolute top-5 right-4 text-gray-400 hover:text-gray-100 duration-300 w-6 h-auto cursor-pointer lg:hidden'}
                        onClick={toggleMenuHandler}
                    />
                </nav>
                
                <IconMenu
                    className={'text-gray-400 hover:text-gray-100 duration-300 w-6 h-auto cursor-pointer lg:hidden'}
                    onClick={toggleMenuHandler}
                />
            
            </div>
        </header>
    );
};


export default Header;