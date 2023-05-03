type StatProps = {
    type : string,
    resultat : string,
    emoji : string
}

export const StatCard = ( props : StatProps) => {
    return (
        <div className=" my-16 sm:mt-4 w-[90%] h-[90%]">
            <div className="w-[90%] h-fit  text-center text-white bg-neutral-800 rounded-xl p-4 
                            shadow-2xl shadow-neutral-900 drop-shadow-xl block m-auto ml-1/2 hover:scale-105 hover:shadow-none transition-transform  delay-100">
                    <div className="my-4 md:mb-8 font-medium">
                        <span className="text-2xl block">{props.emoji}</span>
                        <span className="GrosseurTexteNormal  block">{props.type}</span>
                        <div className="mt-2 mb-2 w-[98%] h-1  rounded-full  bg-white m-auto"/>
                        <span className="GrosseurTexteNormal">{props.resultat}</span>
                    </div>
            </div>
        </div>
    )
}