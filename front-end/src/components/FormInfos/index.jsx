import { useSelector, useDispatch } from 'react-redux'
import './style.scss'
import { useRef } from 'react'
import { updateProfile } from '../../redux/middlewares/userMiddleware'
import { Link, Navigate } from 'react-router-dom'
import { userUpdateForm  } from '../../redux/actions/uerActions';


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

   const doCloseForm = (event) =>{
      event.preventDefault(); 
      dispatch(userUpdateForm(0)) 
   }
   
   return <section className="sign-in-content formupdate">
         <i className="fa fa-user-circle sign-in-icon"></i>
         <form onSubmit={doUpdate}>

            <div className="input-wrapper">
               <label htmlFor="firstName" >First Name</label>
               <input type="text" id="firstName"  defaultValue={userState.user.firstName} ref={inputFirstName}/>
            </div>

            <div className="input-wrapper">
               <label htmlFor="lasttName" >Last Name</label>
               <input type="text" id="lasttName" defaultValue={userState.user.lastName} ref={inputLasttName}/>
            </div> 
            <div className='form-button'>
               <button type='submit' className="sign-in-button">Save</button> 
               <button onClick={doCloseForm} className="sign-in-button cancel">Cancel</button>   
            </div>           
                       
         </form>
      </section>   
}