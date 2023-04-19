import React from 'react';
import { ButtonBorderPrimary, ButtonPrimary, Header } from '../../components';

const home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className='inline-flex flex-col space-y-4'>
                        <ButtonBorderPrimary label='click here' />
                        <ButtonPrimary label='click here' />
                    </div>
                </section>
            </main>
        </>


    );
};

export default home;