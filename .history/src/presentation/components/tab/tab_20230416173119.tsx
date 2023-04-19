// Tab.tsx
import React from 'react';

export type TabProps = {
    title: string;
    active: boolean;
    onClick: () => void;
}

const tab: React.FC<TabProps> = ({ title, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 font-semibold ${active ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
                }`}
        >
            {title}
        </button>
    );
};

export default tab;
