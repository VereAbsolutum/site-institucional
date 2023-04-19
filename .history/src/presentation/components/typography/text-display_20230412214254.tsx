import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textDisplay: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-lg font-medium';

    return (
        <TextBase>
            {children}
        </TextBase>
    );
};

export default textDisplay;