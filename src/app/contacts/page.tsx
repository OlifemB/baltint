'use client'

import React from 'react';
import {data, IContactsPageData} from './data'
import Image from "next/image";
import {useAppSelector} from "@/redux/store";

const ContactsPage = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IContactsPageData]

    return (
        <main className={'flex flex-col flex-1 flex-14 gap-24 md:gap-32 py-20 md:py-40'}>
            <section className={'flex flex-col flex-1 items-center justify-center'}>
                <div className={'flex flex-col md:flex-row container mx-auto px-4 md:px-0 gap-8'}>
                    <div className={'flex flex-col flex-1 justify-center items-start gap-8'}>
                        <h1 className={'text-6xl font-bold color-primary color-primary'}>
                            {pageData.header.title}
                        </h1>
        
                        <div className={'flex flex-col gap-4'}>
                            {pageData.header.rows.map((row, index) =>
                                <div
                                    className={'flex flex-col'}
                                    key={row.text + row.title + index}
                                >
                                    <span className={'font-bold text-xl color-primary'}>{row.title}</span>
                                    <a className={'text-xl  transition ease-in-out'} href={row.link}>{row.text}</a>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    
                    <div className={'flex flex-col flex-1 items-start justify-center gap-2'}>
                        <Image
                            className={''}
                            src={pageData.header.img.src}
                            alt={pageData.header.img.alt}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactsPage;