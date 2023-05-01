import { Menu } from '@headlessui/react'
import { useDispatch } from "react-redux"
import { updateFiltreAnnee, updateFiltreMarque } from 'src/store';
import { filtreAnnee, filtreMarque} from "src/constans/filtre";

interface DropdownBouttonProps  {
  option : string
}

export const DropdownBoutton = ( {option} : DropdownBouttonProps) => {
    
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
            if (faitPartieDeLaListe(filtreAnnee.options,option)) {
              dispatch(updateFiltreAnnee(option));
            } 
            if (faitPartieDeLaListe(filtreMarque.options,option)) {
              dispatch(updateFiltreMarque(option));
            }}} 
            className={" text-center text-2xl transition hover:scale-105 w-full block my-2"}>
            {option}
          </button>
        )}
      </Menu.Item>
    );
}
