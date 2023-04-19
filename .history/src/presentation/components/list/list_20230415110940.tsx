import React, { ReactNode } from 'react'

export type ListBaseProps = {
    children: ReactNode
}

const listBase: React.FC<ListBaseProps> = ({ children }) => {
    return (
        <ul className='list-none'>

        </ul>
    )
}

export default listBase