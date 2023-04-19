import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { PlayCircleIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Product } from './header-types'

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export type MainMenuProps = { products: Product[] }

const MainMenu: React.FC<MainMenuProps> = ({ products }) => {
    return (
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-lg  font-semibold  leading-6">
                    Produto
                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-sm bg-white shadow-lg ring-gray-900/5">
                        <div className="p-4">
                            {products.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div className="flex-auto">
                                        <a href={item.href} className="block font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray">  </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                            {callsToAction.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                >
                                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

            <a href="#" className="text-lg  font-semibold  leading-6 text-gray-900">
                Sobre
            </a>
            <a href="#" className="text-lg  font-semibold  leading-6 text-gray-900">
                Contato
            </a>
        </Popover.Group>
    )
}

export default MainMenu