import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textDisplay: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-2xl font-medium';

    return (
        <TextBase className={baseClasses}>
            {children}
        </TextBase>
    );
};

export default textDisplay;