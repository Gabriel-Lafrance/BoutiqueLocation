import { Stats as lesStats } from "../../../constans/stats";
import { StatCard } from "../../builder/StatCard";

type StatProps = {
    type : string,
    resultat : string,
    emoji: string
}

const Stats = () => {
    return (
            <div className="py-16 h-auto w-[90%] block m-auto ">
                <h2 className="mt-4 mb-6 text-center text-neutral-800 GrosseurTitre font-semibold">Super-Loc en statistique : </h2>
                    <div className="mt-2 mb-2 w-full h-1  rounded-full  bg-neutral-800 m-auto"/>
                    <div className=" w-full m-auto inline-grid  place-items-center  grid-cols-1 grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 ">
                        {lesStats.map((stat : StatProps) => (
                            <StatCard type={stat.type} resultat={stat.resultat} emoji={stat.emoji}/>
                        ))}
                    </div> 
            </div>
    );
}

export default Stats;