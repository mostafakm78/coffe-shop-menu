'use client'

import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { FC, useState } from 'react'



interface Props {
    span : string,
    details : string
}

const MenuOption : FC<Props> = ({
    span,
    details,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }



  return (
    <>
            <div className="bg-gray-300 dark:bg-gray-600 w-full p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-evenly items-center md:text-2xl text-xl hover:bg-gray-500 dark:hover:bg-gray-500 rounded-md shadow-md">
                    <div className="mx-auto w-full max-w-lg rounded-xl">
                        <Disclosure as="div" className="p-4" defaultOpen={false}>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                        <ChevronDownIcon className="size-6 fill-gray-800 dark:fill-gray-300 group-data-[hover]:fill-gray-300 dark:group-data-[hover]:fill-gray-800 group-data-[open]:rotate-180" />
                            <span className="text-xl font-medium text-gray-800 hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-800 group-data-[hover]:text-gray-300 dark:group-data-[hover]:text-gray-800">
                            {span}
                            </span>
                            <img src="../image/4212NEW.jpg" className="h-20 rounded-full"/>
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-base text-gray-800 dark:text-gray-300">
                            {details}
                        </DisclosurePanel>
                        </Disclosure>
                    </div>
            </div>
        </>
  )
}


export default MenuOption
