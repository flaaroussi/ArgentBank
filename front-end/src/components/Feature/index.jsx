import propTypes from "prop-types";
import './style.scss'

/**
 * @description Component for showing features.
 *
 * @component
 * @example
 * const keyName = 'Calories'.......................
 * keyValue = 120....................
 * const KeyUnite = 'kCal'.......
 * const icon = 'calorie'............
  * return (
 *  <Feature  image={image} title={title} description={description} />
 * ).......................
 */



export default function Feature({image, title, description}){
   return(
      <article className="feature"> 
          <h2 className="sr-only">Features</h2>       
          <img src={image} alt="Chat Icon" className="feature__icon" />
          <h3 className="feature__title">{title}</h3>
          <p>{description}</p>      
      </article>
   )
}

//Validate the type of properties
Feature.propTypes ={
   /**
    * 
    */
    image: propTypes.string,
   /**
    *
    */
    title: propTypes.string,
   /**
    * 
    */
    description: propTypes.string,
   
 }