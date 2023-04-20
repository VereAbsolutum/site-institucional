import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { LinkPrimary, List, TextCaption, TextParagraph, TextParagraphSmall } from '..';
import { ProductData } from '../../pages/types';

// export type ProductCardProps = {
//     imageUrl: string;
//     title: string;
//     description: string;
//     features: string[];
//     ctaText: string;
//     ctaHref: string;
// };

export type ProductCardProps = {
    productData: ProductData
}

const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
    return (
        <div className="bg-white p-6 rounded shadow-md px-10 py-12 transform hover:scale-[1.02] duration-500 ease-in-out">
            <div className="flex flex-col">
                <div className="flex items-center mb-4">
                    {productData.svgIcon && (
                        <div className="w-[40px] y-auto" dangerouslySetInnerHTML={{ __html: productData.svgIcon }} />
                    )}
                    <h3 className="font-medium text-[24px]">{productData.product_name}</h3>
                </div>
                <div>
                    <p className="mb-8">
                        <TextParagraphSmall>
                            {/* Conheça a sua nova plataforma digital feita para fornecer todas as ferramentas necessárias para a administração da sua imobiliária. */}
                            {productData.description}
                        </TextParagraphSmall>
                    </p>
                    <div className='border-t-black border-t border-solid'>
                        <h4 className='my-4'>
                            <TextParagraph>
                                RECURSOS POPULARES
                            </TextParagraph>
                        </h4>
                        <List items={productData.features} />
                        <div className='mt-5'>
                            <LinkPrimary className="block text-center py-2" href={productData.ctaHref}>
                                Começe a usar agora
                            </LinkPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
