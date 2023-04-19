import React from 'react';

export type TextBaseProps = React.HTMLAttributes<HTMLSpanElement> & {
    className?: string;
};

const textBase: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = '';

    return (
        <span className={`${baseClasses} ${className}`} {...rest}>
            {children}
        </span>
    );
};

export default textBase;