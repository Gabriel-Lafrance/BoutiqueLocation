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
    disponible : number,
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
    const filtreDisponible = useSelector((state : any) => state.filtreDisponible.value);

    const dispatch = useDispatch();

    const {data, error, loading} = useFetch('api/get/voitures');

    const [voituresFiltrer,setVoituresFiltrer] = React.useState<VoitureProps[] | undefined>();

    function convertirDisponibleIntString( argInt : number ){
        if (argInt === 0){
            return "Indisponible";
        }
        if (argInt === 1){
            return "Disponible";
        }
        return "Toutes";
    }

    function filtrerAnnee( argListe : VoitureProps[] ) : VoitureProps[] {
        return argListe.filter( (e: VoitureProps) => e.annee === filtreAnnee );
    }

    function filtrerMarque( argListe : VoitureProps[] ) : VoitureProps[] {
        return argListe.filter( (e: VoitureProps) => e.marque === filtreMarque );
    }

    function filtrerDisponible( argListe : VoitureProps[] ) : VoitureProps[] {
        return argListe.filter( (e: VoitureProps) => convertirDisponibleIntString(e.disponible) === filtreDisponible );
    }

    function filtrer() { 
        setVoituresFiltrer(() => {
            let lesVoituresFiltrer : VoitureProps[] = data;
            if (filtreAnnee !== "Toutes"){
                lesVoituresFiltrer = filtrerAnnee(lesVoituresFiltrer);
            }
            if (filtreMarque !== "Toutes"){
                lesVoituresFiltrer = filtrerMarque(lesVoituresFiltrer);
            }
            if (filtreDisponible !== "Toutes"){
                lesVoituresFiltrer = filtrerDisponible(lesVoituresFiltrer);
            }
            dispatch(updateNbResultat(lesVoituresFiltrer?.length))
            return lesVoituresFiltrer;
        });
    };

    React.useEffect(() => {
        filtrer();
    }, [filtreAnnee,filtreMarque,filtreDisponible,data]);

    return (
            <div className="GridInventaire">
                    {loading && <Loading/>}
                    {error ? 
                    <Erreur code="Impossible de rejoindre le serveur"/> :
                    voituresFiltrer?.map((props : VoitureProps , index : number) => (
                    <VoitureCard key={index} {...props}/>
                ))}
            </div>
    );
}
