// src/components/ContainerFlex.tsx

import React, { ReactNode } from 'react';

interface ContainerFlexProps {
    children: ReactNode;
}

const containerFlex: React.FC<ContainerFlexProps> = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            {children}
        </div>
    );
};

export default containerFlex;
