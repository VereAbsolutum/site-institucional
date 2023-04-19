// ContactModal.tsx
import React, { ReactNode, useState } from 'react';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/solid';

type ContactModalProps = {
    children: ReactNode
    modalIsOpen: boolean;
    closeModal: () => void;
};

const modalPopup: React.FC<ContactModalProps> = ({ children, modalIsOpen, closeModal }) => {

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

export default modalPopup;
