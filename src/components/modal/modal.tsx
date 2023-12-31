"use client";

import Link from "next/link";
import React, {MouseEventHandler, ReactNode, SetStateAction} from "react";
import {ReactEl} from "@/common/types";
import IconClose from '@/assets/icons/pack2/icon-close.svg'
import {Dispatch} from "redux";

export interface IModal {
    children: ReactNode,
    isActive?: boolean,
    title?: string,
    handleClose?: MouseEventHandler<HTMLDivElement>
}

const Modal:React.FC<IModal> = ({children, isActive, title, handleClose}) => {

    return (
        <div
            onClick={handleClose}
            className={"fixed py-10 px-6 md:py-20 md:px-12 z-10 inset-0 overflow-y-auto backdrop-blur-lg bg-[#1B1C3B]/50 flex flex-col"}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >

            <div className="bg-white rounded-xl mx-auto container relative" onClick={e => e.stopPropagation()}>

                <IconClose
                    className={'absolute right-8 top-8 w-6 h-6 text-black cursor-pointer duration-300'}
                    onClick={handleClose}
                />
                {children}
            </div>
        </div>
    )
}

export default Modal