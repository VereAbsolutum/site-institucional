import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textDisplay: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-3xl font-medium leading-tight';

    return (
        <TextBase className={`${baseClasses} ${className}`} {...rest}>
            {children}
        </TextBase>
    );
};

export default textDisplay;