'use client'

import React from 'react';
import Image from "next/image";
import {data, IAboutPageData} from "./data";
import {useAppSelector} from "@/redux/store";


const AboutPage = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IAboutPageData]

    return (
        <>
            <section className={'flex flex-1'}>
                <div className={'flex flex-col md:flex-row container mx-auto px-4 lg:px-0 gap-8 py-16 lg:py-32'}>
                    <div className={'flex flex-col flex-1 items-center justify-center relative'}>
                        <Image
                            className={'w-full h-auto scale-125'}
                            src={pageData.sections[0].img.src}
                            alt={pageData.sections[0].img.alt}
                        />
                    </div>

                    <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                        <div className={'flex flex-col justify-start items-start gap-4 max-w-xl'}>
                            <h1 className={'text-6xl font-bold'}>
                                {pageData.sections[0].title}
                            </h1>
                            <div className={'flex flex-col  gap-6'}>
                                {pageData.sections[0].list.map(item =>
                                    <p className={'text-lg'}>
                                        {item.text}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className={'flex flex-1'}>
                <div className={'flex flex-col md:flex-row container mx-auto px-4 md:px-0 lg:pb-32 lg:pt-12 gap-4'}>
                    <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                        <div className={'flex flex-col justify-start items-start gap-4 max-w-xl'}>
                            <div className={'flex flex-col  gap-6'}>
                                {pageData.sections[1].list.map(item =>
                                    <p className={'text-lg'}>
                                        {item.text}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={'flex flex-col flex-1 items-center justify-center relative'}>
                        <Image
                            className={'w-full h-auto scale-125'}
                            src={pageData.sections[1].img.src}
                            alt={pageData.sections[1].img.alt}
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
                <div className={'flex flex-col items-center justify-center container mx-auto gap-8 pt-10 pb-20 px-4'}>
                    <h2 className={'text-4xl font-bold'}>{pageData.sections[2].title}</h2>
                    <div className={'flex flex-col md:flex-row  justify-between gap-8'}>
                        {pageData.sections[2].cards.map((card, index) =>
                            <div
                                key={card.title + card.text + index}
                                className={'flex flex-col items-center justify-center gap-2 p-8 bg-gray-100 rounded-md w-80'}
                            >
                                <div>
                                    <Image src={card.icon} alt={''} className={'w-20 h-20'}/>
                                </div>
                                <div className={'text-center'}>
                                    <p className={'text-lg font-bold'}>{card.title}</p>
                                </div>
                                <div className={'text-center'}>
                                    {card.text}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section>
                <div
                    className={'flex flex-col items-center justify-center container mx-auto gap-8 pt-10 pb-20 max-w-5xl'}>
                    <h2 className={'text-4xl font-bold'}>{pageData.sections[3].title}</h2>

                    <div className={'flex flex-col md:flex-row container mx-auto px-4 md:px-0 lg:pb-32 lg:pt-12 gap-4'}>
                        <div className={'flex flex-col flex-1 items-center justify-center relative'}>
                            <Image
                                className={'w-full h-auto scale-125'}
                                src={pageData.sections[3].img.src}
                                alt={pageData.sections[3].img.alt}
                            />
                        </div>

                        <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                            <div className={'flex flex-col justify-start items-start gap-4 max-w-xl'}>
                                <div className={'flex flex-col  gap-6'}>
                                    {pageData.sections[3].list.map(item =>
                                        <p className={'text-lg '}>
                                            {item.title}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;