import React from 'react';
import { ButtonBorderPrimary, ButtonPrimary, Header, LinkBorderPrimary, LinkBorderWhite, LinkPrimary, TextCaption, TextDisplay, TextHeading1, TextHeading2, TextHeading3, TextMenu, TextParagraph, TextParagraphSmall } from '../../components';

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
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="md:w-1/2 p-4">
                            <h1 className="text-xl md:text-2xl font-bold mb-2">'title'</h1>
                            <p className="text-md mb-4">'description'</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                'buttonText'
                            </button>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <span>imagem</span>
                        </div>
                    </div>

                </section>
            </main>
        </>


    );
};

export default home;