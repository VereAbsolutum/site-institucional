import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textParagraph: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-base font-light';

    return (
        <TextBase style={{ color: '#2e475d' }} className={baseClasses}>
            {children}
        </TextBase>
    );
};

export default textParagraph;