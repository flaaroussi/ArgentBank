import { 
   AUTH_ERROR, 
   AUTH_SUCCESS, 
   AUTH_LOGOUT_SUCCESS,
   USER_GET_SUCCESS,
   USER_UPDATE_SUCCESS,
   USER_UPDATE_FORM
} from "../actions/actionsTypes";
import { initialStates } from "../initialStates/initialStates";

/**
 * reducer qui modifie le state authentification
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */

export const userReducer = (state = initialStates, action) => {
   console.log(action)
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
         case AUTH_LOGOUT_SUCCESS:
            {
               return {
                  ...state,
                  token :null
               }
            }
         case USER_GET_SUCCESS:
            {
               return {
                  ...state,
                  user: action.user,
               }
         }
            
         case USER_UPDATE_SUCCESS:
            {
               return {
                  ...state,
                  user: action.user,
               }
         }
         case USER_UPDATE_FORM:
            {
               return {
                  ...state,
                  editUser : action.isUpadte
               }
         }




            default : 
            return state
      }

}