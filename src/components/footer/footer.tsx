'use client'

import React from 'react';
import {data, IFooterData} from './data'
import {useAppSelector} from "@/redux/store";


const Footer = () => {
    const {lang} = useAppSelector(store => store.appReducer)
    const componentData = data[lang as keyof IFooterData]

    return (
        <footer className={'bg-[#34364F]'}>
            <div className={'flex flex-col flex-1 container mx-auto px-4 md:px-0'}>
                <div className={'flex flex-1 flex-col md:flex-row flex-1 justify-between items-stretch py-8  gap-2 md:gap-8'}>
                    <div className={'flex flex-1 flex-col gap-2'}>
                        {componentData.col1.map((item, index) =>
                            <div
                                key={item.text+index}
                                className={'text-gray-300'}
                            >
                                <a href={item.link} className={'transition ease-in-out '}>{item.text}</a>
                            </div>
                        )}
                    </div>

                    <div className={'flex flex-1 flex-col gap-2 items-start md:items-end'}>
                        {componentData.col2.map((item, index) =>
                            <div
                                key={item.text + index}
                                className={'transition ease-in-out text-gray-300'}
                            >
                                {item.text}
                            </div>
                        )}
                    </div>
                </div>

                <div className={'flex flex-row items-center justify-center py-4 text-gray-300'}>
                    {componentData.copyright}
                </div>
            </div>
        </footer>
    )
}

export default Footer;