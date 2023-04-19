// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { LinkBaseProps } from './link-base';

const linkBorderPrimary: React.FC<LinkBaseProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-1 hover:bg-yellow-40 duration-500 ease-in-out border border-solid border-2 border-yellow bg-transparent border text-blue-500';

    return <LinkBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default linkBorderPrimary;
