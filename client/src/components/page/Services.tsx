import { Fragment } from "react";
import { Bapteme } from "../section/Services/Bapteme";
import { Nettoyage } from "../section/Services/Nettoyage";
import { Protection } from "../section/Services/Protection";
import { Tab } from '@headlessui/react'


export const Services = () => {
    
    return (
        <main className=" bg-stone-200  h-fit  flex flex-col text-neutral-800 " >
            <div className="flex flex-col">
                <Tab.Group>
                <div className="w-full h-1  rounded-full  bg-neutral-800 m-auto"/>
                    <Tab.List className="flex flex-row justify-center w-full mx-auto  text-stone-200 py-4 ">
                    <Tab as={Fragment}>
                        {({ selected }) => (
                            <button className={selected ? 'BoutonTabsActif' : 'BoutonTabsRepos'}>
                            Bapthêmes
                            </button>
                        )}
                        </Tab>
                        <Tab as={Fragment}>
                        {({ selected }) => (
                            <button className={selected ? 'BoutonTabsActif' : 'BoutonTabsRepos'}>
                            Nettoyages
                            </button>
                        )}
                        </Tab>
                        <Tab as={Fragment}>
                        {({ selected }) => (
                            <button className={selected ? 'BoutonTabsActif' : 'BoutonTabsRepos'}>
                            Tunning
                            </button>
                        )}
                        </Tab>
                    </Tab.List>
                    <div className="w-full h-1  rounded-full  bg-neutral-800 m-auto mb-4"/>
                    <Tab.Panels>
                        <Tab.Panel><Bapteme/></Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </main>
    );
}
