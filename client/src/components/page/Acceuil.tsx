import { BackgroundImg }from "../../constans/background";
import  { Stats }  from "../section/Acceuil/Stats"
import { Promotion } from "../section/Acceuil/Promotion";
import { Recommendation } from "../section/Acceuil/Recommendation";
import { Parallax } from "react-parallax";
import React from "react";

export const Acceuil = () => {

    const nbBackground = BackgroundImg.length;

    const [index, setIndex] = React.useState(RandomInt(RandomInt(0,nbBackground),nbBackground));

    React.useEffect(() =>{
        const interval = setInterval(() => {
            setIndex(RandomInt(RandomInt(0,nbBackground),nbBackground));
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    function RandomInt(min : number, max :number) : number { 
        return Math.floor(Math.random() * (max - min) + min )
      }
    
    return (
        <main className=" bg-stone-200">
            <Promotion/>
            <Recommendation/>
            <Stats/>
        </main>

    );
}
