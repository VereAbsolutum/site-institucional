import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { LinkPrimary, TextMenu, TextParagraph, TextParagraphSmall } from '..';

type ProductCardProps = {
    imageUrl: string;
    title: string;
    description: string;
    features: string[];
    ctaText: string;
    ctaHref: string;
};

const ProductCard: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded shadow-md px-10 py-12 transform hover:scale-[1.02] duration-500 ease-in-out">
            <div className="flex flex-col">
                <div className="flex items-center mb-4">
                    <HeartIcon className="w-8 h-auto mr-4 text-blue-500" />
                    <h3 className="font-medium text-[24px]">CdAdm Web</h3>
                </div>
                <div>
                    <p className="mb-8">
                        <TextParagraphSmall>
                            Conheça a sua nova plataforma digital feita para fornecer todas as ferramentas necessárias para a administração da sua imobiliária.
                        </TextParagraphSmall>
                    </p>
                    <div className='border-t-black border-t border-solid'>
                        <h4 className='font-thin my-4'>
                            <TextParagraph>
                                RECURSOS POPULARES
                            </TextParagraph>
                        </h4>
                        <ul className="list-none">
                            {["features", "casa", "features", "casa"].map((feature, index) => (
                                <li key={index} className="flex items-center mb-1">
                                    <svg className="w-4 h-4 mr-2 text-green-500 h-[1.35rem]" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z"></path>
                                    </svg>
                                    <TextMenu>
                                        {feature}
                                    </TextMenu>
                                </li>
                            ))}
                        </ul>
                        <div className='mt-5'>
                            <LinkPrimary className="flex justify-center py-3 font-400 text-[rgb(75,85,9)]" href="#">
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
