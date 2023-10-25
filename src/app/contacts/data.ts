// import img from '@/assets/images/bg1/4.png'
import img from '@/assets/images/bg2/4.png'
import {StaticImageData} from "next/image";
import {consts} from "@/common/consts";


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
                link: string
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
                text: consts.address.title,
                link: consts.address.value,
            }, {
                title: 'Телефон:',
                text: consts.phone.title,
                link: 'tel:' + consts.phone.value,
            }, {
                title: 'Email:',
                text: consts.email.title,
                link: 'mailto:' + consts.email.value,
                
            }]
        }
    }
}