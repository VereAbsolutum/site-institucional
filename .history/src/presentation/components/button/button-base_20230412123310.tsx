import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    className?: string;
};

const buttonBase: React.FC<ButtonProps> = ({ label, className, ...rest }) => {
    const baseClasses =
        'px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75';

    return (
        <button className={`${baseClasses} ${className}`} {...rest}>
            {label}
        </button>
    );
};

export default buttonBase;
