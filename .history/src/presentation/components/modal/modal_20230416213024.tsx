// ContactModal.tsx
import React, { ReactNode } from 'react';
import { XIcon } from '@heroicons/react/outline';
import Modal from 'react-modal';
import { TextHeading2 } from '...'; // Importe o TextHeading2 corretamente
import Contact from '...'; // Importe o Contact corretamente

type ContactModalProps = {
    children: ReactNode
};

const ContactModal: React.FC<ContactModalProps> = ({ modalIsOpen, closeModal }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Formulário de Contato"
            className="relative react-modal-transition rounded p-4 h-[80vh] sm:w-[70vw] py-8 bg-white overflow-auto max-h-screen"
            overlayClassName={`modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${modalIsOpen ? 'modal-open' : ''}`}
        >
            {children}
        </Modal>
    );
};

export default ContactModal;
