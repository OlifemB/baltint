export interface IFooterData {
    ru: {
        copyright: string;
        col2: {
            text: string
        }[]
        col1: {
            text: string
            link: string
        } []
    }
}

export const data: IFooterData = {
    ru: {
        col1: [{
            text: '191028, Санкт-Петербург, пр-кт Литейный, д. 26, литера А',
            link: 'https://yandex.ru/maps/2/saint-petersburg/?ll=30.350018%2C59.941647&mode=whatshere&whatshere%5Bpoint%5D=30.349394%2C59.941909&whatshere%5Bzoom%5D=17.89&z=17.89'

        }, {
            text: '+7 (812) 770-71-27',
            link: 'tel:88127707127',

        }, {
            text: 'info@baltint.group',
            link: 'mailto:info@baltint.group',

        }],
        col2: [{
            text: 'Политика конфиденциальности',
        }, {
            text: 'Публичная оферта',
        }],
        copyright: 'Baltic International Group @ 2023. Все права защищены.'
    }
}