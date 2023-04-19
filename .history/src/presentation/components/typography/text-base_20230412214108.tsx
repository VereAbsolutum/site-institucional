import React from 'react';

export type HeadingProps = React.HTMLAttributes<HTMLSpanElement> & {
    className?: string;
};

const textBase: React.FC<HeadingProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-lg font-semibold';

    return (
        <span className={`${baseClasses} ${className}`} {...rest}>
            {children}
        </span>
    );
};

export default textBase;