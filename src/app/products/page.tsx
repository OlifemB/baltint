'use client'

import React from 'react';
import {data, IProductsPageData} from './data'
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import {useAppSelector} from "@/redux/store";

const ProductsPage = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = data[lang as keyof IProductsPageData]

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
                            priority={true}
                            className={'w-full h-auto scale-125'}
                            src={pageData.sections[0].img.src}
                            alt={pageData.sections[0].img.alt}
                        />
                    </div>
                </div>
            </section>

            <section className={'bg-white'}>
                <div className={'flex flex-col items-center justify-center gap-10 container mx-auto py-20'}>
                    <h2 className={'text-4xl font-bold'}>{pageData.sections[1].title}</h2>
                    <p className={'max-w-4xl text-center'}>{pageData.sections[1].text}</p>
                    <div className={'flex flex-row flex-1 gap-4'}>
                        <button className={'btn btn-primary'}>
                            {pageData.sections[1].btn1.title}
                        </button>
                        <button className={'btn btn-outline'}>
                            {pageData.sections[1].btn2.title}
                        </button>
                    </div>
                    {/*<ImageGallery items={[]} />*/}
                </div>

                <div className={'flex flex-col items-start justify-start gap-0 container mx-auto py-10'}>
                    <h2 className={'text-1xl font-bold'}>
                        {pageData.sections[2].title}
                    </h2>
                    <ul>
                        {pageData.sections[2].list.map(item => <li>{item.title}</li>)}
                    </ul>
                </div>

                <div className={'flex flex-col items-start justify-start gap-0 container mx-auto py-10'}>
                    <h2 className={'text-1xl font-bold'}>
                        Служба технической поддержки:
                    </h2>
                    <ul>
                        <li>Время работы службы технической поддержки: Понедельник – пятница с 09.00 – 17.30</li>
                        <li>Почтовый адрес для направления запросов: 191028, Санкт-Петербург, пр-кт Литейный, д. 26,
                            литера А
                        </li>
                        <li>Телефон:</li>
                        <li>Email:</li>
                        <li>Служба технической поддержки поможет в обновлении продукта, помогут устранить сбои при
                            использовании Продукта
                        </li>


                    </ul>
                </div>

                <div className={'flex flex-col items-start justify-start gap-0 container mx-auto py-10'}>
                    <h2 className={'text-1xl font-bold'}>
                        Стоимость продукта рассчитывается индивидуально (Связаться с нами/активная ссылка)
                    </h2>
                    <p>Цена на продукт определяется в зависимости от рабочих мест (пользователей) которым необходимо
                        обеспечить доступ. Также индивидуально делается предложение исходя из оборота компании.</p>

                    <p>Продукт не возможно использовать безвозмездно.</p>
                    <p>родукт продается свободно на территории Российской Федерации.</p>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;