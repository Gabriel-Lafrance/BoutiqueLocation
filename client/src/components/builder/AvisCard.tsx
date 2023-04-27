import { Rating } from "../builder/RatingCard"

type AvisProps = {
    nom : string,
    commentaire : string,
    rating : number
}

export const AvisCard = ( {nom,commentaire,rating} : AvisProps) => {
    return (
        <div className=" my-16 sm:mt-4 w-[90%] h-[90%]">
            <div className="w-[90%] h-fit  text-center text-neutral-800 bg-stone-200 rounded-xl p-4 
                            shadow-neutral-800 drop-shadow-xl block m-auto ml-1/2 shadow-inner hover:scale-105  transition-transform hover:shadow-none">
                    <div className="my-4 md:mb-8 font-medium">
                        <span className="text-2xl block">{nom}</span>
                        <Rating rating={rating}/>
                        <div className="mt-2 mb-2 w-[98%] h-1  rounded-full  bg-neutral-800 m-auto"/>
                        <span className="GrosseurTexteNormal">{commentaire}</span>
                    </div>
            </div>
        </div>
    )
}