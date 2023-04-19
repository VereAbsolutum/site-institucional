// ContactModal.tsx
import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import Modal from 'react-modal';
import { Contact, TextHeading2 } from '..';

type ContactModalProps = {
    modalIsOpen: boolean;
    closeModal: () => void;
};

const contactModal: React.FC<ContactModalProps> = ({ modalIsOpen, closeModal }) => {
    return (
        <Modal>
            <h2 className='mb-8 text-center'>
                <TextHeading2 className='font-500'>
                    Começe agora e <br /> solicite uma demonstração
                </TextHeading2>
            </h2>
            <Contact />
            <button onClick={closeModal} className="p-4 absolute text-2xl top-2 right-2 text-lg font-semibold text-gray-900">
                <XIcon className="w-6 h-6" />
            </button>
        </Modal>

    );
};

export default contactModal;
