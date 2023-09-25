'use client'

import React from 'react';
import Image from "next/image";
import {data, IAboutPageData} from "./data";
import {useAppSelector} from "@/redux/store";


const AboutPage = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IAboutPageData]
    
    console.log(pageData.sections[2].cards[0].icon)
    return (
        <>
            <section className={'flex flex-1'}>
                <div className={'flex flex-col md:flex-row container mx-auto px-4 md:px-0 py-20'}>
                    <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                        <div className={'flex flex-col justify-start items-start gap-6 max-w-xl'}>
                            <h1 className={'text-6xl font-bold'}>
                                {pageData.sections[0].title}
                            </h1>
                            <p>
                                {pageData.sections[0].text}
                            </p>
                        </div>
                    </div>
                    
                    <div className={'flex flex-col flex-1 items-center justify-center relative'}>
                        <Image
                            priority={true}
                            className={'w-full h-auto scale-125'}
                            src={pageData.sections[0].img.src}
                            alt={pageData.sections[0].img.alt}
                        />
                    </div>
                </div>
            </section>
            
            {/*<section className={'bg-white'}>*/}
            {/*    <div className={'flex flex-col items-center justify-center container mx-auto gap-8 pt-20 pb-10'}>*/}
            {/*        <h3 className={'text-xl text-center font-bold max-w-6xl'}>*/}
            {/*            {pageData.sections[1].title}*/}
            {/*        </h3>*/}
            {/*        <p className={'text-center max-w-6xl'}>*/}
            {/*            {pageData.sections[1].text}*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</section>*/}
            
            <section className={'bg-white'}>
                <div className={'flex flex-col items-center justify-center container mx-auto gap-8 pt-10 pb-20'}>
                    <h2 className={'text-4xl font-bold'}>{pageData.sections[2].title}</h2>
                    <div className={'flex flex-row  justify-between gap-8'}>
                        {pageData.sections[2].cards.map((card, index) =>
                            <div
                                key={card.title + card.text + index}
                                className={'flex flex-col items-center justify-center gap-2 p-8 bg-gray-100 rounded-md w-80'}
                            >
                                <div>
                                    <Image src={card.icon} alt={''} className={'w-20 h-20'}/>
                                </div>
                                <div className={'font-bold'}>
                                    {card.title}
                                </div>
                                <div>
                                    {card.text}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;