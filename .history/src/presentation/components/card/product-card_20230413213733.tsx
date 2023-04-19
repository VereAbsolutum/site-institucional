import React from 'react';
import { LinkPrimary } from '..';

type ProductCardProps = {
    imageUrl: string;
    title: string;
    description: string;
    features: string[];
    ctaText: string;
    ctaHref: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl,
    title,
    description,
    features,
    ctaText,
    ctaHref,
}) => {
    return (
        <div className="bg-white p-6 rounded shadow">
            <div className="flex flex-col">
                <div className="flex items-center mb-4">
                    <img src={imageUrl} alt="" width="30" height="30" className="w-8 h-auto mr-4" />
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <div>
                    <p className="mb-4">{description}</p>
                    <div>
                        <h4 className="font-semibold mb-2">RECURSOS POPULARES</h4>
                        <ul className="list-none mb-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center mb-1">
                                    <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z"></path>
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div>
                            <LinkPrimary className="text-white" href={ctaHref}>
                                {ctaText}
                            </LinkPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;