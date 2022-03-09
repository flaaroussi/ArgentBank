import axios from 'axios';
import propTypes from "prop-types";

import { 
   authSuccess,
   authError,
 } from '../actions/authActions';

const API_URI      = "http://localhost:3001/api/v1"
const authEndpoint = `${API_URI}/user/login`;

/**
 * @description communiquer avec le backend et authentifier le token
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */

export function authLogin(email, password){
   return (dispach) =>{
      axios
      .post(authEndpoint,
         {
            email,
            password
         }
      )
      .then((response) => {
         const token = response.data.body.token;
         dispach(authSuccess(token));//envoyer une demande de mise à jour du state token.
         sessionStorage.setItem('token', token)
      })
      .catch((error) => {
         dispach(authError(error));
         sessionStorage.setItem('token', '')
      })
   }
}


//Validate the type of properties
authLogin.propTypes ={
   email: propTypes.string,
   password: propTypes.string,
}