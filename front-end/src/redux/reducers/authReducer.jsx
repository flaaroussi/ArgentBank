import { AUTH_ERROR, AUTH_SUCCESS } from "../actions/actionsTypes";
import { initialStates } from "../initialStates/initialStates";

/**
 * reducer qui modifie le state authentification
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */

export const authReducer = (state = initialStates, action) => {
      switch(action.type){
         case AUTH_SUCCESS:
            {
               return {
                  ...state,
                  token :action.token
               }
            }
         case AUTH_ERROR:
            {
               return {
                  ...state,
                  error :action.error
               }
            } 
            
            default : 
            return state
      }

}