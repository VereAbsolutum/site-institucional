import React from 'react';
import { ButtonBorderPrimary, ButtonPrimary, Header, LinkBorderPrimary, LinkBorderWhite, LinkPrimary, TextDisplay, TextHeading1 } from '../../components';

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
                        <LinkBorderWhite>
                            Link to click
                        </LinkBorderWhite>
                        <TextDisplay>Display</TextDisplay>
                        <TextHeading1>Heading 1</TextHeading1>
                    </div>
                </section>
            </main>
        </>


    );
};

export default home;