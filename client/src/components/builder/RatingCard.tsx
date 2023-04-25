import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

type Props = {
  rating: number
}


export const Rating = ({rating }: Props) => {
    switch(rating) { 
        case 5 : { 
            return (
                <span className="block GrosseurTexteNormal">
                    <TbStarFilled color="GoldenRod" style={{display: "inline", marginRight: "5px"}}/>
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}}/>
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}}/>
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline", marginRight: "5px"}} />
                </span>
               )
        } 
        case 4.5: { 
            return (
                <span className="block GrosseurTexteNormal">
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarHalfFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                </span>
               )
        } 
        case 4: { 
            return (
                <span className="block GrosseurTexteNormal">
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                </span>
               )
         } 
         case 3.5: { 
            return (
                <span className="block">
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarHalfFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />

                </span>
               )
         } 
         case 3: { 
            return (
                <span className="block">
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                </span>
               )
         } 
        default: { 
            return (
                <span className="block">
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                    <TbStarFilled color="GoldenRod" style={{display: "inline",  marginRight: "5px"}} />
                </span>
               )
        } 
     } 
}