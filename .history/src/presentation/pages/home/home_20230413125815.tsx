import React from 'react';
import { ButtonBorderPrimary, ButtonPrimary, ContainerFlex, Content50, Header, LinkBorderPrimary, LinkBorderWhite, LinkPrimary, TextCaption, TextDisplay, TextHeading1, TextHeading2, TextHeading3, TextMenu, TextParagraph, TextParagraphSmall } from '../../components';

const home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    {/* <div className='inline-flex flex-col space-y-4'>
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
                        <TextMenu>Menu</TextMenu>
                    </div> */}
                    <ContainerFlex>
                        <Content50>'Text'</Content50>
                        <Content50>'Text2'</Content50>
                    </ContainerFlex>

                </section>
            </main>
        </>


    );
};

export default home;