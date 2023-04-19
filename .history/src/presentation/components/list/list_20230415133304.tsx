import React, { ReactNode } from 'react'
import Item from './components/item'

export type ListBaseProps = {
    items: ReactNode[]
}

const listBase: React.FC<ListBaseProps> = ({ items }) => {
    return (
        <ul className='list-none'>
            {items && items.map((item, index) =>
                <Item key={index} value={item} />
            )}
        </ul>
    )
}

export default listBase