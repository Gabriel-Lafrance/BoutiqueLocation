import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../builder/DropdownCard";
import { clearFiltreAnnee, clearFiltreDisponible, clearFiltreMarque } from "src/store";
import { InventaireContenu } from "../section/Inventaire/InventaireContenu";
import { listeFiltreAnnee, listeFiltreDisponible, listeFiltreMarque } from "src/constans/filtre";

export const Inventaire = () => {
    
    const filtreAnnee = useSelector((state : any) => state.filtreAnnee.value);
    const filtreMarque = useSelector((state : any) => state.filtreMarque.value);
    const filtreDisponible = useSelector((state : any) => state.filtreDisponible.value);
    const resultat = useSelector((state : any) => state.nbResultat.value);

    const dispatch = useDispatch();

    return (
        <main className=" bg-stone-200  h-fit  flex flex-col text-neutral-800 " >
            <div className="mt-32 mx-8">
                <div className="block sm:flex sm:flex-row sm:justify-between mx-8">
                    <h1  className="font-bold GrosseurTitre ">Notre Inventaire : </h1>
                    <span className=" font-semibold GrosseurSousTitre sm"> Résulats : {resultat} </span>
                </div>
                <div className="mt-2 mb-2 w-full h-1 text-xl rounded-full  bg-neutral-800 m-auto"/>
                <div className=" flex flex-col h-48 md:h-auto md:flex-row justify-around md:justify-center  items-center">
                    <Dropdown titre={listeFiltreDisponible.titre + " : " + filtreDisponible} options={listeFiltreDisponible.options} />
                    <Dropdown titre={listeFiltreAnnee.titre + " : " + filtreAnnee} options={listeFiltreAnnee.options} />
                    <Dropdown titre={listeFiltreMarque.titre + " : " + filtreMarque} options={listeFiltreMarque.options} />
                    <button onClick={() => {
                            dispatch(clearFiltreAnnee()); 
                            dispatch(clearFiltreMarque());
                            dispatch(clearFiltreDisponible());
                        }}
                        className="rounded-xl bg-neutral-800 w-80  text-xl md:w-auto md:px-8 py-2 mx-2
                        font-semibold text-stone-200  shadow-2xl shadow-neutral-900 drop-shadow-xl hover:scale-105  transition">
                        Tout afficher
                    </button>
                </div>
                <div className="my-8 flex flex-col">
                    <InventaireContenu/>
                </div>
            </div>
        </main>
    );
}
