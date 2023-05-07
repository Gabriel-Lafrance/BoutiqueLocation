import * as React from 'react';
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { BackgroundImg } from 'src/constans/background';
import { Parallax } from 'react-parallax';

export const Header = () => {

    var breakpoint : number = 940; {/* Width en pixel que le menu passe de normal à burger*/}

    const [estActif, setActif] = React.useState(false);

function Switch() {   {/* Switch On/Off pour l'ouverture/fermeture du menu Burger*/ }
        setActif(!estActif);
    }

    const [largeurEcran, setLargeurEcran] = React.useState(window.innerWidth); {/* Gère la resize pour détecter quand mettre le menu bruger */}

    React.useEffect(() => {
        const handleResize = () => {
            if (estActif){
                Switch();
            }
            setLargeurEcran(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })

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
        <>
        <header className="sticky top-0 z-10 text-zinc-700 text-center font-medium bg-neutral-800 h-fit w-auto flex flex-col shadow-monShadow shadow-neutral-900 drop-shadow-xl">
            <div className=" flex flex-row justify-between">
                <a href="https://github.com/Slimy992" target="_blank" className="ml-4">
                    <div className="flex flex-row h-full items-center text-stone-200 hover:scale-105 transition  duration-500">
                        <span className="GrosseurTitre font-semibold my-auto ">Super-Loc</span>
                        <img src={logo} className="m-2 w-16 h-auto object-contain "/>
                    </div>
                </a>
                <div className={largeurEcran > breakpoint ? "mt-5 ml-4" : "hidden w-0 h-0"}>
                    <div className="GrosseurTexteNormal flex flex-row justify-around align-middle items-center mr-4">
                        <Link  to='/Acceuil' className="BoutonMenu">Acceuil</Link>
                        <Link  to='/Inventaire' className="BoutonMenu">Inventaire</Link>
                        <Link  to='/Services' className="BoutonMenu">Services</Link>
                        <Link  to='/Contact' className="BoutonMenu">Contact</Link>
                    </div>
                </div >
                <div className={largeurEcran <= breakpoint ? " mr-6 mb-[1.6rem]" : " hidden w-0 h-0"}>
                        <div  onClick={Switch} className={estActif ? "tham-active tham tham-e-squeeze tham-w-10 mt-9 ml-8" : "tham tham-e-squeeze tham-w-10 mt-9 ml-8"}>
                            <div className="tham-box">
                                <div className="tham-inner bg-white " />
                            </div>
                        </div>
                </div>
            </div>
            <div className={estActif && largeurEcran <= breakpoint ? "animate-drop-down w-full h-screen z-10": "hidden"}>
                <div className="w-full h-screen GrosseurTitre flex flex-col justify-around align-middle">
                        <Link  to='/Acceuil' className="BoutonMenuBurger">Acceuil</Link>
                        <Link  to='/Inventaire' className="BoutonMenuBurger">Inventaire</Link>
                        <Link  to='/Services' className="BoutonMenuBurger">Services</Link>
                        <Link  to='/Contact' className="BoutonMenuBurger mb-48">Contact</Link>
                </div>
            </div>
        </header>
        <div className='bg-stone-200'>
        <Parallax bgImage={BackgroundImg[index].background} bgClassName="object-contain -top-[12rem]" strength={300}>
            <div className=" flex flex-col text-white text-center w-full h-[60vw] ">
                    <span className=" text-[4vw] font-bold mt-[20%] drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] ">Allez où vous le désirez, quand vous le désirez</span>
                    <p className=" text-[2vw] font-bold ] drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">Fier de vous servir depuis 1995</p>
            </div>
        </Parallax>
        </div>
        </>
    );
}
