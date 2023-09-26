// import img from '@/assets/images/bg1/2.png'
import img from '@/assets/images/bg2/2.png'
import {StaticImageData} from "next/image";

export interface IProductsPageData {
    ru: {
        sections: [{
            img: {
                src: StaticImageData
                alt: string
            }
            text: string
            title: string
        }, {
            btn2: {
                link: string
                title: string
            };
            text: string
            btn1: {
                link: string
                title: string
            };
            title: string
            gallery: {
                src: string
                alt: string
                title: string
            }[]
        }, {
            title: string,
            list: {
                title: string
            }[]
        }, {
            documents: {
                img: {
                    src: string
                    alt: string
                }
                link: string
                text: string
                title: string
            }[]
            title: string
        }];
    }
}

export const data: IProductsPageData = {
    ru: {
        sections: [{
            title: 'Наши продукты',
            text: 'Стремление к высокому качеству выполнения работы своевременная трансформация бизнес-процессов позволяют нам быть надежным партнером, а следование принципам устойчивого развития позволяет вносить вклад в поддержание общемировых ценностей.',
            img: {
                src: img,
                alt: 'Наши продукты'
            }
        }, {
            title: 'Big Data Bridge',
            text: 'BIG DATA BRIDGE представляет собой SaaS-сервис, поэтому распространяется в виде интернет-решения и не требует установки.',
            btn1: {
                title: 'Рассчёт стоимости для Вас',
                link: ''
            },
            btn2: {
                title: 'Связатся с техподдержкой',
                link: ''
            },
            gallery: [{
                src: '',
                alt: '',
                title: '',
            }, {
                src: '',
                alt: '',
                title: '',
            }, {
                src: '',
                alt: '',
                title: '',
            },]
        }, {
            title: 'Библиотеки, скрипты, технологический стек, которые использовали при создании программы:',
            list: [
                {title: 'React JS'},
                {title: 'MobX, MobX-State-Tree '},
                {title: 'WebSocket'},
                {title: 'Node JS'},
                {title: 'Express'},
                {title: 'PostgreSQL JSON'},
            ]
        }, {
            title: 'Документы',
            documents: [{
                title: 'Документ 1',
                text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
                link: '',
                img: {
                    src: '',
                    alt: ''
                }
            }, {
                title: 'Документ 2',
                text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
                link: '',
                img: {
                    src: '',
                    alt: ''
                }
            }, {
                title: 'Документ 3',
                text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
                link: '',
                img: {
                    src: '',
                    alt: ''
                }
            }, {
                title: 'Документ 4',
                text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
                link: '',
                img: {
                    src: '',
                    alt: ''
                }
            }, {
                title: 'Документ 5',
                text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
                link: '',
                img: {
                    src: '',
                    alt: ''
                }
            }, {
                title: 'Документ 6',
                text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
                link: '',
                img: {
                    src: '',
                    alt: ''
                }
            }]
        }]
    }
}