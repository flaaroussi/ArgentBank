import axios from 'axios';
import { userSucces } from '../actions/uerActions';



const API_URI      = "http://localhost:3001/api/v1"
const authEndpoint = `${API_URI}/user/profile`;


/**
 * @description récuperer les données de l'utilisateur et mettre à jour le state
 * @param {*} token 
 * @returns 
 */
export function getProfile (token){

   const header ={
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
   return(dispach) =>{
      axios
      .post(authEndpoint,
         {
         },
         header
      )
      .then((response) => {
        dispach(userSucces(response.data.body)) //mettre à jour le state
       
      })
      .catch((error) =>{
         console.log(error)
      })
   }
}