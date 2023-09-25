export interface IHeaderData {
    ru: {
        nav: {
            id: string
            link: string
            title: string
        }[]
        logo: string
    }
}

export const data: IHeaderData = {
    ru: {
        nav: [{
            id:'about',
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
            id: 'contacts',
            title: 'Контакты',
            link: '/contacts'
        }],
        logo: 'Baltic Integration Group'
    }
}