import axios from 'axios';
import { userSuccess, userUpdate ,userUpdateError,userUpdateForm } from '../actions/uerActions';



const API_URI      = "http://localhost:3001/api/v1"
const authEndpoint = `${API_URI}/user/profile`;


/**
 * @description récuperer les données de l'utilisateur et mettre à jour le state
 * @param {*} token 
 * @returns 
 */
export function getProfile (){

   const header ={
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
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
        dispach(userSuccess(response.data.body)) //mettre à jour le state
       
      })
      .catch((error) =>{
         console.log(error)
      })
   }
}


/**
 * @description mettre à jour le profil
 * @param {*} 
 * @returns 
 */
 export function updateProfile ( firstName, lastName){

   const header ={
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
    }   

   return(dispach) =>{
      axios
      .put(authEndpoint,
         {
            "firstName": firstName,
            "lastName": lastName
         }
         ,
         header
      )
      .then((response) => {
         let user = response.data.body
        dispach(userUpdateForm(0)) // change state update donnée user
        dispach(userUpdate(user)) //mettre à jour le state
       
      })
      .catch((error) =>{
         dispach(userUpdateError(error))
      })
   }
}