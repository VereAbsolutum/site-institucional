import React from 'react';
import { ButtonBorderPrimary, ButtonPrimary, Header, LinkBorderPrimary, LinkBorderWhite, LinkPrimary, TextCaption, TextDisplay, TextHeading1, TextHeading2, TextHeading3, TextParagraph, TextParagraphSmall } from '../../components';

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
                        <TextHeading2>Heading 2</TextHeading2>
                        <TextHeading3>Heading 3</TextHeading3>
                        <TextParagraph>Paragraph</TextParagraph>
                        <TextParagraphSmall>Paragraph Small</TextParagraphSmall>
                        <TextCaption>Caption</TextCaption>
                    </div>
                </section>
            </main>
        </>


    );
};

export default home;