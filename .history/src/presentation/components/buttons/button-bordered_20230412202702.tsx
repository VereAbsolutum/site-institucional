// BorderedButton.tsx
import React from 'react';
import { ButtonBase } from '..';
import { ButtonProps } from './button-base';

const buttonBordered: React.FC<ButtonProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-1 border-yellow bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500';

    return <ButtonBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default buttonBordered;
