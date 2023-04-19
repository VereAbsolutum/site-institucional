// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { LinkBaseProps } from './link-base';

const linkPrimary: React.FC<LinkBaseProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-1 text-lg font-400 text-black duration-100 bg-yellow hover:bg-opacity-40';

    return <LinkBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default linkPrimary;
