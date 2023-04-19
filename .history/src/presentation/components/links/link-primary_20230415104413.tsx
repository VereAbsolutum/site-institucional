// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { LinkBaseProps } from './link-base';

const linkPrimary: React.FC<LinkBaseProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-1 text-lg font-400 text-[rgb(75,85,9)] duration-100 bg-blue-500 bg-yellow hover:bg-blue-700 hover:bg-opacity-40 ';

    return <LinkBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default linkPrimary;
