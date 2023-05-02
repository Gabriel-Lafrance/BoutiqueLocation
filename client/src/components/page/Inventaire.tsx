import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../builder/DropdownCard";
import { filtreAnnee, filtreMarque} from "src/constans/filtre";
import { clearFiltreAnnee, clearFiltreMarque } from "src/store";


const Inventaire = () => {
    
    const indexFiltreAnnee = useSelector((state : any) => state.filtreAnnee.value);
    const indexFiltreMarque = useSelector((state : any) => state.filtreMarque.value);

    const dispatch = useDispatch();

    const [nbResultat,setNbResultat] = React.useState<number>(4000);

    const [data,setData] = React.useState<any>();


    /*async function fetchVoitures(){
        let response = await fetch("http://localhost:8080/get/voitures")
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((dataRecu) => setData(dataRecu))
    }

    React.useEffect(() => {
        fetchVoitures();
      }, []);
*/
    return (
        <main className=" bg-stone-200  h-[100rem]  flex flex-col text-neutral-800 " >
            <div className="mt-32 mx-8">
                <div className="block sm:flex sm:flex-row sm:justify-between mx-8">
                    <h1  className="font-bold GrosseurTitre ">Notre Inventaire : </h1>
                    <span className=" font-semibold GrosseurSousTitre sm"> Résulats : {nbResultat} </span>
                </div>
                <div className="mt-2 mb-2 w-full h-1 text-xl rounded-full  bg-neutral-800 m-auto"/>
                <div className=" flex flex-col h-48 md:h-auto md:flex-row justify-around md:justify-end">
                    <Dropdown titre={filtreAnnee.titre + " : " + indexFiltreAnnee} options={filtreAnnee.options}/>
                    <Dropdown titre={filtreMarque.titre + " : " + indexFiltreMarque} options={filtreMarque.options}/>
                    <div className="relative inline-block w-auto text-xl md:mx-2">
                        <button onClick={() => {
                            dispatch(clearFiltreAnnee()); 
                            dispatch(clearFiltreMarque())}}
                            className="rounded-xl bg-neutral-800  w-full md:w-auto md:px-8 py-2
                            font-semibold text-stone-200  shadow-2xl shadow-neutral-900 drop-shadow-xl hover:scale-105  transition">
                        Réinitalliser
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    {data}
                </div>
            </div>
        </main>
    );
}

export default Inventaire;