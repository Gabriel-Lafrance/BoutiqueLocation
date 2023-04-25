import * as React from 'react';
import { HashLink as Link} from "react-router-hash-link"
import  logo  from "../assets/logo.png"

const Header = () => {

    var breakpoint : number = 940; {/* Width en pixel que le menu passe de normal à burger*/}

    const [estActif, setActif] = React.useState(false);

function Switch() {   {/* Switch On/Off pour l'ouverture/fermeture du menu Burger*/ }
        setActif(!estActif);
    }

    const [largeurEcran, setLargeurEcran] = React.useState(window.innerWidth); {/* Gère la resize pour détecter quand mettre le menu bruger */}

    React.useEffect(() => {
        console.log(largeurEcran);
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

    const scrollOffset = (el : any, offset : number) => {  {/* Gère le offset du scroll pour ""centrer le contenue au scroll*/ }
        const elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });    
    }

    return (
    <header className="sticky top-0 z-10 text-zinc-700 text-center  bg-neutral-700 h-fit w-auto flex flex-col shadow-monShadow shadow-neutral-900 drop-shadow-xl">
        <div className=" flex flex-row justify-between">
            <div className={largeurEcran > breakpoint ? "mt-5 ml-4" : "hidden w-0 h-0"}>
                <div className="GrosseurTexteNormal flex flex-row justify-around align-middle items-center mr-4">
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenu">Acceuil</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenu">Inventaire</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenu">Location</Link>
                    <Link smooth scroll={el => scrollOffset(el, 128)} to='#' className="BoutonMenu">Services</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenu">Contact</Link>
                </div>
            </div >
            <div className={largeurEcran <= breakpoint ? " mr-6 mb-[1.6rem]" : " hidden w-0 h-0"}>
                    <div  onClick={Switch} className={estActif ? "tham-active tham tham-e-squeeze tham-w-10 mt-9 ml-8" : "tham tham-e-squeeze tham-w-10 mt-9 ml-8"}>
                        <div className="tham-box">
                            <div className="tham-inner bg-white " />
                        </div>
                    </div>
            </div>
            <div className="flex flex-row justify-end mr-6 text-white">
                <span className="text-2xl font-semibold mt-7">Super-Loc</span>
                <a href="https://github.com/Slimy992" target="_blank" className="">
                    <img src={logo} className="m-2  w-24 h-[4.5rem] object-contain hover:scale-125 transition  duration-500"/>
                </a>
            </div>
        </div>
        <div className={estActif && largeurEcran <= breakpoint ? "animate-drop-down w-full h-screen": "hidden"}>
            <div className="w-full h-screen GrosseurTitre flex flex-col justify-around align-middle">
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenuBurger">Acceuil</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenuBurger">Inventaire</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenuBurger">Location</Link>
                    <Link smooth scroll={el => scrollOffset(el, 128)} to='#' className="BoutonMenuBurger">Services</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="mb-48 BoutonMenuBurger">Contact</Link>
            </div>
        </div>
    </header>
    );
}

export default Header;