import React from 'react';
import { ButtonBorderPrimary, ButtonPrimary, Header, LinkBorderPrimary, LinkBorderWhite, LinkPrimary, TextCaption, TextDisplay, TextHeading1, TextHeading2, TextHeading3, TextMenu, TextParagraph, TextParagraphSmall } from '../../components';
import ProductCard from '../../components/card/product-card';
import { productCardData } from './components';

const home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section className='container'>
                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
                        {productCardData && productCardData.map((data, index) =>
                            <ProductCard {...data} />
                        )}
                        <ProductCard {...productCardProps} ></ProductCard>
                    </div>
                </section>
            </main>
        </>


    );
};

export default home;