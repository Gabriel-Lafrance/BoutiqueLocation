import { Bapteme } from "../section/Services/Bapteme";
import { Nettoyage } from "../section/Services/Nettoyage";
import { Tuning } from "../section/Services/Tuning";
import * as Tabs from '@radix-ui/react-tabs';


export const Services = () => {
    
    return (
        <main className=" bg-stone-200  h-fit  w-full  flex flex-col text-neutral-800 " >
        <Tabs.Root defaultValue="tab1" className="w-4/5 my-16  mx-auto bg-neutral-800 ShadowNoir rounded-xl">
            <Tabs.List aria-label="tabs example" className="text-neutral-800  w-full my-16 flex flex-col sm:flex-row justify-center">
                <Tabs.Trigger value="tab1" className="GrosseurTitre mx-auto BoutonTabs">Baptêmes</Tabs.Trigger>
                <Tabs.Trigger value="tab2" className="GrosseurTitre mx-auto BoutonTabs">Nettoyages</Tabs.Trigger>
                <Tabs.Trigger value="tab3" className="GrosseurTitre mx-auto BoutonTabs">Tunings</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1"><Bapteme/></Tabs.Content>
            <Tabs.Content value="tab2"><Nettoyage/></Tabs.Content>
            <Tabs.Content value="tab3"><Tuning/></Tabs.Content>
        </Tabs.Root>
        </main>
    );
}
