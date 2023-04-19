import React from 'react';
import { Header, LinkPrimary, TextDisplay, TextParagraph } from '../../components';
import ProductCard from '../../components/card/product-card';
import { productCardData } from './components';

const home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section className='container py-30 mb-32'>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div className='grid grid-cols-1 gap-4'>
                            <h1>
                                <TextDisplay>
                                    Cresça com mais qualidade com a SCordon
                                </TextDisplay>
                            </h1>
                            <p>
                                <TextParagraph>
                                    Softwares robustos e intuitivos. Integre seus dados, colaboradores e clientes em uma plataforma de CRM escalável que evolui junto com o seu negócio.
                                </TextParagraph>
                            </p>
                            <div>
                                <LinkPrimary className='py-4 inline-block'>
                                    Começe agora e peça uma demonstração
                                </LinkPrimary>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container  py-16'>
                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
                        {productCardData && productCardData.map((data, index) =>
                            <ProductCard {...data} />
                        )}
                    </div>
                </section>
            </main>
        </>
    );
};

export default home;