'use client'


const Vacancies = () => {
    return (
        <main className={'flex flex-col flex-1 gap-24 md:gap-32 py-32 md:py-40'}>
            <section className={'flex flex-1'}>
                <div className={'flex flex-col md:flex-row container mx-auto px-4 lg:px-0 gap-8 py-4 md:py-16'}>
                    <div className={'flex flex-col flex-1 items-start justify-center gap-8'}>
                        <div className={'flex flex-col justify-start items-start gap-6 max-w-xl'}>
                            <h1 className={'text-6xl font-bold color-primary'}>
                                Ищем таланты
                            </h1>

                            <p className={'text-lg'}>
                                Наше профессиональная команда планомерно расширяется и сейчас у нас в компании доступны следующие вакансии:
                            </p>
                        </div>
                    </div>

                    <div className={'flex flex-1 flex-col mx-auto gap-6 w-full h-auto'}>
                        {[{
                            title: 'Фронтенд-разработчик'
                        }, {
                            title: 'Тестировщик'
                        }, {
                            title: 'Проджект-менеджер'
                        }, {
                            title: 'Продукт-менеджер'
                        }].map((item, index) =>
                            <div
                                className={'bg-white rounded-md px-4 py-4 flex flex-1 flex-row items-center justify-between'}
                                key={`vacanciesList1-${index}`}
                            >
                                <span className={''}>{item.title}</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Vacancies;