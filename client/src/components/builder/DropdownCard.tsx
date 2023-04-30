import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DropdownBoutton } from './DropdownBoutton';

interface DropdownProps {
    titre : string,
    options : string[];
}

export const Dropdown = ( {titre, options} : DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block w-auto text-xl mx-[1vw]">
      <div>
        <Menu.Button className="rounded-xl bg-neutral-800  w-full md:w-auto md:px-16 py-2  font-semibold text-stone-200  shadow-2xl shadow-neutral-900 drop-shadow-xl hover:scale-105  transition">
          {titre}
          {/*<ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
        </Menu.Button>
      </div>

      <Transition 
      as={Fragment} 
      enter="transition ease-out duration-200" 
      enterFrom="transform opacity-0 scale-95" 
      enterTo="transform opacity-100 scale-100" 
      leave="transition ease-in duration-200" 
      leaveFrom="transform opacity-100 scale-100" 
      leaveTo="transform opacity-0 scale-95">
        <Menu.Items className=" p-1 absolute right-0 z-10 mt-2 w-full origin-top rounded-xl text-stone-200 shadow-2xl  bg-neutral-800 shadow-neutral-900 drop-shadow-xl">
          <div className="p-2">
                {options.map((option : string) => (
                    <DropdownBoutton option={option}/>
                ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}