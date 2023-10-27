'use client'

import React from 'react';
import {data, IProductsPageData} from './data'
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import {useAppSelector} from "@/redux/store";
import IconTech from '@/assets/icons/pack1/icon-tech.svg'
import IconLocation from '@/assets/icons/pack1/icon-location.svg'
import IconGrow from '@/assets/icons/pack1/icon-grow.svg'


const ProductsPage = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IProductsPageData]
    
    return (
        <>
            <section className={'flex flex-1'}>
                <div className={'flex flex-col md:flex-row container mx-auto px-4 lg:px-0 gap-8 py-16 lg:py-32'}>
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
            
            <section className={'mb-40 bt-20'}>
                <div className={'bg-white rounded-2xl shadow-sm container mx-auto divide-y'}>
                    <div className={'flex flex-col items-center justify-center gap-10 container mx-auto py-32 px-8 '}>
                        <h2 className={'text-4xl font-bold'}>{pageData.sections[1].title.toUpperCase()}</h2>
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
                    
                    
                    <div className={'flex flex-col py-20'}>
                        <div
                            className={'flex flex-col lg:flex-row items-start justify-start container mx-auto py-10 max-w-4xl px-8'}>
                            <div className={'flex flex-col lg:flex-row items-center justify-center gap-20'}>
                                <div className={'flex flex-col items-center justify-center'}>
                                    <IconTech className={'w-60'}/>
                                </div>
                                
                                <div className={'flex flex-col gap-4'}>
                                    <h2 className={'text-2xl font-bold'}>
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
                        
                        
                        <div
                            className={'flex flex-col items-start justify-start container mx-auto py-10 max-w-4xl px-8'}>
                            <div className={'flex flex-col lg:flex-row items-center justify-center gap-20'}>
                                <div className={'flex flex-col items-center justify-center'}>
                                    <IconLocation className={'w-60'}/>
                                </div>
                                
                                <div className={'flex flex-col gap-4'}>
                                    <h2 className={'text-2xl font-bold'}>
                                        {pageData.sections[2].list[1].title}
                                    </h2>
                                    
                                    
                                    <div className={'flex flex-col gap-3'}>
                                        {pageData.sections[2].list[1].list.map((item, index) =>
                                            <div className={'text-lg whitespace-pre'}
                                                 key={`productsPageList2-${index}`}>
                                                {item.title && <span className={'font-semibold'}>{item.title}</span>}
                                                <span className={'whitespace-normal'}>{item.text}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div
                            className={'flex flex-col items-start justify-start container mx-auto py-10 max-w-4xl px-8'}>
                            <div className={'flex flex-col lg:flex-row items-center justify-center gap-20 '}>
                                <div className={'flex flex-col items-center justify-center'}>
                                    <IconGrow className={'w-60'}/>
                                </div>
                                
                                <div className={'flex flex-col gap-4'}>
                                    <h2 className={'text-2xl font-bold'}>
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
            </section>
        </>
    );
};

export default ProductsPage;