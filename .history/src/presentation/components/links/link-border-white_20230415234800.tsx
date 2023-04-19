// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { LinkBaseProps } from './link-base';

const linkBorderWhite: React.FC<LinkBaseProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-1 text-white border-2 border-white bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500';

    return <LinkBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default linkBorderWhite;
