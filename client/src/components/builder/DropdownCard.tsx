import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DropdownBoutton } from './DropdownBoutton';

interface DropdownProps {
    titre : string,
    options : string[];
}

export const Dropdown = ( props : DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block w-auto text-xl md:mx-2">
      <div>
        <Menu.Button className="rounded-xl relative bg-neutral-800  w-80  md:w-auto md:px-8 py-2  
                                font-semibold text-stone-200  shadow-2xl shadow-neutral-900 drop-shadow-xl hover:scale-105  transition">
          {props.titre}
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top rounded-xl text-stone-200 shadow-2xl  bg-neutral-800 shadow-neutral-900 drop-shadow-xl">
                {props.options.map((option : string, index : number) => (
                    <DropdownBoutton key={index} option={option}/>
                ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}