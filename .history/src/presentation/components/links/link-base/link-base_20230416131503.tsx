import React from 'react';

export type LinkBaseProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
};

const linkBase: React.FC<LinkBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses =
        'duration-500 ease-in-out font-semibold cursor-pointer rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75';

    return (
        <a className={`${baseClasses} ${className}`} {...rest}>
            {children}
        </a>
    );
};

export default linkBase;
