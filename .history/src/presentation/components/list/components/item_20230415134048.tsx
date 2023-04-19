import React, { ReactNode } from 'react';
import { TextCaption } from '../..';

export type Item = {
    value: ReactNode
}

const Item: React.FC<Item> = ({ value }) => {
    return (
        <li className='list-none flex items-center mb-1'>
            <svg className="w-4 h-4 mr-2 text-green-500 h-[1.35rem]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z"></path>
            </svg>
            <TextCaption>
                {value}
            </TextCaption>
        </li>
    );
};

export default Item;