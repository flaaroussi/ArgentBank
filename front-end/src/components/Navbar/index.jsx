import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './style.scss';
import Logo  from '../../assets/argentBankLogo.png'
import { resetToken } from '../../redux/actions/authActions';



/**
 * @description Component for showing Navbar navigation.
 *
 * @component
 * @example
 * 
 * return(<Navbar  />)
 */

function Navbar(){
   const dispach = useDispatch()

   
   const userConnected = useSelector((state) => state.userReducer)

   const doLogout = () =>{
      dispach(resetToken())
      sessionStorage.removeItem('token')
   }



   return (<nav className="navbar">
            <Link to="/" className="navbar__logo" >
               <img className="navbar__logo__img" src={Logo} alt='Argent Bank Logo' />
               <h1 className="sr-only">Argent Bank</h1>
            </Link> 
           
            <div className="navbar__item">
                 {
                     userConnected.token ? (
                           <>
                              <NavLink to='/profile' >
                                 <i className="fa fa-user-circle"></i>
                                 <span>{userConnected.user?userConnected.user.firstName : ''}</span>
                              </NavLink>
                              <NavLink onClick={doLogout}   to='/'>
                                 <i className="fa fa-sign-out"></i>
                                 <span>Sign Out</span>
                              </NavLink>
                           </>
                           ) : ( 
                              <NavLink to='/login' >
                                 <i className="fa fa-user-circle"></i>
                                 <span>Sign In</span>
                              </NavLink>    
                              )  
                  }         
            </div>
            
         </nav>
      );

}

export default  Navbar