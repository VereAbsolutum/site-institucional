/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { FormInput, Input, InputRounded } from '../..'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const contact: React.FC = () => {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="isolate bg-blue px-6 py-24 sm:py-32 lg:px-8">
            {/* <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div> */}

            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <FormInput cols={2} label="First name" type="text" name="first-name" id="first-name" autoComplete="given-name" />
                    <FormInput cols={2} label="Last name" type="text" name="last-name" id="last-name" autoComplete="family-name" />
                    <FormInput label="Company" type="text" name="company" id="company" autoComplete="organization" />
                    <FormInput label="Email" type="email" name="email" id="email" autoComplete="email" />
                    <FormInput label="Phone number" type="tel" name="phone-number" id="phone-number" autoComplete="tel" />
                    <FormInput rows={4} className='col-span-2' label="Message" type="textarea" name="message" id="message" />
                </div>

                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    )
}

export default contact