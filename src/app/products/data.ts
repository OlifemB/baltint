// import img from '@/assets/images/bg1/2.png'
import img from '@/assets/images/bg2/2.png'
import IconTech from '@/assets/icons/pack1/icon-tech.svg'
import IconLocation from '@/assets/icons/pack1/icon-location.svg'
import IconGrow from '@/assets/icons/pack1/icon-grow.svg'
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
            list: {
                img: {
                    src: StaticImageData,
                    alt: string
                }
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
            list: [{
                img: {
                    src: IconTech,
                    alt: 'asd'
                },
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
                img: {
                    src: IconLocation,
                    alt: 'Location'
                },
                title: 'Служба технической поддержки:',
                list: [{
                    title: 'Время работы службы технической поддержки:',
                    text: 'Понедельник – пятница с 09.00 – 17.30',
                }, {
                    title: 'Почтовый адрес для направления запросов:',
                    text: '191028, Санкт-Петербург, пр-кт Литейный, д. 26, литера А',
                }, {
                    title: 'Телефон:',
                    text: '',
                }, {
                    title: 'Email:',
                    text: '',
                }, {
                    title: '',
                    text: 'Служба технической поддержки поможет в обновлении продукта, помогут устранить сбои при использовании Продукта',
                },]
            }, {
                img: {
                    src: IconGrow,
                    alt: 'grow'
                },
                title: 'Служба технической поддержки:',
                list: [{
                    title: 'Время работы службы технической поддержки:',
                    text: 'Понедельник – пятница с 09.00 – 17.30',
                }, {
                    title: 'Почтовый адрес для направления запросов:',
                    text: '191028, Санкт-Петербург, пр-кт Литейный, д. 26, литера А',
                }, {
                    title: 'Телефон:',
                    text: '',
                }, {
                    title: 'Email:',
                    text: '',
                }, {
                    title: '',
                    text: 'Служба технической поддержки поможет в обновлении продукта, помогут устранить сбои при использовании Продукта',
                },]
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