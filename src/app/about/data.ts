// import img from '@/assets/images/bg1/5.png'
import img from '@/assets/images/bg2/5.png'
import img2 from '@/assets/images/bg2/7.png'
import img3 from '@/assets/images/bg2/10.png'
import {StaticImageData} from "next/image";

// import IconQuality from '@/assets/icons/Quality.svg'
// import IconTeam from '@/assets/icons/Team.svg'
// import IconTech from '@/assets/icons/Tech.svg'

import IconQuality from '@/assets/images/Quality.png'
import IconTeam from '@/assets/images/Team.png'
import IconTech from '@/assets/images/Tech.png'


export interface IAboutPageData {
    ru: {
        sections: [{
            title: string
            list: {
                text: string
            }[]
            img: {
                src: StaticImageData
                alt: string
            };
        }, {
            list: {
                text: string
            }[]
            img: {
                src: StaticImageData
                alt: string
            }
        }, {
            title: string
            cards: {
                icon: StaticImageData;
                text: string;
                title: string
            }[]
        }, {
            img: {
                src: StaticImageData
                alt: string
            }
            title: string
            list: {
                title: string
            }[]
        }]
    }
}

export const data: IAboutPageData = {
    ru: {
        sections: [{
            title: 'О компании',
            list: [{
                text: 'Компания BALTIC INTEGRATIONAL GROUP проектирует, разрабатывает и внедряет современные информационные системы и продукты. Они могут быть использованы заказчиками в качестве SAAS решений.'
            }, {
                text: 'Компания разрабатывает web и мобильные приложения для различных платформ и предоставляет инструменты для взаимодействия всех участников проекта, а также позволяет оперативно собирать данные с их последующим анализом для принятия управленческих решений руководителями строительных и сервисных компаний всех уровней.'
            }],
            img: {
                src: img,
                alt: 'headerImg'
            },
        }, {
            list: [{
                text: 'Архитектура программных продуктов нашей компании позволяет адаптировать продукты под потребности и деятельность российских предприятий из строительной отрасли.'
            }, {
                text: 'В разработке продуктов нашей компании принимают участие ведущие эксперты в строительной отрасли.'
            }, {
                text: 'Компания работает с российскими предприятиями. Мы используем широкий спектр современных технологий, учимся на предыдущем опыте и ищем перспективы для будущего развития.'
            }],
            img: {
                src: img2,
                alt: 'headerImg'
            },
        }, {
            title: 'Наши преимущества',
            cards: [{
                icon: IconTeam,
                title: 'Экспертность в строительной отрасли',
                text: ''
            }, {
                icon: IconQuality,
                title: 'Контроль качества',
                text: ''
            }, {
                icon: IconTech,
                title: 'Современные индивидуальные IT решения',
                text: ''
            },]
        }, {
            title: 'Наши цели',
            img: {
                src: img3,
                alt: ''
            },
            list: [{
                title: '1) Оставаться лидером в сфере разработки инновационных решений для сервисных и строительных компаний.'
            }, {
                title: '2) Быть компанией, которая основывается на профессионализме и непрерывном развитии сотрудников.'
            }, {
                title: '3) Помогать строительным и производственным компаниям в цифровой трансформации их бизнеса, решая нетривиальные задачи и сокращая время взаимодействия между участниками проекта.'
            }]
        }]
    }
}