type StatProps = {
    type : string,
    resultat : string,
    emoji : string
}

export const StatCard = ( {type,resultat,emoji} : StatProps) => {
    return (
        <div className="mt-8 mx-2 h-48 md:h-[18rem] w-96 md:w-64 flex flex-col text-center text-white bg-neutral-700 rounded-xl p-4 drop-shadow-xl shadow-inner shadow-white justify-center">
                <div className="mb-4 md:mb-8 inline-block font-medium">
                    <span className="text-2xl block">{emoji}</span>
                    <span className="GrosseurTexteNormal  block">{type}</span>
                    <div className="mt-2 mb-2 w-[98%] h-1  rounded-full  bg-white m-auto"/>
                    <span className="GrosseurTexteNormal">{resultat}</span>
                </div>
        </div>
    )
}