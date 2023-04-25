import { BackgroundImg }from "../../constans/background";
import { Parallax } from "react-parallax";
import React from "react";

type ParralaxProps = {
    texte : string,
}

export const ParralaxBackground = ( {texte} : ParralaxProps) => {

    const nbBackground = BackgroundImg.length;

    const [index, setIndex] = React.useState(0);

    React.useEffect(() =>{
        const interval = setInterval(() => {
            setIndex(RandomInt(RandomInt(0,nbBackground),nbBackground));
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    function RandomInt(min : number, max :number) : number { 
        return Math.floor(Math.random() * (max - min) + min)
      }

    return (
        <>
            <Parallax bgImage={BackgroundImg[index].background} bgClassName="object-contain -top-[12rem] -bot-[12rem]" strength={300}>
                <div className=" flex flex-col text-white text-center w-full   h-[60vw] ">
                        <span className=" text-[4vw] font-bold mt-[10%] drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] ">{texte}</span>
                </div>
            </Parallax>
        </>
    )
}