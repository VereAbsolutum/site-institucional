import React, { ReactNode } from 'react';

interface FormInputProps {
    label: string;
    type: string;
    name: string;
    id: string;
    autoComplete?: string;
    className?: string;
    rows?: number;
    children?: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
    label,
    type,
    name,
    id,
    autoComplete,
    className,
    rows,
    children,
}) => (
    <div className={!rows ? 'sm:col-span-2' : ''}>
        <label htmlFor={id} className={`block text-sm font-semibold leading-6 text-gray-900 ${className}`}>
            {label}
        </label>
        <div className="mt-2.5">
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    id={id}
                    rows={rows}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
                    defaultValue={''}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    id={id}
                    autoComplete={autoComplete}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
                />
            )}
            {children}
        </div>
    </div>
);

export default FormInput;