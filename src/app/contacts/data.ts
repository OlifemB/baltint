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
                text: '191028, Санкт-Петербург, пр-кт Литейный, д. 26, литера А',
                link: 'https://yandex.ru/maps/2/saint-petersburg/?ll=30.350018%2C59.941647&mode=whatshere&whatshere%5Bpoint%5D=30.349394%2C59.941909&whatshere%5Bzoom%5D=17.89&z=17.89'
            }, {
                title: 'Телефон:',
                text: '+7 (812) 770-71-27',
                link: 'tel:88127707127',
            }, {
                title: 'Email:',
                text: 'info@baltint.group',
                link: 'mailto:info@baltint.group',
            }]
        }
    }
}