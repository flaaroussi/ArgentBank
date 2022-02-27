import { Routes, Route} from "react-router-dom";
import Home from "../containers/Home";
import Error from "../containers/Error";
import Login from "../containers/Login";
import Profil from "../containers/Profil";

/** 
 * Routes application
 * @returns {objet} 
 */

export default function Router(){

   return <Routes>  
            <Route path="/" element={<Home exact="true"/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="*" element={<Error />}  />
   </Routes>
   
}  