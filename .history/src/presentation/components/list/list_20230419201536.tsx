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
            {items && items.reduce((acc, item, index) => {
                if (index < 3) {
                    <Item key={index} value={item.title} />
                }
                return acc;
            }, [])}
        </ul>
    )
}
export default List