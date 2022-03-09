import { useSelector, useDispatch } from 'react-redux'
import './style.scss'
import { useRef } from 'react'
import { updateProfile } from '../../redux/middlewares/userMiddleware'
import { Link, Navigate } from 'react-router-dom'




/**
 * @description Component for updating infos.
 *
 * @component
 * @example
 * 
 * return(<FormInfos />)
 */


export default function FormInfos(){

   const userState = useSelector((state) => state.userReducer) 
   const dispatch = useDispatch();
   const inputFirstName = useRef();
   const inputLasttName = useRef();


   const doUpdate = (event) =>{  
      event.preventDefault(); 
      dispatch(updateProfile(inputFirstName.current.value, inputLasttName.current.value))
      //mettre a jour le profil 
   }

   if(userState.editUser === 1){
      return <Navigate to="/profile"/>
   }
   
   return<main className="main bg-dark">
      <section className="sign-in-content">
         <form onSubmit={doUpdate}>

            <div className="input-wrapper">
               <label htmlFor="firstName" >First Name</label>
               <input type="text" id="firstName"  defaultValue={userState.user.firstName} ref={inputFirstName}/>
            </div>

            <div className="input-wrapper">
               <label htmlFor="lasttName" >Last Name</label>
               <input type="text" id="lasttName" defaultValue={userState.user.lastName} ref={inputLasttName}/>
            </div>

            <Link to="/profile" className="sign-in-button cancel">Cancel</Link> 
            <button type='submit' className="sign-in-button">Save</button> 
               
         </form>
      </section>   
   </main>
}