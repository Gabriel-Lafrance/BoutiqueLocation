type StatProps = {
    type : string,
    resultat : string,
    emoji : string
}

export const StatCard = ( {type,resultat,emoji} : StatProps) => {
    return (
        <div className=" my-16 sm:mt-4 w-[90%] h-[90%]">
            <div className="w-[90%] h-[90%]  text-center text-white bg-neutral-800 rounded-xl p-4 
                            shadow-monShadow shadow-neutral-900 drop-shadow-xl block m-auto ml-1/2 hover:scale-105  transition-transform">
                    <div className="my-4 md:mb-8 font-medium">
                        <span className="text-2xl block">{emoji}</span>
                        <span className="GrosseurTexteNormal  block">{type}</span>
                        <div className="mt-2 mb-2 w-[98%] h-1  rounded-full  bg-white m-auto"/>
                        <span className="GrosseurTexteNormal">{resultat}</span>
                    </div>
            </div>
        </div>
    )
}