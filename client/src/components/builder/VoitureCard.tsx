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
        <main className=" bg-stone-200">
            {props.annee}/
            {props.couleur}/
            {props.disponible}/
            {props.id}/
            {props.marque}/
            {props.nom}/
            {props.acceleration}/
            {props.prixJour}/
            {props.prixWeekend}/
            {props.puissance}/
        </main>

    );
}
