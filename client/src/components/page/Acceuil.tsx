import { BackgroundImg }from "../../constans/background";
import  Stats  from "../section/Acceuil/Stats"
import Promo from "../section/Acceuil/Promo";
import Recommendation from "../section/Acceuil/Recommendation";
import { Parallax } from "react-parallax";
import React from "react";

const Acceuil = () => {

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
        <div className=" bg-stone-200">
            <Parallax bgImage={BackgroundImg[index].background} bgClassName="object-contain -top-[12rem]" strength={300}>
                <div className=" flex flex-col text-white text-center w-full   h-[60vw] ">
                        <span className=" text-[4vw] font-bold mt-[20%] drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] ">Allez où vous le désirez, quand vous le désirez</span>
                </div>
            </Parallax>
            <Promo/>
            <Recommendation/>
            <Stats/>
        </div>

    );
}

export default Acceuil;