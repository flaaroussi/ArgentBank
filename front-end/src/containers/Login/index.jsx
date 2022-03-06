import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'
import './style.scss'
import { authLogin } from '../../redux/middlewares/authMiddleware';
import { Navigate } from 'react-router-dom';

/**
 * @description component pour afficher et envoyer le formulaire
 * @returns 
 */
export default function Login(){
   const dispatch = useDispatch();
   console.log(dispatch)
   //récupérer la valeur de l'input e mail (useRef() hook qui permet d'interagir avec la DOM)
   const inputEmail = useRef();
   //récupérer la valeur de l'input password
   const inputPassword =useRef();
   console.log(inputEmail)

   /**
    * Fonction pour executer le middleware
    * @param {*} event 
    */
   const doLogin = (event) => {
      event.preventDefault();
      dispatch(authLogin(inputEmail.current.value, inputPassword.current.value))
      
      //setSessionItem('token', null)      
   }
   //récupérer le state
   const authToken = useSelector((state) => state.authReducer) 
   console.log(authToken)
   // si le token existe
   if(authToken.token){        
      return <Navigate to="/profil"/>
   }

   return<main className="main bg-dark">
      <section className="sign-in-content">
         <i className="fa fa-user-circle sign-in-icon"></i>
         <h1>Sign In</h1>
            <form onSubmit={doLogin}>
               <div className="input-wrapper">
                  <label htmlFor="email" >Username</label>
                  <input type="text" id="email"  ref={inputEmail} /> 
               </div>
               <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" ref={inputPassword} />
               </div>
               <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
               </div>
          
               <button type='submit'   className="sign-in-button">Sign In</button> 
          
               </form>
               
               {
                  authToken.error && <div className=''>Votre login ou mot de passe est invalide</div>
               }
               
      </section>
   </main>
  }