import { Dropdown } from "../builder/DropdownCard";
import { filtre } from "src/constans/filtre";

type DropdownProps = {
    titre : string,
    option : string[];
}


const Inventaire = () => {
    
    return (
        <main className=" bg-stone-200  h-[100rem]  flex flex-col text-neutral-800 " >
            <div className="mt-32 mx-8">
                <div className="block sm:flex sm:flex-row sm:justify-between mx-8">
                    <h1  className="font-bold GrosseurTitre ">Notre Inventaire : </h1>
                    <span className=" font-semibold GrosseurSousTitre sm"> Résulats : 100 </span>
                </div>
                <div className="mt-2 mb-2 w-full h-1  rounded-full  bg-neutral-800 m-auto"/>
                <div className=" flex flex-row justify-around sm:justify-end">
                    {filtre.map((e : DropdownProps) => (
                    <Dropdown titre={e.titre} options={e.option}/>
                ))}
                </div>
            </div>

        </main>
    );
}

export default Inventaire;