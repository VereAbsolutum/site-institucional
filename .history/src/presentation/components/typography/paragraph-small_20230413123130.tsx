import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textParagraphSmall: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-sm font-medium';

    return (
        <TextBase className={baseClasses} {...rest}>
            {children}
        </TextBase>
    );
};

export default textParagraphSmall;