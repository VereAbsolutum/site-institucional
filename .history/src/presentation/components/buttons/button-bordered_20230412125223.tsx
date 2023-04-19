// BorderedButton.tsx
import React from 'react';
import { ButtonBase } from '..';
import { ButtonProps } from './button-base';

const BorderedButton: React.FC<ButtonProps> = ({ className, ...rest }) => {
    const baseClasses = 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white';

    return <ButtonBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default BorderedButton;
