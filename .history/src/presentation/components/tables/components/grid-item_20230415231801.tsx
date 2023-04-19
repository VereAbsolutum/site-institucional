import { HeartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { TextHeading1, TextParagraph } from '../..';

const ComponentName: React.FC = () => {
    return (
        <div>
            <p>
                <HeartIcon className="w-8 h-auto text-blue-500" />
            </p>
            <h3>
                <TextHeading1>11</TextHeading1>
            </h3>
            <p>
                <TextParagraph className="font-500">resolvidos</TextParagraph>
            </p>
        </div>
    );
};

export default ComponentName;