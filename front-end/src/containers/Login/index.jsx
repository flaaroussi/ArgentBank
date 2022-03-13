import { useSelector, useDispatch } from 'react-redux'
import { useRef, useEffect } from 'react'
import './style.scss'
import { authLogin } from '../../redux/middlewares/authMiddleware';
import { Navigate } from 'react-router-dom';

/**
 * @description component pour afficher et envoyer le formulaire
 * @returns (<Login />)
 */
export default function Login(){

   const authToken = useSelector((state) => state.userReducer) 
   const dispatch = useDispatch();
   const inputEmail = useRef();
   const inputPassword =useRef();
   const inputRemenberme = useRef()

   /**
    * Si l'email est enregistré et remember me est coché on affiche l'email et la case coché 
    * aprés chaque chargement de la page dans le formulaire
    */
   useEffect(() => {
      const rememberMe = sessionStorage.getItem('rememberMe')
      if(rememberMe === '1'){
         inputRemenberme.current.checked = 1
         inputEmail.current.value = sessionStorage.getItem('email')
      }
     
      document.title = `Argent Bank - Authentification`
      }, []);


   /**
    * Fonction pour exécuter le middleware
    * @param {*} event 
    */
   const doSignin = (event) => {
      event.preventDefault();
      dispatch(authLogin(inputEmail.current.value, inputPassword.current.value))
      //si la Remember me est coché
      if(inputRemenberme.current.checked){
         sessionStorage.setItem('email',inputEmail.current.value)
         sessionStorage.setItem('rememberMe','1')
      }else{
         sessionStorage.removeItem('rememberMe')
         sessionStorage.removeItem('email')
      }
   }

   // si le token existe
   if(authToken.token){     
      //alors redirection vers page profile   
      return <Navigate to="/profile"/>
   }

   return<main className="main bg-dark">
      <section className="sign-in-content">
         <i className="fa fa-user-circle sign-in-icon"></i>
         <h1>Sign In</h1>
            <form onSubmit={doSignin}>
               <div className="input-wrapper">
                  <label htmlFor="email" >Username</label>
                  <input type="text" id="email"  ref={inputEmail} /> 
               </div>
               <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" ref={inputPassword} />
               </div>
               <div className="input-remember">
                  <input type="checkbox" id="remember-me" ref={inputRemenberme} />
                  <label htmlFor="remember-me">Remember me</label>
               </div>
          
               <button type='submit'   className="sign-in-button">Sign In</button> 
          
            </form>
               
               {
                  authToken.error && <div className='message-error'>Your login or password is invalid</div>
               }
               
      </section>
   </main>
  }