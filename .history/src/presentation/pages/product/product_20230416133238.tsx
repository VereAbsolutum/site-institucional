import React from 'react';
import { Header } from '../../components';

const product: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className='container py-12 mb-12'>
                        <div className='grid grid-cols sm:grid-cols-2'></div>
                    </div>
                </section>
            </main>
            );
        </>
    )
};

export default product;