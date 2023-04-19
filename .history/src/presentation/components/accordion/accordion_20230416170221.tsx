// Accordion.tsx
import React, { ReactNode, useState } from 'react';

interface AccordionProps {
    title: string;
    children: ReactNode;
}

const accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-1 border-black-500">
            <button
                className="w-full py-3 px-6 flex items-center justify-between focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-gray-700 hover:bg-black-500">{title}</span>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-gray-500"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4 8a1 1 0 011.707-.707l4.586 4.586 4.586-4.586a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5A1 1 0 014 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </button>
            {isOpen && <div className="px-6 py-3 text-gray-600">{children}</div>}
        </div>
    );
};

export default accordion;
