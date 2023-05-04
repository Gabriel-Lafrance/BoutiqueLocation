type VoitureProps = {
    id : number,
    couleur : string,
    disponible : boolean,
    prixJour: number,
    prixWeekend: number,
    marque: string,
    nom : string,
    annee : string,
    puissance : number,
    acceleration : number,
}

export const VoitureCard = (props : VoitureProps) => {
    
    return (
        <div className="m-auto">
            <div className="text-stone-200 bg-neutral-800 w-64 h-64 mb-4 rounded-xl p-4 ">
                <span className="">{props.marque + " " + props.nom + " " + props.annee + " " + props.couleur}</span>
             </div>
        </div>

    );
}
