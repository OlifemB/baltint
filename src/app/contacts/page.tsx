'use client'

import React from 'react';
import {data, IContactsPageData} from './data'
import Image from "next/image";
import {useAppSelector} from "@/redux/store";

const ContactsPage = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IContactsPageData]

    return (
        <>
            <section className={'flex flex-1'}>
                <div className={'flex flex-col md:flex-row container mx-auto px-4 md:px-0 py-40'}>
                    <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                        <Image
                            priority={true}
                            className={'w-full h-auto scale-125'}
                            src={pageData.header.img.src}
                            alt={pageData.header.img.alt}
                        />
                    </div>

                    <div className={'flex flex-col flex-1 justify-center items-start gap-8 pl-12'}>
                        <h1 className={'text-6xl font-bold'}>
                            {pageData.header.title}
                        </h1>

                        <div className={'flex flex-col gap-4'}>
                            {pageData.header.rows.map((row, index) =>
                                <div
                                    className={'flex flex-col'}
                                    key={row.text + row.title + index}
                                >
                                    <span className={'font-bold text-xl'}>{row.title}</span>
                                    <span className={' text-xl'}>{row.text}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactsPage;