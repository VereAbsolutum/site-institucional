import React, { ReactNode } from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    className?: string;
};

const buttonBase: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
    const baseClasses =
        'duration-500 ease-in-out hover:bg-yellow-40 font-semibold rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75';

    return (
        <button className={`${baseClasses} ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default buttonBase;
