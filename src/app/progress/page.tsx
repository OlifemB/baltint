'use client'

import React from 'react';
import {data, IProgressPageData} from "./data";
import Image from "next/image";
import {useAppSelector} from "@/redux/store";

const ProgressPage = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IProgressPageData]

    return (
        <>
            <section className={'flex flex-1'}>
                <div className={'flex flex-col md:flex-row container mx-auto px-4 md:px-0 py-40'}>
                    <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                        <div className={'flex flex-col justify-start items-start gap-6 max-w-xl'}>
                            <h1 className={'text-6xl font-bold'}>
                                {pageData.sections[0].title}
                            </h1>

                            <p>
                                {pageData.sections[0].text}
                            </p>
                        </div>

                        <div className={'flex flex-row gap-4 items-center justify-start w-full'}>
                        </div>
                    </div>

                    <div className={'flex flex-col flex-1 items-center justify-center relative'}>
                        <Image
                            className={'w-full h-auto scale-125'}
                            src={pageData.sections[0].img.src}
                            alt={pageData.sections[0].img.alt}
                        />
                    </div>
                </div>
            </section>

            <section className={'bg-white'}>
                <div className={'flex flex-col items-center justify-center container mx-auto gap-8 my-20'}>
                    <div className={'flex flex-col lg:flex-row  justify-between gap-8'}>
                        {pageData.sections[1].cards.map((card, index) =>
                            <div
                                key={card.title + card.text + index}
                                className={'flex flex-col items-center justify-center gap-2 p-8 bg-gray-100 rounded-md w-80'}
                            >
                                <div>
                                    {card.icon}
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

            <section className={'bg-white'}>
                <div className={'flex flex-col container mx-auto my-20 mt-0'}>
                    {pageData.sections[2].rows.map((row, index) =>
                        <div
                            key={row.title + row.text + index}
                            className={'flex flex-col lg:flex-row items-center justify-center my-10'}
                        >
                            <div className={'flex flex-col flex-1 gap-4'}>
                                <div className={'font-bold text-2xl text-center lg:text-left'}>
                                    {row.title}
                                </div>
                                <div>
                                    {row.text}
                                </div>
                            </div>

                            <div className={'flex flex-col lg:flex-row flex-1 justify-between items-center'}>
                                {row.cards.map((card, index) =>
                                    <div
                                        key={card.title + card.text + index}
                                        className={'flex flex-col items-center justify-center text-center gap-2 w-72'}
                                    >
                                        <div>
                                            {card.icon}
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
                    )}
                </div>
            </section>
        </>
    );
};

export default ProgressPage;