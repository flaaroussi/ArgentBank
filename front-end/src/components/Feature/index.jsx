import './style.scss'

/**
 * @description Component for showing features.
 *
 * @component
 * @example
 * const keyName = 'Calories'.......................
 * keyValue = 120
 * const KeyUnite = 'kCal'
 * const icon = 'calorie'
  * return (
 *  <CardInfo  keyName={keyName} keyValue={keyValue} KeyUnite={KeyUnite} icon={icon} />
 * ).......................
 */



export default function Feature({image, title, description}){
   return(
      <article className="feature">        
          <img src={image} alt="Chat Icon" class="feature__icon" />
          <h3 class="feature__title">{title}</h3>
          <p>{description}</p>      
      </article>
      
   )
}