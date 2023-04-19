// ContactModal.tsx
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Modal from 'react-modal';
import { Contact, ModalPopup, TextHeading2 } from '..';

type ContactModalProps = {
    modalIsOpen: boolean;
    closeModal: () => void;
};

const contactModal: React.FC<ContactModalProps> = ({ modalIsOpen, closeModal }) => {
    return (
        <ModalPopup modalIsOpen={modalIsOpen} closeModal={closeModal}>
            <h2 className='mb-8 text-center'>
                <TextHeading2 className='font-500'>
                    Começe agora e <br /> solicite uma demonstração
                </TextHeading2>
            </h2>
            <Contact />
            <button onClick={closeModal} className="p-4 absolute text-2xl top-2 right-2 text-lg font-semibold text-gray-900">
                <XMarkIcon className="w-6 h-6" />
            </button>
        </ModalPopup>

    );
};

export default contactModal;
