import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textHeading1: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-lg font-medium';

    return (
        <TextBase className={baseClasses}>
            {children}
        </TextBase>
    );
};

export default textHeading1;