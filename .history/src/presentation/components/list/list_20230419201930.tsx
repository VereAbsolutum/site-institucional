import React from 'react'
import { Item } from './components'

export type ListProps = {
    items: {
        title: string,
        description: string
    }[]
}

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <ul>
            {items &&
                (() => {
                    const elements = [];
                    for (let i = 0; i < Math.min(items.length, 3); i++) {
                        elements.push(<Item key={i} value={items[i].title} />);
                    }
                    return elements;
                })()}
        </ul>
    );
};


export default List