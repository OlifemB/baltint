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
                text: '119048, г. Москва, ул. Усачёва, д. 33, стр. 2'
            }, {
                title: 'Телефон:',
                text: '8 (999) - 99 - 99'
            }, {
                title: 'Email:',
                text: 'main@mail.com'
            }]
        }
    }
}