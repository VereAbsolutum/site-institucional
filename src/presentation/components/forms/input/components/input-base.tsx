import React from 'react';

interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const inputBase: React.FC<InputBaseProps> = ({ label, id, ...props }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-semibold leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2.5">
                <input {...props} name={id} id={id} className="input-base" />
            </div>
        </div>
    );
};

export default inputBase;
