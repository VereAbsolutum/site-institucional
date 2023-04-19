import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textParagraphSmall: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-md font-medium';

    return (
        <TextBase className={baseClasses}>
            {children}
        </TextBase>
    );
};

export default textParagraphSmall;