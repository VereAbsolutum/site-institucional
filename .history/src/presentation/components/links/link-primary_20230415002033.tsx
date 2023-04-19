// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { LinkBaseProps } from './link-base';

const linkPrimary: React.FC<LinkBaseProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-1 bg-blue-500 bg-yellow hover:bg-blue-700 hover:bg-opacity-75 text-lg font-medium';

    return <LinkBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default linkPrimary;
