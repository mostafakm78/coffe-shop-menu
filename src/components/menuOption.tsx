'use client'

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function MenuOption() {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
        <div className="bg-gray-300 w-full h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-evenly items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                <div className='flex md:flex-row flex-col items-center'>
                <span className='text-xl mb-2 md:mb-0 md:ml-4'>نوشیدنی</span>
                <Button
                onClick={open}
                className="rounded-md bg-gray-800 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                جزيیات
                </Button>
                </div>
                <img src="../image/4212NEW.jpg" className="h-20 rounded-full"/>
        </div>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className='fixed inset-0 bg-black/50'></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-gray-800 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                جزيیات نوشیدنی
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                این نوشیدنی شامل این ترکیبات میشود
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  بستن
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
