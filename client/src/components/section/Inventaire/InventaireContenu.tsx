import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { VoitureCard } from "src/components/builder/VoitureCard";
import { updateNbResultat } from "src/store";
import { useFetch } from "src/hooks/useFetch";
import { Erreur } from "../Erreur";
import { Loading } from "../Loading";


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

export const InventaireContenu = () => {
    
    const filtreAnnee = useSelector((state : any) => state.filtreAnnee.value);
    const filtreMarque = useSelector((state : any) => state.filtreMarque.value);

    const dispatch = useDispatch();

    const {data, error, loading} = useFetch('api/get/voitures');

    const [voituresFiltrer,setVoituresFiltrer] = React.useState<VoitureProps[] | undefined>();

    function filtrer() { 
        setVoituresFiltrer(() => {
            let tempVoituresFiltrer;
            if (filtreAnnee === "Toutes" && filtreMarque === "Toutes"){
                tempVoituresFiltrer = data;
            }
            if (filtreAnnee !== "Toutes" && filtreMarque === "Toutes"){
                tempVoituresFiltrer = data.filter( (e: VoitureProps) => e.annee === filtreAnnee );
            }
            if (filtreAnnee === "Toutes" && filtreMarque !== "Toutes"){
                tempVoituresFiltrer = data.filter( (e: VoitureProps) => e.marque === filtreMarque );
            }
            if (filtreAnnee !== "Toutes" && filtreMarque !== "Toutes"){
                let tempVoituresFiltrer2 = data.filter( (e: VoitureProps) => e.marque === filtreMarque );
                tempVoituresFiltrer = tempVoituresFiltrer2?.filter( (e: VoitureProps) => e.annee === filtreAnnee);
            }
            dispatch(updateNbResultat(tempVoituresFiltrer?.length))
            return tempVoituresFiltrer;
    });
    };

    React.useEffect(() => {
        filtrer();
    }, [filtreAnnee,filtreMarque,data]);

    return (
            <div className=" GridInventaire">
                    {loading && <Loading/>}
                    {error ? 
                    <Erreur code="Impossible de rejoindre le serveur"/> :
                    voituresFiltrer?.map((props : VoitureProps , index : number) => (
                    <VoitureCard key={index} {...props}/>
                ))}
            </div>
    );
}
