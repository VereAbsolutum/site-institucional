import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textHeading3: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-xl font-semibold';

    return (
        <TextBase className={baseClasses}>
            {children}
        </TextBase>
    );
};

export default textHeading3;