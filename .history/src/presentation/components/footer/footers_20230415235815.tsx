import React from 'react';
import { MailIcon, PhoneIcon, ChatIcon, HomeIcon } from '@heroicons/react/outline';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto">
                <div className="grid grid-rows-2 grid-cols-1 items-center gap-6">
                    <div className="flex justify-center">
                        <a href="#" className="mx-2">
                            <MailIcon className="w-6 h-6" />
                        </a>
                        <a href="#" className="mx-2">
                            <PhoneIcon className="w-6 h-6" />
                        </a>
                        <a href="#" className="mx-2">
                            <ChatIcon className="w-6 h-6" />
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

export default Footer;
