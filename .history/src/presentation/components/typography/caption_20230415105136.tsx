import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textCapiton: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-xs font-500';

    return (
        <TextBase className={baseClasses} {...rest}>
            {children}
        </TextBase>
    );
};

export default textCapiton;