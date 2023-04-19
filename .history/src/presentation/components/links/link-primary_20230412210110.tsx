// FilledButton.tsx
import React from 'react';
import { LinkBase } from '..';
import { ButtonProps } from './button-base';

const FilledButton: React.FC<ButtonProps> = ({ className, ...rest }) => {
    const baseClasses = 'px-4 py-1 bg-blue-500 bg-yellow hover:bg-blue-700 text-lg font-medium';

    return <AnchorBase className={`${baseClasses} ${className}`} {...rest} />;
};

export default FilledButton;
