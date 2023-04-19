import React, { ReactNode } from 'react'
import { TextCaption } from '..'
import Item from './components/'

export type ListProps = {
    items: string[]
}

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <ul>
            {items && items.map((item, index) =>
                <Item key={index} value={item} />
            )}
        </ul>
    )
}

export default List