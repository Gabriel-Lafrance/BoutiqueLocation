import { Menu } from '@headlessui/react'
import { useDispatch } from "react-redux"
import { updateFiltreAnnee, updateFiltreDisponible, updateFiltreMarque } from 'src/store';
import { listeFiltreAnnee, listeFiltreDisponible, listeFiltreMarque} from "src/constans/filtre";

type DropdownBouttonProps = {
  option : string;
}

export const DropdownBoutton = ( props : DropdownBouttonProps) => {
    
    const dispatch = useDispatch();

    function faitPartieDeLaListe(argListe : string[], argOption : string) : boolean {
      let faitPartie : boolean = false;
      argListe.forEach(element => {
        console
        if (element === argOption){
          faitPartie = true;
        }
      });
      return faitPartie;
    }

    return (
        <Menu.Item>
        {({ active }) => (
          <button onClick={() => {
            if (faitPartieDeLaListe(listeFiltreAnnee.options,props.option)) {
              dispatch(updateFiltreAnnee(props.option));
            } 
            if (faitPartieDeLaListe(listeFiltreMarque.options,props.option)) {
              dispatch(updateFiltreMarque(props.option));
            }
            if (faitPartieDeLaListe(listeFiltreDisponible.options,props.option)) {
              dispatch(updateFiltreDisponible(props.option));
            }
            }} 
            className={" text-center text-2xl transition hover:scale-105 w-full block my-2"}>
            {props.option}
          </button>
        )}
      </Menu.Item>
    );
}

