import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textHeading2: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-lg font-medium';

    return (
        <TextBase className={baseClasses}>
            {children}
        </TextBase>
    );
};

export default textHeading2;