// FilledButton.tsx
import React from 'react';
import buttonBase, { ButtonProps } from './button-base';

const FilledButton: React.FC<ButtonProps> = ({ className, ...rest }) => {
    const baseClasses = 'bg-blue-500 hover:bg-blue-700 text-white';

    return <Button className={`${baseClasses} ${className}`} {...rest} />;
};

export default FilledButton;
