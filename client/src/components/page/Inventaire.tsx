import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../builder/DropdownCard";
import { filtreAnnee, filtreMarque} from "src/constans/filtre";
import { clearFiltreAnnee, clearFiltreMarque } from "src/store";
import axios from "axios";
import Loading from "../section/Loading";
import Erreur from "../section/Erreur";
import VoitureCard from "../builder/VoitureCard";

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

const Inventaire = () => {
    
    const indexFiltreAnnee = useSelector((state : any) => state.filtreAnnee.value);
    const indexFiltreMarque = useSelector((state : any) => state.filtreMarque.value);

    const dispatch = useDispatch();

    const [nbResultat,setNbResultat] = React.useState<number>(0);
    const [lesVoitures,setData] = React.useState<VoitureProps[]>();
    const [error,setError] = React.useState<boolean>(false);
    const [loading,setLoading] = React.useState<boolean>(true);

    async function fetchVoitures(){
        try {
            const result = await axios.get('api/get/voitures/filtre/' + indexFiltreAnnee + '/' + indexFiltreMarque);
            setLoading(false);
            setLoading(result.data.count);
            setData(result.data);
            setNbResultat(Object.keys(result.data).length);
        } catch(error){
            console.log(error);
            setLoading(false);
            setError(true);
        }
    }

    React.useEffect(() => {
        async () => {
            const result = await fetchVoitures();
        }
      }, []);

    return (
        <main className=" bg-stone-200  h-[100rem]  flex flex-col text-neutral-800 " >
            <div className="mt-32 mx-8">
                <div className="block sm:flex sm:flex-row sm:justify-between mx-8">
                    <h1  className="font-bold GrosseurTitre ">Notre Inventaire : </h1>
                    <span className=" font-semibold GrosseurSousTitre sm"> Résulats : {nbResultat} </span>
                </div>
                <div className="mt-2 mb-2 w-full h-1 text-xl rounded-full  bg-neutral-800 m-auto"/>
                <div className=" flex flex-col h-48 md:h-auto md:flex-row justify-around md:justify-end">
                    <Dropdown titre={filtreAnnee.titre + " : " + indexFiltreAnnee} options={filtreAnnee.options} handleClick={() => fetchVoitures()}/>
                    <Dropdown titre={filtreMarque.titre + " : " + indexFiltreMarque} options={filtreMarque.options} handleClick={() => fetchVoitures()}/>
                    <div className="relative inline-block w-auto text-xl md:mx-2">
                        <button onClick={() => {
                            dispatch(clearFiltreAnnee()); 
                            dispatch(clearFiltreMarque())
                            fetchVoitures()}}
                            className="rounded-xl bg-neutral-800  w-full md:w-auto md:px-8 py-2
                            font-semibold text-stone-200  shadow-2xl shadow-neutral-900 drop-shadow-xl hover:scale-105  transition">
                        Réinitalliser
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    {loading && <Loading/>}
                    {error ? <Erreur code="Impossible de rejoindre le serveur"/> : 
                    <div>
                        {lesVoitures?.map((element : VoitureProps) => (
                                <VoitureCard  key={element.id} {...element}/>
                        ))}
                    </div>
                    
                    
                    
                    
                    
                    }
                </div>
            </div>
        </main>
    );
}

export default Inventaire;