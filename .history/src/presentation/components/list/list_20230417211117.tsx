import React, { ReactNode } from 'react'
import { TextCaption } from '..'
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
            {items && items.map((item, index) =>
                <Item key={index} value={item.title} />
            )}
        </ul>
    )
}

export default List