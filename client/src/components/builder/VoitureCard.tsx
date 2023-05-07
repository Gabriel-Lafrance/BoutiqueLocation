import { usePrixNumberAPrixString } from "src/hooks/usePrixNumberAPrixString";

type VoitureProps = {
    id : number,
    couleur : string,
    disponible : number,
    prixJour: number,
    prixWeekend: number,
    marque: string,
    nom : string,
    annee : string,
    puissance : number,
    acceleration : number,
}

// Je devrais leur mettre une image un jour :)
// Les prix sont en number pour Stripe.
// L'API Stripe utilise des nombres entier pour la facturation d'un produit. Ex 50000 = 500,00$: 

export const VoitureCard = (props : VoitureProps) => {
    
    return (
            <div className="text-stone-200 bg-neutral-800  w-80 h-96  rounded-xl p-4 mx-auto flex flex-col justify-around text-center text-2xl ShadowNoir HoverScale105">
                <span className="">{props.marque + " " + props.nom}</span>
                <span>{"Année : " + props.annee}</span>
                <span>{"Couleur : " + props.couleur}</span>
                <span>{"Acceleration 0-100 : " + props.acceleration +"s"}</span>
                <span>{"Puissance moteur : " + props.puissance + "hp"}</span>
                <span>{"Prix la semaine : " + usePrixNumberAPrixString(props.prixJour) +"$"}</span>
                <span>{"Prix le weekend : " + usePrixNumberAPrixString(props.prixWeekend) +"$"}</span>

             </div>
    );
}
