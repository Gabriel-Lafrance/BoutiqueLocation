import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { VoitureCard } from "src/components/builder/VoitureCard";
import useDeepCompareEffect from 'use-deep-compare-effect'
import { updateNbResultat } from "src/store";


type listeVoitureProps = {
    listeVoitures : VoitureProps[] | undefined;
}

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

export const InventaireContenu = (props : listeVoitureProps) => {
    
    const filtreAnnee = useSelector((state : any) => state.filtreAnnee.value);
    const filtreMarque = useSelector((state : any) => state.filtreMarque.value);

    const dispatch = useDispatch();

    const [voituresFiltrer,setVoituresFiltrer] = React.useState<VoitureProps[] | undefined>(props.listeVoitures);

    function filtrer(){ 
        if (filtreAnnee === "Toutes" && filtreMarque === "Toutes"){
            setVoituresFiltrer(props.listeVoitures);
        }
        if (filtreAnnee !== "Toutes" && filtreMarque === "Toutes"){
            setVoituresFiltrer(props.listeVoitures?.filter( e => e.annee === filtreAnnee ));
        }
        if (filtreAnnee === "Toutes" && filtreMarque !== "Toutes"){
            setVoituresFiltrer(props.listeVoitures?.filter( e => e.marque === filtreMarque ));
        }
        if (filtreAnnee !== "Toutes" && filtreMarque !== "Toutes"){
            let tempVoituresFiltrer = props.listeVoitures?.filter( e => e.marque === filtreMarque );
            setVoituresFiltrer(tempVoituresFiltrer?.filter( e => e.annee === filtreAnnee));
        }
        dispatch(updateNbResultat(voituresFiltrer?.length)); 
    };

    useDeepCompareEffect(() =>{
            filtrer();
    },[filtrer])

    return (
    //<div className="grid  grid-flow-row-dense grid-cols-6 justify-center">
    <div className="flex flex-row items-start flex-wrap">
            {voituresFiltrer?.map((props : VoitureProps , index : number) => (
                <VoitureCard key={index} {...props}/>
            ))}
        </div>

    );
}
