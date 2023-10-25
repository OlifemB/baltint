"use client";

import {useAppSelector} from "@/redux/store";
import {data, IHomePageData} from "./data";
import Image from "next/image";
import {useRouter} from 'next/navigation'
import React from "react";
import Link from "next/link";


function Home() {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IHomePageData]
    const router = useRouter()
    
    
    return (
        <main className={'flex flex-col flex-1 gap-24 md:gap-32 py-10 md:py-40'}>
            <section className={'flex flex-col flex-1 items-center justify-center'}>
                <div className={'flex flex-1 py-4'}>
                    <div
                        className={'flex flex-col md:flex-row container mx-auto px-4 md:px-0 py-16 lg:px-0 gap-8'}>
                        <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                            <div className={'flex flex-col justify-start items-start max-w-xl gap-6'}>
                                
                                <h1 className={'text-5xl md:text-6xl font-extrabold tracking-wide'}>
                                    {pageData.sections[0].title.split(' ').map(item =>
                                        <span className={'block'}>{item}</span>
                                    )}
                                </h1>
                                
                                <p className={'text-lg'}>
                                    {pageData.sections[0].text}
                                </p>
                            </div>
                            
                            <div className={'flex flex-row gap-4 items-center justify-start w-full'}>
                                <Link
                                    className={'btn btn-primary'}
                                    href={pageData.sections[0].btn1.link}
                                >
                                    {pageData.sections[0].btn1.title}
                                </Link>
                                
                                <Link
                                    className={'btn btn-outline'}
                                    href={pageData.sections[0].btn2.link}
                                >
                                    {pageData.sections[0].btn2.title}
                                </Link>
                            </div>
                        </div>
                        
                        <div className={'flex flex-col flex-1 items-center justify-center'}>
                            <Image
                                className={'w-full h-auto scale-125'}
                                src={pageData.sections[0].img.src}
                                alt={pageData.sections[0].img.alt}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;