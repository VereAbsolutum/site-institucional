import React from 'react'

// Definir tipos de botão
type ButtonType = 'yellow' | 'transparent-yellow' | 'black' | 'border-black'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType: ButtonType
    children: React.ReactNode
}

const createButton = (buttonType: ButtonType) => {
    const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
        const baseClasses =
            'py-2 px-4 text-white rounded-md transition-colors duration-200 ease-in-out font-medium'

        let specificClasses = ''

        switch (buttonType) {
            case 'yellow':
                specificClasses = 'bg-yellow-500 hover:bg-yellow-600'
                break
            case 'transparent-yellow':
                specificClasses = 'bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'
                break
            case 'black':
                specificClasses = 'bg-black hover:bg-gray-800'
                break
            case 'border-black':
                specificClasses = 'bg-transparent border border-black text-black hover:bg-black hover:text-white'
                break
        }

        const classes = `${baseClasses} ${specificClasses}`

        return (
            <button className={classes} {...props}>
                {children}
            </button>
        )
    }

    return Button
}

export default createButton
