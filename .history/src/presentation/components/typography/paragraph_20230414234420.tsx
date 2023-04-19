import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textParagraph: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-base font-light';

    return (
        <TextBase className={baseClasses}>
            {children}
        </TextBase>
    );
};

export default textParagraph;