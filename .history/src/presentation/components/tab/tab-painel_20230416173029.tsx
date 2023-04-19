// TabPanel.tsx
import React, { ReactNode } from 'react';

interface TabPanelProps {
    active: boolean;
    children: ReactNode
}

const tabPanel: React.FC<TabPanelProps> = ({ active, children }) => {
    return <div className={`${active ? 'block' : 'hidden'}`}>{children}</div>;
};

export default tabPanel;
