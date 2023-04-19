import React, { useState } from 'react'
import Modal from 'react-modal';

import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { MainMenu, MobileMenu } from './components'
import { Contact, LinkPrimary, TextMenu, TextParagraph } from '..'

const products = [
    { name: 'CdAdm Web', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'CdAdm Grafico', description: 'Speak directly to your customers', href: 'cdAdmgrafico', icon: CursorArrowRaysIcon },
    { name: 'CdFin', description: 'Your customers’ data will be safe and secure', href: 'cdAdmweb', icon: FingerPrintIcon }
]
const callsToAction = [
    { name: 'Assista a Demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contato', href: '#', icon: PhoneIcon },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">SCordon</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>

                    {/* main menu */}
                    <div className='ml-32'>
                        <MainMenu products={products} />
                    </div>
                </div>

                <div className="flex lg:hidden">
                    {/* Button */}
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>



                <div className="hidden lg:flex lg:flex-1 lg:justify-end align-items: center">
                    <div className='mr-5'>
                        <LinkPrimary
                            href="#"
                            className='py-2'
                            onClick={(e) => {
                                e.preventDefault()
                                openModal()
                            }}
                        >
                            <TextMenu>
                                Peça uma demonstração
                            </TextMenu>
                        </LinkPrimary>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="text-lg font-medium leading-6 font-semibold">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                    {/* Button */}
                </div>
            </nav>

            <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                products={products}
                callsToAction={callsToAction}
            />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Formulário de Contato"
                className="react-modal-transition rounded p-4 bg-white overflow-auto max-h-screen"
                overlayClassName={`modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${modalIsOpen ? 'modal-open' : ''}`}
            >
                <h2 className='mb-8'>
                    <TextParagraph className='font-500'>
                        Começe agora e solicite uma demonstração
                    </TextParagraph>
                </h2>
                <Contact />
                <button onClick={closeModal} className="absolute top-2 right-2 text-lg font-semibold text-gray-900">&times;</button>
            </Modal>
        </header>
    )
}

export default header