import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Header, LinkBorderPrimary, LinkPrimary, TextDisplay, TextHeading1, TextHeading2, TextHeading3, TextMenu, TextParagraph } from '../../components';
import ProductCard from '../../components/card/product-card';
import { productCardData } from './components';

const home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section className='container py-12 mb-12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div className='grid grid-cols-1 gap-4 order-2 sm:order-1'>
                            <h1>
                                <TextDisplay>
                                    Cresça com mais qualidade com a SCordon
                                </TextDisplay>
                            </h1>
                            <p className='mb-4 pr-12'>
                                <TextParagraph>
                                    Softwares robustos e intuitivos. Integre seus dados, colaboradores e clientes em uma plataforma de CRM escalável que evolui junto com o seu negócio.
                                </TextParagraph>
                            </p>
                            <div>
                                <LinkPrimary className='py-4 block md:inline-block text-center lg:text-left hidden'>
                                    Começe agora e peça uma demonstração
                                </LinkPrimary>
                                <LinkPrimary className='py-4 block md:hidden text-center lg:text-left'>
                                    Peça uma demonstração
                                </LinkPrimary>
                            </div>
                        </div>
                        <div className='flex justify-center items-center order-1 sm:order-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto sm:max-w-sm">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M22 5H20L12 13L4 5H2"></path>
                                <line x1="2" y1="19" x2="22" y2="19"></line>
                                <line x1="7" y1="19" x2="7" y2="21"></line>
                                <line x1="17" y1="19" x2="17" y2="21"></line>
                            </svg>
                        </div>
                    </div>
                </section>


                <section className='container py-20'>
                    <div className='text-center lg:px-36'>
                        <h2 className='mb-6'>
                            <TextHeading2>
                                Quem é a SCordon
                            </TextHeading2>
                        </h2>
                        <p className='mb-10'>
                            <TextParagraph>
                                A Sistemas CORDON é especializada no setor de TI, criando soluções inovadoras para as áreas administrativa e comercial. Voltada para as demandas do mercado, desenvolve ferramentas que solucionam de maneira eficaz os desafios apresentados, destacando-se principalmente em sistemas voltados para a administração de bens e contratos.
                            </TextParagraph>
                        </p>

                        <div className='flex flex-col sm:flex-row sm:justify-center gap-4'>
                            <LinkPrimary className='py-2'>
                                <TextMenu>
                                    Peça uma demonstração
                                </TextMenu>
                            </LinkPrimary>
                            <LinkBorderPrimary className='py-2'>
                                <TextMenu>
                                    Conheça mais a SCordon
                                </TextMenu>
                            </LinkBorderPrimary>
                        </div>
                    </div>
                </section>

                <section className='container py-20 mb-32'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {productCardData && productCardData.map((data, index) =>
                            <ProductCard key={index} {...data} />
                        )}
                    </div>
                </section>

                <section className='container py-20 mb-32'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        <div className='flex flex-col items-center'>
                            <p>
                                <HeartIcon className="w-8 h-auto text-blue-500" />
                            </p>
                            <h3>
                                <TextHeading1>11</TextHeading1>
                            </h3>
                            <p>
                                <TextParagraph className='font-500'>
                                    resolvidos
                                </TextParagraph>
                            </p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p>
                                <HeartIcon className="w-8 h-auto text-blue-500" />
                            </p>
                            <h3>
                                <TextHeading1>11</TextHeading1>
                            </h3>
                            <p>
                                <TextParagraph className='font-500'>
                                    resolvidos
                                </TextParagraph>
                            </p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p>
                                <HeartIcon className="w-8 h-auto text-blue-500" />
                            </p>
                            <h3>
                                <TextHeading1>11</TextHeading1>
                            </h3>
                            <p>
                                <TextParagraph className='font-500'>
                                    resolvidos
                                </TextParagraph>
                            </p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p>
                                <HeartIcon className="w-8 h-auto text-blue-500" />
                            </p>
                            <h3>
                                <TextHeading1>11</TextHeading1>
                            </h3>
                            <p>
                                <TextParagraph className='font-500'>
                                    resolvidos
                                </TextParagraph>
                            </p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p>
                                <HeartIcon className="w-8 h-auto text-blue-500" />
                            </p>
                            <h3>
                                <TextHeading1>11</TextHeading1>
                            </h3>
                            <p>
                                <TextParagraph className='font-500'>
                                    resolvidos
                                </TextParagraph>
                            </p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p>
                                <HeartIcon className="w-8 h-auto text-blue-500" />
                            </p>
                            <h3>
                                <TextHeading1>11</TextHeading1>
                            </h3>
                            <p>
                                <TextParagraph className='font-500'>
                                    resolvidos
                                </TextParagraph>
                            </p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p>
                                <HeartIcon className="w-8 h-auto text-blue-500" />
                            </p>
                            <h3>
                                <TextHeading1>11</TextHeading1>
                            </h3>
                            <p>
                                <TextParagraph className='font-500'>
                                    resolvidos
                                </TextParagraph>
                            </p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <p>
                                <HeartIcon className="w-8 h-auto text-blue-500" />
                            </p>
                            <h3>
                                <TextHeading1>11</TextHeading1>
                            </h3>
                            <p>
                                <TextParagraph className='font-500'>
                                    resolvidos
                                </TextParagraph>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default home;