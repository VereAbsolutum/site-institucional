export type ProductData = {
    product_name: string,
    description: string,
    features: Features[],
    svgIcon?: string,
    ctaHref: string
    questions: Question[]
};

export type Features = {
    title: string,
    description: string
}

export type Question = {
    title: string,
    description: string
}