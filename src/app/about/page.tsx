'use client'

import React from 'react';
import Image from "next/image";
import {data, IAboutPageData} from "./data";
import {useAppSelector} from "@/redux/store";


const AboutPage = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IAboutPageData]
    
    return (
        <main className={'flex flex-col flex-1 gap-24 md:gap-32 py-32 md:py-60'}>
            <section>
                <div className={'flex flex-col container mx-auto gap-8 px-4'}>
                    
                    <h1 className={'text-6xl font-bold color-primary'}>
                        {pageData.sections[0].title}
                    </h1>
                    
                    <div className={'flex flex-col md:flex-row gap-8'}>
                        <div className={'flex flex-col gap-6 flex-1'}>
                            {pageData.sections[0].list.map((item, index) =>
                                <p className={'text-lg'} key={`aboutPageList1-${index}`}>
                                    {item.text}
                                </p>
                            )}
                        </div>
                        
                        <div className={'flex flex-col gap-6 flex-1'}>
                            {pageData.sections[1].list.map((item, index) =>
                                <p className={'text-lg'} key={`aboutPageList2-${index}`}>
                                    {item.text}
                                </p>
                            )}
                        </div>
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
            
            
            <section>
                <div className={'px-4'}>
                    <div
                        className={'flex flex-col items-center justify-center container mx-auto gap-16 pt-20 pb-12 px-4 bg-white rounded-2xl shadow-md'}>
                        <h2 className={'text-4xl font-bold color-primary'}>
                            {pageData.sections[2].title}
                        </h2>
                        
                        <div className={'flex flex-col md:flex-row justify-between gap-8'}>
                            {pageData.sections[2].cards.map((card, index) =>
                                <div
                                    key={card.title + card.text + index}
                                    className={'flex flex-col items-center justify-start gap-2 p-8 w-80'}
                                >
                                    <div>
                                        <Image src={card.icon} alt={''} className={'w-20 h-20'}/>
                                    </div>
                                    <div className={'text-center'}>
                                        <p className={'text-lg'}>{card.title}</p>
                                    </div>
                                    <div className={'text-center'}>
                                        {card.text}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className={'px-4'}>
                    <div className={'flex flex-col items-center justify-center mx-auto gap-8 container'}>
                        <div className={'flex flex-col md:flex-row gap-4'}>
                            <div className={'flex flex-col flex-1 items-center justify-center relative'}>
                                <Image
                                    className={'w-full h-auto scale-125'}
                                    src={pageData.sections[3].img.src}
                                    alt={pageData.sections[3].img.alt}
                                />
                            </div>
                            
                            <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                                <div className={'flex flex-col justify-start items-start gap-4 max-w-xl'}>
                                    <h2 className={'text-4xl font-bold color-primary'}>
                                        {pageData.sections[3].title}
                                        </h2>
                                    <div className={'flex flex-col  gap-6'}>
                                        {pageData.sections[3].list.map((item, index) =>
                                            <p className={'text-lg '} key={`aboutPageList3-${index}`}>
                                                {item.title}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;