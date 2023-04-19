import { MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Header, LinkPrimary, TextDisplay, TextHeading1, TextHeading2, TextParagraph } from '../../components';

const product: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section className='bg-yellow-40'>
                    <div className='container py-12 mb-12'>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto sm:max-w-sm">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M22 5H20L12 13L4 5H2"></path>
                                    <line x1="2" y1="19" x2="22" y2="19"></line>
                                    <line x1="7" y1="19" x2="7" y2="21"></line>
                                    <line x1="17" y1="19" x2="17" y2="21"></line>
                                </svg>
                            </div>

                            <div>
                                <p className='m-0'>
                                    <MapPinIcon className="w-6 h-6 text-indigo-600 inline-block mr-2" />
                                    <TextParagraph className='text-semibold'>CdAdm Web</TextParagraph>
                                </p>
                                <h1 className='mb-4'>
                                    <TextHeading1>
                                        CRM para sua Empresa
                                    </TextHeading1>
                                </h1>
                                <div className='mb-4'>
                                    <LinkPrimary className='py-4 block md:inline-block text-center lg:text-left hidden'>
                                        Começe agora e peça uma demonstração
                                    </LinkPrimary>
                                    <LinkPrimary className='py-4 block md:hidden text-center lg:text-left'>
                                        Peça uma demonstração
                                    </LinkPrimary>
                                </div>

                                <p className='mb-4 pr-12'>
                                    <TextParagraph>
                                        O CdAdm Web é uma solução inovadora em CRM para imobiliárias, otimizando a gestão do seu negócio e fortalecendo sua marca no mundo digital. Eficiência na palma da sua mão.
                                    </TextParagraph>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container py-12 mb-12'>
                        <div className='grid sm:grid-cols-2'>
                            <div className='pr-32'>
                                <h2 className='mb-4'>
                                    <TextHeading2>
                                        Tudo dentro de uma só plataforma
                                    </TextHeading2>
                                </h2>
                                <p className='mb-4'>
                                    <TextParagraph>
                                        O CdAdm Web oferece um dashboard personalizável adaptado às necessidades do usuário, permitindo o fácil acesso a informações relevantes. Com a possibilidade de adicionar novos cadastros rapidamente, a plataforma simplifica e agiliza a gestão imobiliária.
                                    </TextParagraph>
                                </p>
                                <p>
                                    <TextParagraph>
                                        Além disso, o sistema permite visualizar os bens dos proprietários e gerenciar cadastros de pessoas jurídicas e seus sócios, facilitando o acompanhamento de informações importantes para o sucesso do seu negócio imobiliário.
                                    </TextParagraph>
                                </p>
                            </div>

                            <div className='flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto sm:max-w-sm">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M22 5H20L12 13L4 5H2"></path>
                                    <line x1="2" y1="19" x2="22" y2="19"></line>
                                    <line x1="7" y1="19" x2="7" y2="21"></line>
                                    <line x1="17" y1="19" x2="17" y2="21"></line>
                                </svg>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            );
        </>
    )
};

export default product;