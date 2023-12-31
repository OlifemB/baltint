// import img from '@/assets/images/bg1/2.png'
import img from '@/assets/images/bg2/2.png'
import IconTech from '@/assets/icons/pack1/icon-tech.svg'
import IconLocation from '@/assets/icons/pack1/icon-location.svg'
import IconGrow from '@/assets/icons/pack1/icon-grow.svg'
import {StaticImageData} from "next/image";
import {consts} from "@/common/consts";

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
            list: {
                title: string,
                list: {
                    title?: string,
                    text?: string
                }[]
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
                title: 'Расчёт стоимости для Вас',
                link: ''
            },
            btn2: {
                title: 'Связатсья с техподдержкой',
                link: 'mailto:help@baltint.group'
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
            list: [{
                title: 'Основные компоненты технологического стека BIG DATA BRIDGE:',
                list: [
                    {title: 'React JS'},
                    {title: 'MobX'},
                    {title: 'WebSocket'},
                    {title: 'Node JS'},
                    {title: 'Express'},
                    {title: 'PostgreSQL'},
                ]
            }, {
                title: 'Служба технической поддержки:',
                list: [{
                    title: 'Время работы службы технической поддержки:\n',
                    text: 'Понедельник – пятница с 09.00 – 17.30',
                }, {
                    title: 'Почтовый адрес для направления запросов:\n',
                    text: consts.address.title+'.',
                }, {
                    title: 'Телефон:',
                    text: ` ${consts.phone.title}`,
                }, {
                    title: 'Email:',
                    text: ` help@baltint.group`,
                }, {
                    title: '',
                    text: 'Служба технической поддержки поможет в обновлении продукта, а так же устранить возможные сбои при использовании.',
                },]
            }, {
                title: 'Стоимость продукта рассчитывается индивидуально',
                list: [{
                    text: 'Цена на продукт определяется в зависимости от потребности и задач компании.',
                }, {
                    text: 'Продукт не возможно использовать безвозмездно.'
                }, {
                    text: 'Продукт продается свободно на территории Российской Федерации.',
                }]
            }]
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
