// FilledButton.tsx
import React from 'react';
import { ButtonBase } from '..';
import { ButtonProps } from './button-base';

const FilledButton: React.FC<ButtonProps> = ({ className, ...rest }) => {
    const baseClasses = 'bg-blue-500 hover:bg-blue-700 text-lg font-medium';

    return <ButtonBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default FilledButton;
