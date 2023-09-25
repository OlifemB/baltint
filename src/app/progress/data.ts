// import img from '@/assets/images/bg1/3.png'
import img from '@/assets/images/bg2/3.png'
import {StaticImageData} from "next/image";


export interface IProgressPageData {
    ru: {
        sections: [{
            img: {
                src: StaticImageData;
                alt: string
            };
            text: string;
            title: string
        }, {
            cards:
                {
                    icon: string;
                    text: string;
                    title: string
                }[]
        }, {
            rows: {
                title: string,
                text: string,
                cards: {
                    icon: string;
                    text: string;
                    title: string
                }[]
            }[]
        }]
    }
}

export const data: IProgressPageData = {
    ru: {
        sections: [{
            title: 'Устойчивое развитие',
            text: 'Стремление к высокому качеству выполнения работи своевременная трансформация бизнес-процессов позволяют нам быть надежным партнером, а следование принципам устойчивого развития позволяет вносить вклад в поддержание общемировых ценностей.',
            img: {
                src: img,
                alt: 'headerImg'
            }
        }, {
            cards: [{
                icon: 'icon',
                title: 'Технологии',
                text: 'Технологическое совершенство'
            }, {
                icon: 'icon',
                title: 'Инжиниринг',
                text: 'Управление изменениями'
            }, {
                icon: 'icon',
                title: 'Системность',
                text: 'Комплексные решения'
            },]
        }, {
            rows: [{
                title: 'Социальная сфера',
                text: 'Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.',
                cards: [{
                    icon: 'icon',
                    title: 'Технологии',
                    text: 'Технологическое совершенство'
                }, {
                    icon: 'icon',
                    title: 'Инжиниринг',
                    text: 'Управление изменениями'
                }, {
                    icon: 'icon',
                    title: 'Системность',
                    text: 'Комплексные решения'
                },]
            }, {
                title: 'Экология',
                text: 'Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.',
                cards: [{
                    icon: 'icon',
                    title: 'Технологии',
                    text: 'Технологическое совершенство'
                }, {
                    icon: 'icon',
                    title: 'Инжиниринг',
                    text: 'Управление изменениями'
                }, {
                    icon: 'icon',
                    title: 'Системность',
                    text: 'Комплексные решения'
                },]
            }, {
                title: 'Образование и наука',
                text: 'Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.',
                cards: [{
                    icon: 'icon',
                    title: 'Технологии',
                    text: 'Технологическое совершенство'
                }, {
                    icon: 'icon',
                    title: 'Инжиниринг',
                    text: 'Управление изменениями'
                }, {
                    icon: 'icon',
                    title: 'Системность',
                    text: 'Комплексные решения'
                },]
            },
            ]
        }]
    }
}