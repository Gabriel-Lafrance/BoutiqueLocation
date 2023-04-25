
import React from "react";
import { Parallax } from "react-parallax";
import { BackgroundImg2 } from "src/constans/background";


const Footer = () => {

    const nbBackground = BackgroundImg2.length;

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
            <Parallax bgImage={BackgroundImg2[index].background} bgClassName="object-contain top-12 " strength={300}>
                <div className=" flex flex-col text-white text-center w-full h-[60vw] ">
                        <span className=" text-[4vw] font-bold sm:mt-[30%] mt-[40%] drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] ">Pour vos location de luxe, Super-Loc</span>
                </div>
            </Parallax>
            <div className=" bg-neutral-800 h-[24rem] w-full shadow-monShadow shadow-neutral-900 drop-shadow-xl">
            </div>
        </div>

    );
}

export default Footer;