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
import { ButtonPrimary, FormInput } from '../..'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const contact: React.FC = () => {
    // const [agreed, setAgreed] = useState(false)

    return (
        <div className="isolate px-6 lg:px-8">
            <form action="#" method="POST" className="mx-auto max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <FormInput cols={2} label="Nome" type="text" name="first-name" id="first-name" autoComplete="given-name" />
                    <FormInput cols={2} label="Sobrenome" type="text" name="last-name" id="last-name" autoComplete="family-name" />
                    <FormInput label="Empresa" type="text" name="company" id="company" autoComplete="organization" />
                    <FormInput label="Email" type="email" name="email" id="email" autoComplete="email" />
                    <FormInput label="Telefone" type="tel" name="phone-number" id="phone-number" autoComplete="tel" />
                    <FormInput rows={4} className='col-span-2' label="Message" type="textarea" name="message" id="message" />
                </div>

                <div className="mt-10">
                    <ButtonPrimary type='submit' className='py-3'>
                        Enviar a mensagem
                    </ButtonPrimary>
                </div>
            </form>
        </div>
    )
}

export default contact