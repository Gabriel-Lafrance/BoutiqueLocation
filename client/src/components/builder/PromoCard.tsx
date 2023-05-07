import React from 'react';
import Countdown from 'react-countdown';

type PromoProps = {
    sujet : string,
    reduction : string,
    dateFin: string,
}

export const PromoCard = ( props : PromoProps) => {

    const [estFini,setEstFini] = React.useState<boolean>(false);



    return (
        <div className=" my-16 sm:mt-4 w-[90%] h-[90%]">
            <div className="w-[90%] h-fit  text-center text-white bg-neutral-800 rounded-xl p-4 
                            shadow-2xl shadow-neutral-900 drop-shadow-xl block m-auto ml-1/2 hover:scale-105  transition-transform">
                    <div className="my-4 md:mb-8 font-medium">
                        <div>
                            <span className="GrosseurTexteNormal  block">{props.sujet}</span>
                            <div className="my-4 mb-2 w-[98%] h-1  rounded-full  bg-white m-auto"/>
                            <span className="GrosseurTexteNormal">{props.reduction}</span>
                            <div className="my-4 w-[98%] h-1  rounded-full  bg-white m-auto"/>
                            {estFini ? 
                            <div className='GrosseurTexteNormal'>
                                <span>Désolé, mais cette promotion est fini</span>
                            </div>
                            : // Si le compteur est fini : 
                            <div className="GrosseurTexteNormal flex flex-col">
                                <span> Temps avant la fin de l'offre : </span>
                                <Countdown date={props.dateFin} onComplete={() => setEstFini(true)} />
                            </div> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}