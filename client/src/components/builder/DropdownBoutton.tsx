import { Menu } from '@headlessui/react'

export const DropdownBoutton = ( option : string) => {
    
    return (
        <Menu.Item>
        {({ active }) => (
          <a href="#" type="submit" className={active ? 
          'bg-gray-100 text-gray-900 block w-full px-4 py-2 text-left text-sm' : 
          'text-gray-700 block w-full px-4 py-2 text-left text-sm'}>
            {option}
          </a>
        )}
      </Menu.Item>
    );
}

