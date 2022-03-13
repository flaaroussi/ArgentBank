import React from "react";
import { Navigate } from "react-router-dom";

import { useSelector} from 'react-redux'


/**
 * rendre privé la route profile
 * @param {*} param0 
 * @returns 
 */

export default function PrivateRoute ({children}){
   const token = useSelector((state) => state.userReducer.token) 
   return(
      token ? children :<Navigate to='/login' />
   );
}