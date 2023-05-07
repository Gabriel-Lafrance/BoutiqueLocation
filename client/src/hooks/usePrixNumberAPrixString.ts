

export const usePrixNumberAPrixString = (argPrix : number) =>{

    function prixNumberAPrixString( argPrix : number) : string{
        let prixString : string = argPrix.toString();
        let decimal : string = prixString.substring(prixString.length - 2);
        let prix : string = prixString.substring(0,prixString.length - 2);
        return prix + "," + decimal;
    }
    
    return prixNumberAPrixString(argPrix);
}