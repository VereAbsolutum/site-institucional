import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textParagraphSmall: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-base font-medium';

    return (
        <TextBase className={baseClasses} {...rest}>
            {children}
        </TextBase>
    );
};

export default textParagraphSmall;