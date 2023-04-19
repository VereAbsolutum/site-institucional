import React from 'react';
import { TextBase } from '..';
import { TextBaseProps } from './text-base';

const textMenu: React.FC<TextBaseProps> = ({ children, className, ...rest }) => {
    const baseClasses = 'text-lg font-500';

    return (
        <TextBase className={baseClasses} {...rest}>
            {children}
        </TextBase>
    );
};

export default textMenu;