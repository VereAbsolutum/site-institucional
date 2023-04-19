// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { LinkBaseProps } from './link-base';

const linkBorderWhite: React.FC<LinkBaseProps> = ({ className, ...rest }) => {
    const baseClasses = 'py-1 text-white  bg-transparent hover:bg-white-40 border-2 border-white border';

    return <LinkBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default linkBorderWhite;
