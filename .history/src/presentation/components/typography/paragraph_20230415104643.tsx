import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textParagraph: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-base font-300 text-black';

    return (
        <TextBase style={{ color: '#2e475d' }} className={`${baseClasses} ${className}`} {...rest}>
            {children}
        </TextBase>
    );
};

export default textParagraph;