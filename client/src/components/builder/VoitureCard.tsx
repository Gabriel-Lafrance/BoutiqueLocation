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

// Je devrais leur mettre une image un jour :)
// Les prix sont en number pour Stripe.
// L'API Stripe utilise des nombres entier pour la facturation d'un produit. Ex 50000 = 500,00$: 

export const VoitureCard = (props : VoitureProps) => {

    function prixNumberAPrixString( argPrix : number) : string{
        let prixString : string = argPrix.toString();
        let decimal : string = prixString.substring(prixString.length - 2);
        let prix : string = prixString.substring(0,prixString.length - 2);
        return prix + "," + decimal;
    }
    
    return (
            <div className="text-stone-200 bg-neutral-800  w-80 h-96  rounded-xl p-4 mx-auto flex flex-col justify-around text-center text-xl">
                <span className="">{props.marque + " " + props.nom}</span>
                <span>{"Année : " + props.annee}</span>
                <span>{"Couleur : " + props.couleur}</span>
                <span>{"Acceleration 0-100 : " + props.acceleration +"s"}</span>
                <span>{"Puissance moteur : " + props.puissance + "hp"}</span>
                <span>{"Prix la semaine : " + prixNumberAPrixString(props.prixJour) +"$"}</span>
                <span>{"Prix le weekend : " + prixNumberAPrixString(props.prixWeekend) +"$"}</span>

             </div>
    );
}
