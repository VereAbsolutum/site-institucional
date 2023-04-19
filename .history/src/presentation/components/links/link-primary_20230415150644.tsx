// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { LinkBaseProps } from './link-base';

const linkPrimary: React.FC<LinkBaseProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-4 text-lg font-400 text-black-light duration-100 bg-blue-500 bg-yellow hover:bg-blue-700 hover:bg-opacity-40 hover:text-opacity-40';

    return <LinkBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default linkPrimary;
