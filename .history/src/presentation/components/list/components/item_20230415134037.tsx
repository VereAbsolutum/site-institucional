import React, { ReactNode } from 'react';
import { TextCaption } from '../..';

export type Item = {
    value: ReactNode
}

const Item: React.FC<Item> = ({ value }) => {
    return (
        <li className='list-none flex items-center mb-1'>
            <TextCaption>
                {value}
            </TextCaption>
        </li>
    );
};

export default Item;