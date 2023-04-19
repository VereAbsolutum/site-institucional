// ContactModal.tsx
import React, { ReactNode, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import Modal from 'react-modal';
import { TextHeading2 } from '...'; // Importe o TextHeading2 corretamente
import Contact from '...'; // Importe o Contact corretamente

type ContactModalProps = {
    children: ReactNode
};

const ContactModal: React.FC<ContactModalProps> = ({ children }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Formulário de Contato"
            className="relative react-modal-transition rounded p-4 h-[80vh] sm:w-[70vw] py-8 bg-white overflow-auto max-h-screen"
            overlayClassName={`modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${modalIsOpen ? 'modal-open' : ''}`}
        >
            {children}
            <button onClick={closeModal} className="p-4 absolute text-2xl top-2 right-2 text-lg font-semibold text-gray-900">
                <XMarkIcon className="w-6 h-6" />
            </button>
        </Modal>
    );
};

export default ContactModal;
