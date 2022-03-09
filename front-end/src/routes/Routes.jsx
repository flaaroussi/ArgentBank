import { Routes, Route} from "react-router-dom";
import Home from "../containers/Home";
import Error from "../containers/Error";
import Login from "../containers/Login";
import Profile from "../containers/Profile";
import InProgress from "../containers/InProgress";
import FormInfos from "../components/FormInfos";
import PrivateRoute from "./PrivateRoute";

/** 
 * Routes application
 * @returns {objet} 
 */

export default function Router(){

   return <Routes>  
            <Route path="/" element={<Home exact="true"/>} />
            <Route path="/userInfos" element={
               <PrivateRoute>
                  <FormInfos />
               </PrivateRoute>   
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={
               <PrivateRoute>
                  <Profile />
               </PrivateRoute>
            } />  
            <Route path="*" element={<Error />}  />
            <Route path="/transactions" element={<InProgress page="Transactions" />}  />
   </Routes>
   
}  