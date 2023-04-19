import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textHeading1: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-2xl ont-semibold';

    return (
        <TextBase className={baseClasses}>
            {children}
        </TextBase>
    );
};

export default textHeading1;