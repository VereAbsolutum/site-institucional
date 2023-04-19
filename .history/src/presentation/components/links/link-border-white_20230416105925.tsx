// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { LinkBaseProps } from './link-base';

const linkBorderWhite: React.FC<LinkBaseProps> = ({ className, ...rest }) => {
    const baseClasses = 'py-1 text-white bg-white hover:bg-yellow-40 border-2 border-white border';

    return <LinkBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default linkBorderWhite;
