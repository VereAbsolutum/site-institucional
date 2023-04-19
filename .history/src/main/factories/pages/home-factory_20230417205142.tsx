import React from 'react';
import { Home } from '../../../presentation/pages';
import productData from '../../data/product.json'

const makeHome: React.FC = () => {

    return (
        <Home productData={productData} />
    );
};

export default makeHome
