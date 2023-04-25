import { BackgroundImg }from "../constans/background";
import { Stats } from "../constans/stats";
import { Parallax } from "react-parallax";
import { StatCard } from "./builder/StatCard";
import React from "react";
import { ParralaxBackground } from "./builder/ParralaxBackground";

type StatProps = {
    type : string,
    resultat : string,
    emoji: string
}


const Presentation = () => {
    
    return (
        <div className=" bg-stone-200">
            <ParralaxBackground texte="Aller où vous le désirez. Quand vous le désirez"/>
            <div className="pb-16">
                <h2 className="mt-4 mb-6 text-center text-neutral-700 GrosseurTitre font-semibold"> Super-Loc en statistique : </h2>
                    <div className="mt-2 mb-2 w-96 md:w-[92%] h-1  rounded-full  bg-neutral-700 m-auto"/>
                    <div className="flex flex-col md:flex-row justify-around items-center center">
                        {Stats.map((stat : StatProps) => (
                            <StatCard type={stat.type} resultat={stat.resultat} emoji={stat.emoji}/>
                        ))}
                    </div> 
            </div>
        </div>

    );
}

export default Presentation;