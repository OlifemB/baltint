'use client'

import React from 'react';
import {data, IProductsPageData} from './data'
import Image from "next/image";
import {useAppSelector} from "@/redux/store";
import IconTech from '@/assets/icons/pack1/icon-tech.svg'
import IconLocation from '@/assets/icons/pack1/icon-location.svg'
import IconGrow from '@/assets/icons/pack1/icon-grow.svg'


const ProductsPage = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IProductsPageData]
    
    return (
        <main className={'flex flex-col flex-1 gap-24 md:gap-32 py-32 md:py-40'}>
            <section className={'flex flex-1'}>
                <div className={'flex flex-col md:flex-row container mx-auto px-4 lg:px-0 gap-8 py-4 md:py-16'}>
                    <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                        <div className={'flex flex-col justify-start items-start gap-6 max-w-xl'}>
                            <h1 className={'text-6xl font-bold color-primary'}>
                                {pageData.sections[0].title}
                            </h1>
                            
                            <p className={'text-lg'}>
                                {pageData.sections[0].text}
                            </p>
                        </div>
                        
                        <div className={'flex flex-row gap-4 items-center justify-start w-full'}>
                        </div>
                    </div>
                    
                    <div className={'flex flex-col flex-1 items-center justify-center'}>
                        <Image
                            className={'w-full h-auto'}
                            src={pageData.sections[0].img.src}
                            alt={pageData.sections[0].img.alt}
                        />
                    </div>
                </div>
            </section>
            
            <section>
                <div className={'px-4 md:mp-0'}>
                    <div className={'bg-white rounded-2xl shadow-xl container mx-auto divide-y'}>
                        <div className={'flex flex-col items-center justify-center gap-10 mx-auto py-20 md:py-32 px-4'}>
                            <h2 className={'text-4xl font-bold color-primary'}>
                                {pageData.sections[1].title.toUpperCase()}
                                </h2>
                            <p className={'max-w-2xl text-center text-xl'}>{pageData.sections[1].text}</p>
                            <div className={'flex flex-col lg:flex-row flex-1 gap-4'}>
                                <button className={'btn btn-primary'}>
                                    {pageData.sections[1].btn1.title}
                                </button>
                                <button className={'btn btn-outline'}>
                                    {pageData.sections[1].btn2.title}
                                </button>
                            </div>
                            {/*<ImageGallery items={[]} />*/}
                        </div>
                        
                        
                        <div className={'py-10 md:py-20'}>
                            <div className={'flex flex-col lg:flex-row items-start justify-start mx-auto py-10 max-w-4xl px-6 md:px-8'}>
                                <div className={'flex flex-col lg:flex-row items-center justify-center gap-20'}>
                                    <div className={'flex flex-col items-center justify-center'}>
                                        <IconTech className={'w-72'}/>
                                    </div>
                                    
                                    <div className={'flex flex-col gap-4'}>
                                        <h2 className={'text-2xl font-bold color-primary'}>
                                            {pageData.sections[2].list[0].title}
                                        </h2>
                                        
                                        <div className={'flex flex-col gap-3'}>
                                            {pageData.sections[2].list[0].list.map((item, index) =>
                                                <p className={'text-lg'}
                                                   key={`productsPageList1-${index}`}> - {item.title}</p>
                                            )}
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
    
    
                            <div className={'flex flex-col lg:flex-row items-start justify-start mx-auto py-10 max-w-4xl px-6 md:px-8'}>
                                <div className={'flex flex-col lg:flex-row items-center justify-center gap-20'}>
                                    <div className={'flex flex-col items-center justify-center'}>
                                        <IconLocation className={'w-72'}/>
                                    </div>
                                    
                                    <div className={'flex flex-col gap-4'}>
                                        <h2 className={'text-2xl font-bold color-primary'}>
                                            {pageData.sections[2].list[1].title}
                                        </h2>
                                        
                                        
                                        <div className={'flex flex-col'}>
                                            {pageData.sections[2].list[1].list.map((item, index) =>
                                                <div className={'text-lg whitespace-pre-wrap my-3'}
                                                     key={`productsPageList2-${index}`}>
                                                    {item.title &&
                                                        <span className={'font-semibold color-primary'}>{item.title}</span>}
                                                    <span className={'whitespace-normal'}>{item.text}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className={'flex flex-col lg:flex-row items-start justify-start mx-auto py-10 max-w-4xl px-6 md:px-8'}>
                                <div className={'flex flex-col lg:flex-row items-center justify-center gap-20 '}>
                                    <div className={'flex flex-col items-center justify-center'}>
                                        <IconGrow className={'w-72'}/>
                                    </div>
                                    
                                    <div className={'flex flex-col gap-4'}>
                                        <h2 className={'text-2xl font-bold color-primary'}>
                                            {pageData.sections[2].list[2].title}
                                        </h2>
                                        
                                        
                                        <div className={'flex flex-col gap-4'}>
                                            {pageData.sections[2].list[2].list.map((item, index) =>
                                                <p className={'text-lg'} key={`productsPageList1-${index}`}>
                                                    <span className={'block'}>{item.text}</span>
                                                </p>
                                            )}
                                        </div>
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

export default ProductsPage;