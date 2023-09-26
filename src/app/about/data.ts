// import img from '@/assets/images/bg1/5.png'
import img from '@/assets/images/bg2/5.png'
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
            img: {
                src: StaticImageData
                alt: string
            };
            title: string
            text: string
            text2: string
            btn2: string
            btn1: string
        }, {
            text: string;
            title: string
        }, {
            title: string
            cards: {
                icon: StaticImageData;
                text: string;
                title: string
            }[]
        }]
    }
}

export const data: IAboutPageData = {
    ru: {
        sections: [{
            title: 'О компании',
            text: 'Подход к каждому клиенту индивидуальный, а принимаемые решения прозрачны. Компания работает с российскими предприятиями. Мы используем широкий спектр современных технологий, учимся на предыдущем опыте и ищем перспективы для будущего развития.',
            text2:'Компания «БИГ» предоставляет услуги разработки, внедрения и сопровождения информационных, справочных, учетных систем. Кроме того, компания разрабатывает мобильные приложения для различных платформ и автоматизирует системы управления строительных и сервисных компаний.',
            img: {
                src: img,
                alt: 'headerImg'
            },
            btn1: 'Наши продукты',
            btn2: 'Связатся с нами',
        }, {
            title: 'Профессиональная команда, современное оборудование, технологии производства, отлаженная система управления технологическими процессами и следование принципам устойчивого развития, все это позволяет нам быть успешной компанией в своей отрасли.',
            text: 'Наши ценности, убеждения и опыт позволяют принимать лучшие решения в условиях неопределенности с чувством принадлежности к делу и ответственности за результат.'
        }, {
            title: 'Наши преимущества',
            cards: [{
                icon: IconTeam,
                title: 'Профессиональная команда',
                text: ''
            }, {
                icon: IconQuality,
                title: 'Контроль качества',
                text: ''
            }, {
                icon: IconTech,
                title: 'Современные технологии ',
                text: ''
            },]
        }]
    }
}