import React from 'react';
import { ButtonBorderPrimary, ButtonPrimary, Header, LinkBorderPrimary, LinkPrimary } from '../../components';

const home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className='inline-flex flex-col space-y-4'>
                        <ButtonBorderPrimary label='click here' />
                        <ButtonPrimary label='click here' />
                        <LinkPrimary>
                            Link to click
                        </LinkPrimary>
                        <LinkBorderPrimary>
                            Link to click

                        </LinkBorderPrimary>
                    </div>
                </section>
            </main>
        </>


    );
};

export default home;