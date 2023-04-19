export type ProductData = {
    product_name: string;
    description: string;
    features: Features[];
};

export type Features = {
    title: string,
    description: string
}