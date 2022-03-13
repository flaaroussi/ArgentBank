import { 
   USER_GET_SUCCESS, 
   USER_UPDATE_FORM,
   USER_UPDATE_SUCCESS,
   USER_UPDATE_ERROR
 } from './actionsTypes'

/**
 * Action qui modifie le state utilisateur
 */


export const userSuccess =(user) => (
   {
         type : USER_GET_SUCCESS,
         user,
   }
)
/**
 * 
 *  erreur auth user success??????????????
 */

/**
 * Action pour mettre à jour la state de basculement entre form user et profil
 * @param {*} isUpadte 
 * @returns 
 */
 export const userUpdateForm =(isUpadte) => (
   {
         type : USER_UPDATE_FORM,
         isUpadte,
   }
)

/**
 * Action pour mettre à jour les données personnelles
 * @param {*} user 
 * @returns 
 */
export const userUpdate =(user) => (
   {
         type : USER_UPDATE_SUCCESS,
         user,
   }
)

/**
 * 
 * @param {*} error 
 * @returns 
 */
export const userUpdateError =(error) => (
   {
         type : USER_UPDATE_ERROR,
         user:null,
         error:error
   }
)