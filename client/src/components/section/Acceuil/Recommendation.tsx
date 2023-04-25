import { Avis as lesAvis } from "src/constans/avis";
import { AvisCard } from "../../builder/AvisCard"

type AvisProps = {
    nom : string,
    commentaire : string,
    rating : number
}

const Recommendation = () => {
    
    return (
        <div className="pt-16 bg-neutral-800 h-fit shadow-monShadow shadow-neutral-900 drop-shadow-xl">
                    <h2 className="mt-4 mb-6 text-center text-stone-200 GrosseurTitre font-semibold">Avis de nos clients :  </h2>
                    <div className="mt-2 mb-2 w-[90%] h-1  rounded-full  bg-stone-200 m-auto"/>
                    <div className=" w-[90%] block mx-auto mt-16">
                        <div className=" w-full m-auto inline-grid  place-items-center  grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 ">
                            {lesAvis.map((avis : AvisProps) => (
                                <AvisCard nom={avis.nom} commentaire={avis.commentaire} rating={avis.rating}/>
                            ))}
                        </div> 
                    </div>
        </div>

    );
}

export default Recommendation;