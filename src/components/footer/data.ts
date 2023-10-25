import {consts} from "@/common/consts";


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
            text: consts.address.title,
            link: consts.address.value,
            
        }, {
            text: consts.phone.title,
            link: 'tel:' + consts.phone.value,
            
        }, {
            text: consts.email.title,
            link: 'mailto:' + consts.email.value,
            
        }],
        col2: [{
            text: 'Политика конфиденциальности',
        }, {
            text: 'Публичная оферта',
        }],
        copyright: `Baltic Integrational Group (c) ${new Date().getFullYear()}. Все права защищены.`
    }
}