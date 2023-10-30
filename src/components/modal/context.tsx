import React from "react";
import Modal from "./modal";
import {useModal} from "@/components/modal/useModal";
import {ReactNode} from "@/common/types";

let ModalContext;
const {Provider} = (ModalContext = React.createContext({}));

interface IModal {
    children: ReactNode
}

const ModalProvider:React.FC<IModal> = ({children}) => {
    const {modal, handleModal, modalContent} = useModal();
    return (
        <Provider value={{modal, handleModal, modalContent}}>
            <Modal/>
            {children}
        </Provider>
    );
};

export {ModalContext, ModalProvider};