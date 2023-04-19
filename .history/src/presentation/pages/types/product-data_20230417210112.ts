export type ProductData = {
    product_name: string,
    description: string,
    features: Features[],
    imageUrl: string,
    ctaHref: string
};

export type Features = {
    title: string,
    description: string
}