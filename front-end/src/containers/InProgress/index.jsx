
import { useNavigate } from "react-router-dom";

import underImage from '../../assets/under.png'
import './style.scss';


/**
 * Render InProgress page constrution
 * @component
 * @param {objet} props 
 * @returns 
 */

export default function InProgress({page}){
 
   const  navigate = useNavigate();
   // Redirect user to dashboard page after 10s
   setTimeout(
      () => {
         navigate(`/profil`);
      }, 1000
   )

   return(<article className="under">
     <img src={underImage} alt="" className="underImage"/>
     <div>
         Page {page} bientôt disponible
     </div>
   </article>)
}