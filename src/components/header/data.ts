import Logo from '@/assets/vectors/logo.svg'


export interface IHeaderData {
    ru: {
        nav: {
            id: string
            link: string
            title: string
        }[]
        logo: SVGAElement
    }
}

export const data: IHeaderData = {
    ru: {
        nav: [{
            id: '/',
            link: '/',
            title: 'Главная'
        }, {
            id: 'about',
            title: 'О компании',
            link: '/about'
        },
        //     {
        //     id: 'progress',
        //     title: 'Устойчивое развитие',
        //     link: '/progress'
        // },
        {
            id: 'products',
            title: 'Продукты',
            link: '/products'
        }, {
            id: 'vacancies',
            title: 'Вакансии',
            link: '/vacancies'
        }, {
            id: 'contacts',
            title: 'Контакты',
            link: '/contacts'
        },],
        logo: Logo
    }
}