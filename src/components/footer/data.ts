export interface IFooterData {
    ru: {
        copyright: string;
        col2: {
            text: string
        }[]
        col1: {
            text: string
        } []
    }
}

export const data: IFooterData = {
    ru: {
        col1: [{
            text: '119048, г. Москва, ул. Усачёва, д. 33, стр. 2',
        }, {
            text: '8 (999) - 99 - 99',
        }, {
            text: 'main@mail.com'
        }],
        col2: [{
            text: 'Политика конфиденциальности',
        }, {
            text: 'Публичная оферта',
        }],
        copyright: 'Baltic Integrational Group @ 2023. Все права защищены.'
    }
}