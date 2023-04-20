export type ProductData = {
    product_name: string,
    description: string,
    features: Features[],
    svgIcon?: string,
    ctaHref: string
    questions: string[]
};

export type Features = {
    title: string,
    description: string
}