// import img from '@/assets/images/bg1/1.png'
import img from '@/assets/images/bg2/1.png'
import {StaticImageData} from "next/image";

export interface IHomePageData {
    ru: {
        sections: [{
            img: {
                src: StaticImageData
                alt: string
            }
            btn2: {
                link: string
                title: string
            }
            text: string
            btn1: {
                link: string
                title: string
            }
            title: string
        }]
    }
}

export const data:IHomePageData = {
    ru: {
        sections: [{
            title: 'Baltic Integration Group',
            text: 'Мы – IT компания, готовим современные и гибкие решения для строительных и сервисных компаний.',
            img: {
                src: img,
                alt: 'Baltic Integration Group'
            },
            btn1: {
                title: 'Наши продукты',
                link: '/products'
            },
            btn2: {
                title: 'Связатся с нами',
                link: '/contacts'
            }
        }]
    }
}