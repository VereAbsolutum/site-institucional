// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { LinkBaseProps } from './link-base';

const linkPrimary: React.FC<LinkBaseProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-41
    return <LinkBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default linkPrimary;
