import React from 'react';

import { MapPinIcon } from '@heroicons/react/24/solid';

import ProductCard from '../../components/card/product-card';
import { Contact, Footer, GridItem, Header, LinkBorderPrimary, LinkPrimary, TextDisplay, TextHeading2, TextMenu, TextParagraph } from '../../components';

import productData from '../../data/product.json'
import indicators from '../../data/indicators.json'


const home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section id='hero' className='bg-yellow-40'>
                    <div className='container py-12 mb-12 '>
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
                                    <LinkPrimary href='#contact' className='py-4 block lg:inline-block text-center lg:text-left hidden'>
                                        Começe agora e peça uma demonstração
                                    </LinkPrimary>
                                    <LinkPrimary href='#contact' className='py-4 block lg:hidden text-center lg:text-left'>
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
                    </div>
                </section>

                <section id='about' className='container py-20'>
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
                            <LinkPrimary href='#contact' className='py-2'>
                                <TextMenu>
                                    Peça uma demonstração
                                </TextMenu>
                            </LinkPrimary>
                            <LinkBorderPrimary href='/about' className='py-2'>
                                <TextMenu>
                                    Conheça mais a SCordon
                                </TextMenu>
                            </LinkBorderPrimary>
                        </div>
                    </div>
                </section>

                <section id='products' className='container py-20 mb-32'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {productData && productData.map((product, index) =>
                            <ProductCard key={index} productData={product} />
                        )}
                    </div>
                </section>

                <section id='indicators' className='bg-blue'>
                    <div className="container py-28 mb-32">
                        <div className='mb-20 text-center text-white'>
                            <h2 className='mb-4'>
                                <svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#ddd" stroke-width="10" />
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#4CAF50" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="283">
                                        <animate attributeName="stroke-dashoffset" from="283" to="0" dur="5s" repeatCount="1" />
                                    </circle>
                                    <text x="50" y="55" font-size="16" text-anchor="middle" fill="#333">5s</text>
                                </svg>
                                <TextHeading2>
                                    Conte com nossa excepcional equipe de <br /> suporte e obtenha acesso às <br /> ferramentas essenciais para alcançar <br /> seus objetivos e prosperar.
                                </TextHeading2>
                            </h2>
                            <p>
                                <TextParagraph>
                                    Descubra como aproveitar ao máximo a SCordon com o apoio de nossa <br /> excelente equipe de suporte ao cliente e confira nossos indicadores de <br /> desempenho para impulsionar seu sucesso.
                                </TextParagraph>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16">
                            {indicators.map((indicator, i) => (
                                <GridItem indicator={indicator} index={i} key={i} className='text-white p-4' />
                            ))}
                        </div>
                    </div>



                </section>

                <section id='contact'>
                    <div className='container py-12 mb-12 '>
                        <div className='grid sm:grid-cols-2'>
                            <div className='mb-12'>
                                <h2 className='mb-12'>
                                    <TextHeading2>
                                        Começe agora e solicite uma demonstração
                                    </TextHeading2>
                                </h2>
                                <div className='px-8 sm:px-0'>
                                    <div className="flex items-center mb-6">
                                        <MapPinIcon className="w-6 h-6 text-indigo-600 mr-4" />
                                        <div className="text-left">
                                            <div className="font-semibold">Rua Euclides da Cunha</div>
                                            <div className="text-sm text-gray-600">Nº 9999</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-6">
                                        <MapPinIcon className="w-6 h-6 text-indigo-600 mr-4" />
                                        <div className="text-left">
                                            <div className="font-semibold">Telefone</div>
                                            <div className="text-sm text-gray-600">55 (44) 3030-3121</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-6">
                                        <MapPinIcon className="w-6 h-6 text-indigo-600 mr-4" />
                                        <div className="text-left">
                                            <div className="font-semibold">Whatapp</div>
                                            <div className="text-sm text-gray-600">55 (44) 3025-2525</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-6">
                                        <MapPinIcon className="w-6 h-6 text-indigo-600 mr-4" />
                                        <div className="text-left">
                                            <div className="font-semibold">E-mail suporte</div>
                                            <div className="text-sm text-gray-600">suporte@scordon.com.br</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center mb-6">
                                        <MapPinIcon className="w-6 h-6 text-indigo-600 mr-4" />
                                        <div className="text-left">
                                            <div className="font-semibold">E-mail comercial</div>
                                            <div className="text-sm text-gray-600">comercial@scordon.com.br</div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <Contact />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
};

export default home;