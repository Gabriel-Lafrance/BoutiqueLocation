import * as React from 'react';
import { HashLink as Link} from "react-router-hash-link"
import logo from "../../assets/logo.png"

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
        </div>
        <div className={estActif && largeurEcran <= breakpoint ? "animate-drop-down w-full h-screen z-10": "hidden"}>
            <div className="w-full h-screen GrosseurTitre flex flex-col justify-around align-middle">
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenuBurger">Acceuil</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenuBurger">Inventaire</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenuBurger">Location</Link>
                    <Link smooth scroll={el => scrollOffset(el, 128)} to='#' className="BoutonMenuBurger">Services</Link>
                    <Link smooth scroll={el => scrollOffset(el, 192)} to='#' className="BoutonMenuBurger mb-48">Contact</Link>
            </div>
        </div>
    </header>
    );
}

export default Header;