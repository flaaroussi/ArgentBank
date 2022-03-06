import { 
   AUTH_SUCCESS, 
   AUTH_ERROR,
   AUTH_LOGOUT_SUCCESS 
} from "./actionsTypes"

/**
 * Action qui modifie le state token
 * @param {*} token 
 * @returns 
 */
export const authSuccess = (token)=>({
   type: AUTH_SUCCESS,
   token: token  
})

/**
 * Action qui modifie le state erreur
 * @param {*} token 
 * @returns 
 */
export const authError = (error)=>({
   type: AUTH_ERROR,
   token: null,
   error: error  
})

/**
 * Action qui supprime le token
 * @param {*} token 
 * @returns 
 */
 export const resetToken = ()=>({
   type: AUTH_LOGOUT_SUCCESS
})