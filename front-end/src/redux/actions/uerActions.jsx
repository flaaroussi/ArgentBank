import { USER_GET_SUCCESS } from './actionsTypes'

/**
 * Action qui modifie le state utilisateur
 */


export const userSucces =(user) => (
   {
         type : "USER_GET_SUCCESS",
         user,
   }
)