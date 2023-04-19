import React from 'react';
import { ButtonBorderPrimary, ButtonPrimary, Header, LinkBorderPrimary, LinkBorderWhite, LinkPrimary, TextCaption, TextDisplay, TextHeading1, TextHeading2, TextHeading3, TextMenu, TextParagraph, TextParagraphSmall } from '../../components';
import ProductCard from '../../components/card/product-card';

const home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section className='container'>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </div>
                </section>
            </main>
        </>


    );
};

export default home;