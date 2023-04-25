type StatProps = {
    type : string,
    resultat : string,
    emoji : string
}

export const StatCard = ( {type,resultat,emoji} : StatProps) => {
    return (
        <div className="w-[90%] h-[90%]  mt-2 text-center text-white bg-neutral-800 rounded-xl p-4 drop-shadow-xl shadow-inner shadow-white block m-auto ml-1/2">
                <div className="mx-auto mb-4 md:mb-8 font-medium">
                    <span className="text-2xl block">{emoji}</span>
                    <span className="GrosseurTexteNormal  block">{type}</span>
                    <div className="mt-2 mb-2 w-[98%] h-1  rounded-full  bg-white m-auto"/>
                    <span className="GrosseurTexteNormal">{resultat}</span>
                </div>
        </div>
    )
}