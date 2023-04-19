import React from 'react';
import { PhoneIcon, HomeIcon } from '@heroicons/react/20/solid';

const footer = () => {
    return (
        <footer className="bg-yellow-40 text-black py-6">
            <div className="container mx-auto">
                <div className="">
                    <div className="flex justify-center">
                        <a href="#" className="mx-2">
                            <PhoneIcon className="w-6 h-6" />
                        </a>
                        <a href="#" className="mx-2">
                            <PhoneIcon className="w-6 h-6" />
                        </a>
                        <a href="#" className="mx-2">
                            <PhoneIcon className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="text-center">
                        <HomeIcon className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default footer;
