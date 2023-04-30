import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../builder/DropdownCard";
import { filtreAnnee, filtreMarque} from "src/constans/filtre";
import { clearFiltreAnnee, clearFiltreMarque } from "src/store";

const Inventaire = () => {
    
    const indexFiltreAnnee = useSelector((state : any) => state.filtreAnnee.value);
    const indexFiltreMarque = useSelector((state : any) => state.filtreMarque.value);

    const dispatch = useDispatch();

    return (
        <main className=" bg-stone-200  h-[100rem]  flex flex-col text-neutral-800 " >
            <div className="mt-32 mx-8">
                <div className="block sm:flex sm:flex-row sm:justify-between mx-8">
                    <h1  className="font-bold GrosseurTitre ">Notre Inventaire : </h1>
                    <span className=" font-semibold GrosseurSousTitre sm"> Résulats : 100 </span>
                </div>
                <div className="mt-2 mb-2 w-full h-1 text-xl rounded-full  bg-neutral-800 m-auto"/>
                <div className=" flex flex-col h-48 md:h-auto md:flex-row justify-around md:justify-end">
                    <Dropdown titre={filtreAnnee.titre + ": " + indexFiltreAnnee} options={filtreAnnee.options}/>
                    <Dropdown titre={filtreMarque.titre + ": " + indexFiltreMarque} options={filtreMarque.options}/>
                    <button onClick={() => {
                        dispatch(clearFiltreAnnee()); 
                        dispatch(clearFiltreMarque())}}
                        className="rounded-xl py-1 text-xl bg-neutral-800  w-full md:w-auto md:px-16 font-semibold text-stone-200  shadow-2xl shadow-neutral-900 drop-shadow-xl hover:scale-105  transition">
                    Réinitalliser
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Inventaire;