// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { LinkBaseProps } from './link-base';

const linkBorderPrimary: React.FC<LinkBaseProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-1  border-2 border-yellow bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500';

    return <LinkBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default linkBorderPrimary;
