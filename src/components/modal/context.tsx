import React from "react";
import Modal from "./modal";
import {useModal} from "@/components/modal/useModal";

let ModalContext;
const {Provider} = (ModalContext = React.createContext({}));


const ModalProvider = ({children}) => {
    const {modal, handleModal, modalContent} = useModal();

    return (
        <Provider value={{modal, handleModal, modalContent}}>
            <Modal/>
            {children}
        </Provider>
    );
};

export {ModalContext, ModalProvider};