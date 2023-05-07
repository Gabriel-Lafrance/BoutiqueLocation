
import { baptheme as lesBaptheme } from "src/constans/bapteme";
import React from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
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
        <div className=" bg-stone-200 h-fit flex flex-col mx-auto w-4/5">
            <h2 className="mt-4 mb-6 text-center text-neutral-800 GrosseurTitre font-semibold">Nos bapthêmes sur circuit : </h2>
            <div className="mt-2 mb-2 w-full h-1  rounded-full  bg-neutral-800 m-auto"/>
            <div className="relative group mt-4">
                <div className="w-auto h-fit min-w-[12rem] block mx-auto">
                    <img src={lesBaptheme[currentIndex].img} alt=""  className="rounded-xl ShadowNoir"/>
                </div>
                <div onClick={prevImage} className="hidden group-hover:block absolute w-16 top-[45%] left-[1%] text-2xl rounded-full p-4 bg-neutral-800/80 text-white cursor-pointer  ShadowNoir HoverScale105 select-none">
                    <AiOutlineArrowLeft size={"2rem"}/>
                </div>
                <div onClick={nextImage} className="hidden group-hover:block absolute w-16 top-[45%]  right-[5%] text-2xl rounded-full p-4 bg-neutral-800/80 text-white cursor-pointer ShadowNoir HoverScale105 select-none">
                    <AiOutlineArrowRight size={"2rem"}/>
                </div>
            </div>
            <div className="flex  justify-center">
                {lesBaptheme.map((element : BapthemeProps, index : number) => (
                    <TbCircleDotFilled  onClick={ () => setCurrentIndex(index)} size={"2rem"} className="HoverScale105 cursor-pointer mx-2 my-8 text-neutral-800 ShadowNoir "/>
                ))}
            </div>
            <div className="bg-neutral-800  min-w-[14rem] mb-12 m-auto h-auto p-4 rounded-xl text-center text-white ShadowNoir">
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