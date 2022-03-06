import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.scss';
import Logo  from '../../assets/argentBankLogo.png'


/**
 * @description Component for showing Navbar navigation.
 *
 * @component
 * @example
 * 
 * return(<Navbar  />)
 */

function Navbar(){

   const userConnectedToken = useSelector((state) => state.authReducer.token) 

   console.log(userConnectedToken)
   
   return (<nav className="navbar">
            <Link to="/" className="navbar__logo" >
               <img className="navbar__logo__img" src={Logo} alt='Argent Bank Logo' />
               <h1 className="sr-only">Argent Bank</h1>
            </Link> 
           
            <div className="navbar__item">
                 {userConnectedToken ? (<>  <NavLink to='/profil' >
                                          <i className="fa fa-user-circle"></i>
                                          <span>user connected</span>
                                       </NavLink>
                                       <NavLink to='/signout'>
                                          <i className="fa fa-user-circle"></i>
                                          <span>user connecté</span>
                                       </NavLink>
                                    </>) : ( <NavLink to='/login' >
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