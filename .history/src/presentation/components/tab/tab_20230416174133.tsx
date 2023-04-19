// Tab.tsx
import React from 'react';

export type TabProps = {
    title: string;
    active: boolean;
    onClick: () => void;
}

const tabButton: React.FC<TabProps> = ({ title, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 font-semibold px-8 ${active ? 'text-indigo-600 bg-black-500 border-indigo-600' : 'text-gray-600'
                }`}
        >
            {title}
        </button>
    );
};

export default tabButton;
