"use client";

import {useAppSelector} from "@/redux/store";
import {data, IHomePageData} from "./data";
import Image from "next/image";
import {useRouter} from 'next/navigation'
import React from "react";


function Home() {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IHomePageData]
    const router = useRouter()
    
    
    return (
        <section className={'flex flex-1 py-4 lg:py-0'}>
            <div className={'flex flex-col md:flex-row container mx-auto px-4 md:px-0 py-16 lg:py-52 gap-12 lg:gap-0'}>
                <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                    <div className={'flex flex-col justify-start items-start gap-6 max-w-xl'}>
                        <h1 className={'text-6xl font-bold'}>
                            {pageData.sections[0].title}
                        </h1>

                        <p className={'text-lg'}>
                            {pageData.sections[0].text}
                        </p>
                    </div>
                    
                    <div className={'flex flex-row gap-4 items-center justify-start w-full'}>
                        <button
                            className={'btn btn-primary'}
                            onClick={() => router.push(pageData.sections[0].btn1.link)}
                        >
                            {pageData.sections[0].btn1.title}
                        </button>
                        
                        <button
                            className={'btn btn-outline'}
                            onClick={() => router.push(pageData.sections[0].btn2.link)}
                        >
                            {pageData.sections[0].btn2.title}
                        </button>
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
        </section>
    );
}

export default Home;