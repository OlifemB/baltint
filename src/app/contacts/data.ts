// import img from '@/assets/images/bg1/4.png'
import img from '@/assets/images/bg2/4.png'
import {StaticImageData} from "next/image";

export interface IContactsPageData {
    ru: {
        header: {
            img: {
                src: StaticImageData
                alt: string
            };
            title: string
            rows: {
                text: string
                title: string
            } []
        }
    }
}

export const data: IContactsPageData = {
    ru: {
        header: {
            img: {
                src: img,
                alt: 'qwe'
            },
            title: 'Контакты',
            rows: [{
                title: 'Адрес:',
                text: '191028, Санкт-Петербург, пр-кт Литейный, д. 26, литера А'
            }, {
                title: 'Телефон:',
                text: '+7 (812) 770-71-27'
            }, {
                title: 'Email:',
                text: 'info@baltint.group'
            }]
        }
    }
}