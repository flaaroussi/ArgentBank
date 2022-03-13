import propTypes from "prop-types";
import './style.scss'

/**
 * @description Component for showing features.
 *
 * @component
 * @example
 * const image = 'image'
 * const title = 'You are our #1 priority'
 * const description = 'The more you save with us, the higher your interest rate will be!'
  * return (
 *  <Feature  image={image} title={title} description={description} />
 * )
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