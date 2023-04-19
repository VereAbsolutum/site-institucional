import { MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Contact, Footer, GridItem, Header, LinkBorderPrimary, LinkBorderWhite, LinkPrimary, TextDisplay, TextHeading1, TextHeading2, TextHeading3, TextMenu, TextParagraph } from '../../components';
import ProductCard from '../../components/card/product-card';
import { productCardData } from './components';


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
                                    <LinkPrimary href='contact' className='py-4 block md:inline-block text-center lg:text-left hidden'>
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

                <section id='products' className='container py-20 mb-32'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {productCardData && productCardData.map((data, index) =>
                            <ProductCard key={index} {...data} />
                        )}
                    </div>
                </section>

                <section id='indicators' className='bg-blue'>
                    <div className="container py-28 mb-32">
                        <div className='mb-20 text-center sm:px-[12rem] text-white'>
                            <h2 className='mb-4'>
                                <TextHeading2>
                                    Conte com nossa excepcional equipe de suporte e obtenha acesso às ferramentas essenciais para alcançar seus objetivos e prosperar.
                                </TextHeading2>
                            </h2>
                            <p>
                                <TextParagraph>
                                    Descubra como aproveitar ao máximo a SCordon com o apoio de nossa excelente equipe de suporte ao cliente e confira nossos indicadores de desempenho para impulsionar seu sucesso.
                                </TextParagraph>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16">
                            {Array.from({ length: 8 }, (_, i) => (
                                <GridItem index={i} key={i} className='text-white p-16' />
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <LinkBorderWhite className='px-20 py-3'>
                                Saiba mais
                            </LinkBorderWhite>
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