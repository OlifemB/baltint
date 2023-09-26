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
            text: '191028, Санкт-Петербург, пр-кт Литейный, д. 26, литера А',
        }, {
            text: '8 (999) - 99 - 99',
        }, {
            text: 'info@baltint.group'
        }],
        col2: [{
            text: 'Политика конфиденциальности',
        }, {
            text: 'Публичная оферта',
        }],
        copyright: 'Baltic International Group @ 2023. Все права защищены.'
    }
}