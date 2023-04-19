// src/components/ContentWrapper.tsx

import React, { ReactNode } from 'react';

interface Content50Props {
    children: ReactNode;
}

const content50: React.FC<Content50Props> = ({ children }) => {
    return <div className="md:w-1/2 p-4">{children}</div>;
};

export default content50;
