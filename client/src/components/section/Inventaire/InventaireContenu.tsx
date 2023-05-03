import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { VoitureCard } from "src/components/builder/VoitureCard";
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

    let voituresFiltrer : VoitureProps[] | undefined = [];

    function filtrer(){
        if (filtreAnnee === "Toutes" && filtreMarque === "Toutes"){
            voituresFiltrer = props.listeVoitures;
        }
        if (filtreAnnee !== "Toutes" && filtreMarque === "Toutes"){
            voituresFiltrer = props.listeVoitures?.filter( e => e.annee === filtreAnnee )
        }
        if (filtreAnnee === "Toutes" && filtreMarque !== "Toutes"){
            voituresFiltrer = props.listeVoitures?.filter( e => e.marque === filtreMarque )
        }
        if (filtreAnnee !== "Toutes" && filtreMarque !== "Toutes"){
            let tempVoituresFiltrer = props.listeVoitures?.filter( e => e.marque === filtreMarque );
            voituresFiltrer = tempVoituresFiltrer?.filter( e => e.annee === filtreAnnee);
        }
        dispatch(updateNbResultat(voituresFiltrer?.length));
    };

    React.useEffect(() =>{
        filtrer();
        console.log(voituresFiltrer);
    },[filtreAnnee,filtreMarque,voituresFiltrer])

    return (
        <section className=" bg-stone-200">
                {voituresFiltrer.map((props : VoitureProps, index : number) => (
                    <VoitureCard key={index} {...props}/>
                ))}
        </section>

    );
}
