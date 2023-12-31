'use client'

import IconArrow from '@/assets/icons/pack2/icon-arrow2.svg'
import {SetStateAction, useEffect, useState} from 'react';
import Modal, {IModal} from "@/components/modal/modal";
import {useModal} from "@/components/modal/useModal";
import {dataModal, dataPage, IVacanciesModalData, IVacanciesPageData} from "@/app/vacancies/data";
import {useAppSelector} from "@/redux/store";


const Vacancies = () => {
    const [modalOpen, setModalOpen, toggle] = useModal(false)
    const [currentVacancy, setCurrentVacancy] = useState('')

    const {lang} = useAppSelector(store => store.appReducer)
    const pageData = dataPage[lang as keyof IVacanciesPageData]

    const modalData = dataModal[currentVacancy as keyof IVacanciesModalData]


    const openModalHandler = (id: SetStateAction<string>) => {
        setCurrentVacancy(id)
        toggle()
    }

    return (
        <>
            <main className={'flex flex-col flex-1 gap-24 md:gap-32 py-32 md:py-40'}>
                <section className={'flex flex-1'}>
                    <div className={'flex flex-col md:flex-row container mx-auto px-4 lg:px-0 gap-8 py-4 md:py-16'}>
                        <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                            <div className={'flex flex-col justify-start items-start gap-6 max-w-xl'}>
                                <h1 className={'text-6xl font-bold color-primary'}>
                                    {pageData.section1.title}
                                </h1>

                                <p className={'text-xl'}>
                                    {pageData.section1.text}
                                </p>

                                <span className={'text-xl'}>
                                    {pageData.section1.email.text + '  '}
                                    <a
                                        href={`mailto:${pageData.section1.email.link}`}
                                        className={'font-bold color-primary duration-300'}
                                        target="_blank"
                                    >
                                        {pageData.section1.email.title}
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div
                            className={'flex flex-1 flex-col mx-auto gap-4 md:gap-6 w-full cursor-pointer justify-center'}>
                            {pageData.section1.list.map((item, index) =>
                                <div
                                    id={`modal-${index + 1}`}
                                    className={'bg-white rounded-md px-4 py-4 flex flex-row items-center justify-between group'}
                                    key={`vacanciesList1-${index}`}
                                    onClick={() => openModalHandler(item.id)}
                                >
                                    <span className={''}>
                                        {item.title}
                                    </span>

                                    <div className={'w-8'}>
                                        <IconArrow
                                            className={'-ml-2 -top-4 w-8 text-black duration-300 group-hover:ml-2'}
                                            onClick={toggle}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {modalOpen &&
                <Modal isActive={modalOpen} title={'Title'} handleClose={toggle}>
                    <div className={'flex flex-col flex-1 px-8 py-12 gap-8'}>

                        <h2 className={'text-4xl flex-1 font-bold color-primary'}>
                            {modalData?.title}
                        </h2>

                        {modalData?.list?.map((block, blockIndex) =>
                            <div className={'flex flex-col gap-3'} key={`block-${blockIndex}`}>
                                <h3 className={'text-xl font-bold color-primary'}>
                                    {block.title}
                                </h3>

                                <div className={'flex flex-col flex-1 gap-2'}>
                                    {block.list.map((list, listIndex) =>
                                        <p key={`block-${blockIndex}-list-${listIndex}`} className={'text-lg'}>
                                            {list.text}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </Modal>
            }
        </>
    );
};

export default Vacancies;