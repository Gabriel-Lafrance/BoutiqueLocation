import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../builder/DropdownCard";
import { clearFiltreAnnee, clearFiltreMarque } from "src/store";
import axios from "axios";
import { Loading} from "../section/Loading";
import { Erreur } from "../section/Erreur";
import { InventaireContenu } from "../section/Inventaire/InventaireContenu";
import { listeFiltreAnnee, listeFiltreMarque } from "src/constans/filtre";

type VoitureProps = {
    id : number,
    couleur : string,
    disponible : boolean,
    prixJour: number,
    prixWeekend: number,
    nom: string,
    marque : string,
    annee : string,
    puissance : number,
    acceleration : number,
}


export const Inventaire = () => {
    
    const filtreAnnee = useSelector((state : any) => state.filtreAnnee.value);
    const filtreMarque = useSelector((state : any) => state.filtreMarque.value);
    const resultat = useSelector((state : any) => state.nbResultat.value);

    const [lesVoitures,setVoitures] = React.useState<VoitureProps[] | undefined>();
    const [error,setError] = React.useState<boolean>(false);
    const [loading,setLoading] = React.useState<boolean>(true);

    const dispatch = useDispatch();

    async function fetchVoitures(){
        try {
            const result = await axios.get('api/get/voitures');
            setLoading(false);
            setVoitures(result.data);
        } catch(error){
            console.log(error);
            setLoading(false);
            setError(true);
        }
    }

    React.useEffect(() => { 
        fetchVoitures();
      },[]);

    return (
        <main className=" bg-stone-200  h-fit  flex flex-col text-neutral-800 " >
            <div className="mt-32 mx-8">
                <div className="block sm:flex sm:flex-row sm:justify-between mx-8">
                    <h1  className="font-bold GrosseurTitre ">Notre Inventaire : </h1>
                    <span className=" font-semibold GrosseurSousTitre sm"> Résulats : {resultat} </span>
                </div>
                <div className="mt-2 mb-2 w-full h-1 text-xl rounded-full  bg-neutral-800 m-auto"/>
                <div className=" flex flex-col h-48 md:h-auto md:flex-row justify-around md:justify-end">
                    <Dropdown titre={listeFiltreAnnee.titre + " : " + filtreAnnee} options={listeFiltreAnnee.options} />
                    <Dropdown titre={listeFiltreMarque.titre + " : " + filtreMarque} options={listeFiltreMarque.options} />
                     <div className="relative inline-block w-auto text-xl md:mx-2">
                        <button onClick={() => {
                            dispatch(clearFiltreAnnee()); 
                            dispatch(clearFiltreMarque());
                        }}
                        className="rounded-xl bg-neutral-800  w-full md:w-auto md:px-8 py-2
                        font-semibold text-stone-200  shadow-2xl shadow-neutral-900 drop-shadow-xl hover:scale-105  transition">
                        Toutes afficher
                        </button>
                    </div>
                </div>
                <div className="mt-4 flex flex-col">
                    {loading && <Loading/>}
                    {error ? 
                    <Erreur code="Impossible de rejoindre le serveur"/> :
                    <InventaireContenu  listeVoitures={lesVoitures}/>}
                </div>
            </div>
        </main>
    );
}
