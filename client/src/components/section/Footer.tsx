import React from "react";
import { Parallax } from "react-parallax";
import { BackgroundImg2 } from "src/constans/background";
import logo from "../../assets/logo.png"


export const Footer = () => {

    const nbBackground = BackgroundImg2.length;

    const [index, setIndex] = React.useState(RandomInt(RandomInt(0,nbBackground),nbBackground));
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
        <footer className=" bg-stone-200">
            <Parallax bgImage={BackgroundImg2[index].background} bgClassName="object-contain top-20 md:top-8 " strength={300}>
                <div className=" flex flex-col text-white text-center w-full h-[60vw] ">
                    <span className=" text-[4vw] font-bold sm:mt-[30%] mt-[40%] drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] ">Pour vos location de luxe, Super-Loc</span>
                    <p className="text-[2vw] font-bold ] drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">Le choix évident en matière de location</p>
                </div>
            </Parallax>
            <div className=" bg-neutral-800 h-fit w-full shadow-monShadow shadow-neutral-900 drop-shadow-xl flex flex-col text-center text-stone-200 py-8">
                <span className="GrosseurTexteNormal font-semibold">All right reserve &#169;</span>
                <div>
                    <span className="text-3xl font-semibold mt-7 ">Super-Loc</span>
                    <img src={logo} className="w-24 h-auto block m-auto  object-contain "/>
                </div>
            </div>
        </footer>

    );
}
