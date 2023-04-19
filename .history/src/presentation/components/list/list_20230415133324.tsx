import React, { ReactNode } from 'react'
import Item from './components/item'

export type ListProps = {
    items: ReactNode[]
}

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <ul className='list-none'>
            {items && items.map((item, index) =>
                <Item key={index} value={item} />
            )}
        </ul>
    )
}

export default List