// FilledButton.tsx
import React from 'react';
import { ButtonBase } from '..';
import { ButtonProps } from './button-base';

const buttonPrimary: React.FC<ButtonProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-1 bg-blue-500 bg-yellow hover:bg-blue-700 hover:bg-opacity-75 text-lg font-medium';

    return <ButtonBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default buttonPrimary;
