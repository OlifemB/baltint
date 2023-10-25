import img from '@/assets/images/bg2/1.png'
import {StaticImageData} from "next/image";
import {consts} from "@/common/consts";

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
            img: {
                src: img,
                alt: 'Baltic Integrational Group'
            },
            title: 'Baltic Integrational Group',
            text: 'Мы – IT компания, которая проектирует, разрабатывает и внедряет современные информационные системы, продукты, платформы для крупных строительных и сервисных компаний.',
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