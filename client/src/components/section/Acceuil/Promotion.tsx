import { Promo as lesPromos } from "src/constans/promo"
import { PromoCard } from "../../builder/PromoCard"

type PromoProps = {
    sujet : string,
    reduction : string
}


const Promotion = () => {
    
    return (
        <div className="pt-16 bg-stone-200 h-fit pb-16">
                    <h2 className="mt-4 mb-6 text-center text-neutral-800 GrosseurTitre font-semibold">Nos promotion du mois :  </h2>
                    <div className="mt-2 mb-2 w-[90%] h-1  rounded-full  bg-neutral-800 m-auto"/>
                    <div className=" w-[90%] block mx-auto mt-16">
                        <div className=" w-full m-auto inline-grid  place-items-center  grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 ">
                            {lesPromos.map((promo : PromoProps) => (
                                <PromoCard sujet={promo.sujet} reduction={promo.reduction}/>
                            ))}
                        </div> 
                    </div>
        </div>
    );
}

export default Promotion;