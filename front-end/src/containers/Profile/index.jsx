import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import AccountCard from '../../components/AccountCard'
import FormInfos from '../../components/FormInfos';
import { accounts } from '../../datas/accounts'
import { getProfile } from '../../redux/middlewares/userMiddleware';
import { userUpdateForm  } from '../../redux/actions/uerActions';
import './style.scss'

/**
 * @description Component for displaying page profile
 * @returns 
 */

export default function Profile(){

   const dispatch = useDispatch();
   const userState = useSelector((state) => state.userReducer) 

   console.log(userState);
   
   const doFormUpdate = (event) => {
      dispatch(userUpdateForm(1)) 
   }

   useEffect(() => {
      //charger les données de l'utilisateur via l api aprés chaque chargement
      //de la page profile
      dispatch(getProfile(userState.token))   
      document.title = `Argent Bank - Profile`
   }, []);

   
  

  //si l'utilisateur est connecté alors affiché nom et prénom.
  const userConnected = (userState.user && userState.editUser === 0) ? `${userState.user.firstName}  ${userState.user.lastName} !` :''
   return (
      <main className="main bg-dark">
         <header className='header'>
            <h1>Welcome back<br />{userConnected}</h1>
            {
               (userState.editUser === 0) ? <button onClick={doFormUpdate} className="edit-button">Edit Name</button> :''
            }
            
         </header>
         {
            (userState.editUser === 1) ? <FormInfos /> : ''              
         }

         <h2 className="sr-only">Accounts</h2>
         <section className='accounts'>
            {
               accounts.map((account)=>{
                  return <AccountCard key={account.id} name={account.name} amount ={account.amount} description={account.description} />
               })
            }         
         </section>
      </main>
   )
}