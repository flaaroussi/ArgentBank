import { Link } from 'react-router-dom'
import propTypes from "prop-types";
import './style.scss'


/**
 * @description Component for showing Account card.
 *
 * @component
 * @example
 * /////////////
 * ////////////
 * const KeyUnite = 'kCal'
 * const icon = 'calorie'
  * return (
 *  <AccountCard  name={name} amount={amount} description={description} />
 * )
 */


export default function AccountCard({name, amount, description}){
   return(   
      <section className='account'>
         <div className="account-content-wrapper">
            <h3 className="account-title">{name}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description}</p>
         </div>
         <div className="account-content-wrapper cta">

            <Link to='/transactions' className="transaction-button">View transactions</Link>
         </div>
      </section>
   )
}

//Validate the type of properties
AccountCard.propTypes ={
   /**
    * 
    */
   name: propTypes.string,
   /**
    *
    */
   amount: propTypes.number,
   /**
    * 
    */
    description: propTypes.string,
   
 }