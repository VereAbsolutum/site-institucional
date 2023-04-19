import React, { ReactNode } from 'react';

export type Item = {
    value: ReactNode
}

const Item: React.FC<Item> = ({ value }) => {
    return (
        <li className='list-none flex items-center mb-1'>
            {value}
        </li>
    );
};

export default Item;