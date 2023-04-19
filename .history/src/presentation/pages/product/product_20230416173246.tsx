import { MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Accordion, Footer, Header, LinkPrimary, TextDisplay, TextHeading1, TextHeading2, TextParagraph } from '../../components';

export type Pergunta = {
    title: string,
    content: string
}

const product: React.FC = () => {
    const perguntasFrequentes: Pergunta[] = [
        {
            title: 'Pergunta',
            content: 'Resposta para a pergunta 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'Pergunta',
            content: 'Resposta para a pergunta 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'Pergunta',
            content: 'Resposta para a pergunta 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'Pergunta',
            content: 'Resposta para a pergunta 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'Pergunta',
            content: 'Resposta para a pergunta 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section className='bg-yellow-40'>
                    <div className='container py-12 mb-12'>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto sm:max-w-sm">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M22 5H20L12 13L4 5H2"></path>
                                    <line x1="2" y1="19" x2="22" y2="19"></line>
                                    <line x1="7" y1="19" x2="7" y2="21"></line>
                                    <line x1="17" y1="19" x2="17" y2="21"></line>
                                </svg>
                            </div>

                            <div className='sm:pt-10'>
                                <p className='m-0'>
                                    <MapPinIcon className="w-6 h-6 text-indigo-600 inline-block mr-2" />
                                    <TextParagraph className='text-semibold'>CdAdm Web</TextParagraph>
                                </p>
                                <h1 className='mb-4'>
                                    <TextHeading1>
                                        CRM para sua Empresa
                                    </TextHeading1>
                                </h1>
                                <div className='mb-4'>
                                    <LinkPrimary className='py-4 block md:inline-block text-center lg:text-left hidden'>
                                        Começe agora e peça uma demonstração
                                    </LinkPrimary>
                                    <LinkPrimary className='py-4 block md:hidden text-center lg:text-left'>
                                        Peça uma demonstração
                                    </LinkPrimary>
                                </div>

                                <p className='mb-4 pr-12'>
                                    <TextParagraph>
                                        O CdAdm Web é uma solução inovadora em CRM para imobiliárias, otimizando a gestão do seu negócio e fortalecendo sua marca no mundo digital. Eficiência na palma da sua mão.
                                    </TextParagraph>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container py-12 mb-12'>
                        <div className='grid sm:grid-cols-2'>
                            <div className='sm:pr-32'>
                                <h2 className='mb-4'>
                                    <TextHeading2>
                                        Tudo dentro de uma só plataforma
                                    </TextHeading2>
                                </h2>
                                <p className='mb-4'>
                                    <TextParagraph>
                                        O CdAdm Web oferece um dashboard personalizável adaptado às necessidades do usuário, permitindo o fácil acesso a informações relevantes. Com a possibilidade de adicionar novos cadastros rapidamente, a plataforma simplifica e agiliza a gestão imobiliária.
                                    </TextParagraph>
                                </p>
                                <p>
                                    <TextParagraph>
                                        Além disso, o sistema permite visualizar os bens dos proprietários e gerenciar cadastros de pessoas jurídicas e seus sócios, facilitando o acompanhamento de informações importantes para o sucesso do seu negócio imobiliário.
                                    </TextParagraph>
                                </p>
                            </div>

                            <div className='flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto sm:max-w-sm">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M22 5H20L12 13L4 5H2"></path>
                                    <line x1="2" y1="19" x2="22" y2="19"></line>
                                    <line x1="7" y1="19" x2="7" y2="21"></line>
                                    <line x1="17" y1="19" x2="17" y2="21"></line>
                                </svg>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className='container py-12 mb-12'>
                        <div>
                            <div className="flex border-b mb-4">
                                <Tab title="Tab 1" active={activeTab === 0} onClick={() => setActiveTab(0)} />
                                <Tab title="Tab 2" active={activeTab === 1} onClick={() => setActiveTab(1)} />
                            </div>
                            <TabPanel active={activeTab === 0}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>Content 1A</div>
                                    <div>Content 1B</div>
                                </div>
                            </TabPanel>
                            <TabPanel active={activeTab === 1}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>Content 2A</div>
                                    <div>Content 2B</div>
                                </div>
                            </TabPanel>
                        </div>
                        );
};

                        export default TabsExample;
                        Este exemplo cria um componente de tabulação simples com duas tabs e utiliza grid em cada painel de tabulação. Você pode ajustar a quantidade e o conteúdo das tabs e painéis conforme necessário.




                        sergiopile3@gmail.com
                        exemplo de uso
                        Aqui está um exemplo de uso do componente TabsExample que criamos anteriormente. Vamos criar um componente App e incluir o componente TabsExample nele:

                        tsx
                        Copy code
                        // App.tsx
                        import React from 'react';
                        import TabsExample from './TabsExample';

const App: React.FC = () => {
  return (
                        <div className="container mx-auto p-8">
                            <h1 className="text-2xl font-semibold mb-6">Tabs with Grid</h1>
                            <TabsExample />
                        </div>
                        );
};

                        export default App;
                        No arquivo main.tsx (ou index.tsx, dependendo da sua configuração), importe o componente App e renderize-o dentro do elemento raiz:

                        tsx
                        Copy code
                        // main.tsx
                        import React from 'react';
                        import ReactDOM from 'react-dom';
                        import App from './App';
                        import './index.css'; // Certifique-se de importar o arquivo CSS do Tailwind

                        ReactDOM.render(
                        <React.StrictMode>
                            <App />
                        </React.StrictMode>,
                        document.getElementById('root')
                        );
                        Agora, quando você executar seu aplicativo Vite, deverá ver o componente TabsExample renderizado na página com duas tabs e seus respectivos painéis de conteúdo. C




                    </div>
                </section>

                <section>
                    <div className='container py-12 mb-12'>
                        <h2 className='text-center mb-12'>
                            <TextHeading2 >
                                Perguntas Frequentes
                            </TextHeading2>
                        </h2>
                        <div className='grid gap-4'>
                            {perguntasFrequentes && perguntasFrequentes.map((pergunta, index) =>
                                <Accordion key={index} title={pergunta.title}>
                                    {pergunta.content}
                                </Accordion>
                            )}
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
};

export default product;