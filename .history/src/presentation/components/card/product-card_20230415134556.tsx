import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { LinkPrimary, List, TextCaption, TextParagraph, TextParagraphSmall } from '..';

export type ProductCardProps = {
    imageUrl: string;
    title: string;
    description: string;
    features: string[];
    ctaText: string;
    ctaHref: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, description, features, ctaHref, }) => {
    return (
        <div className="bg-white p-6 rounded shadow-md px-10 py-12 transform hover:scale-[1.02] duration-500 ease-in-out">
            <div className="flex flex-col">
                <div className="flex items-center mb-4">
                    <HeartIcon className="w-8 h-auto mr-4 text-blue-500" />
                    <h3 className="font-medium text-[24px]">{title}</h3>
                </div>
                <div>
                    <p className="mb-8">
                        <TextParagraphSmall>
                            {/* Conheça a sua nova plataforma digital feita para fornecer todas as ferramentas necessárias para a administração da sua imobiliária. */}
                            {description}
                        </TextParagraphSmall>
                    </p>
                    <div className='border-t-black border-t border-solid'>
                        <h4 className='my-4'>
                            <TextParagraph>
                                RECURSOS POPULARES
                            </TextParagraph>
                        </h4>
                        <List items={features} />
                        <div className='mt-5'>
                            <LinkPrimary className="block text-center py-3" href={ctaHref}>
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
