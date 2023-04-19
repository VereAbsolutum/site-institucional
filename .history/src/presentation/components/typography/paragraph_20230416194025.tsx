import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textParagraph: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-base';

    return (
        <TextBase className={`${baseClasses} ${className}`} {...rest}>
            {children}
        </TextBase>
    );
};

export default textParagraph;