
import { baptheme as lesBaptheme } from "src/constans/bapteme";
import React from "react";
import { TbCircleDotFilled } from "react-icons/tb";
import { usePrixNumberAPrixString } from "src/hooks/usePrixNumberAPrixString";

type BapthemeProps = {
    piste : string,
    date: string,
    histoire : string,
    prix : number,
    img : string,
}


export const Bapteme = () => {
    
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);


    const prevImage = () => {
        let estPremiereIndex = currentIndex === 0;
        let nouvelleIndex = estPremiereIndex ? lesBaptheme.length -1 : currentIndex - 1;
        setCurrentIndex(nouvelleIndex);
    }

    const nextImage = () => {
        let estDerniereIndex = currentIndex === lesBaptheme.length - 1;
        let nouvelleIndex = estDerniereIndex ? 0 : currentIndex + 1;
        setCurrentIndex(nouvelleIndex);
    }

    return (
        <div className=" bg-stone-200 h-fit flex flex-col mx-auto w-full rounded-b-xl">
            <h2 className="my-8 text-center text-neutral-800 GrosseurTitre font-semibold">Nos bapthêmes sur circuit : </h2>
            <div className="my-4 w-4/5 h-1  rounded-full  bg-neutral-800 m-auto"/>
            <div className="w-3/4 h-fit min-w-[12rem] block mx-auto">
                <img src={lesBaptheme[currentIndex].img} alt=""  className="rounded-xl ShadowNoir"/>
            </div>
            <div className="flex  justify-center">
                {lesBaptheme.map((element : BapthemeProps, index : number) => (
                    <TbCircleDotFilled  onClick={ () => setCurrentIndex(index)} size={"2rem"} className="HoverScale105 cursor-pointer mx-2 my-8 text-neutral-800 ShadowNoir "/>
                ))}
            </div>
            <div className="bg-neutral-800  w-3/4 min-w-[14rem] mb-12 m-auto h-auto p-4 rounded-xl text-center text-white ShadowNoir">
                <h3 className="GrosseurSousTitre block my-4">{lesBaptheme[currentIndex].piste}</h3>
                <div className="mt-2 mb-2 w-[90%] h-1  rounded-full  bg-stone-200 m-auto"/>
                <div className=" flex flex-col md:flex-row GrosseurSousTitre justify-center my-4">
                    <span>Prix du bathême : </span>
                    <h3 className="GrosseurSousTitre ml-2">{usePrixNumberAPrixString(lesBaptheme[currentIndex].prix) + "$"}</h3>
                </div>
                <div className=" flex flex-col md:flex-row GrosseurSousTitre justify-center my-4">
                    <span>Disponible du :</span>
                    <h3 className="GrosseurSousTitre ml-2">{lesBaptheme[currentIndex].date}</h3>
                </div>
                <div className="mt-2 mb-2 w-[90%] h-1  rounded-full  bg-stone-200 m-auto"/>
                <span className="GrosseurSousTitre block my-4"> {lesBaptheme[currentIndex].histoire}</span>
            </div>


        </div>
    );
}