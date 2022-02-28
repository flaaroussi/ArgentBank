import './style.scss'

/**
 * @description Component for showing Banner.
 *
 * @component
 * @example
 * 
 * return(<Banner  />)
 */

export default function Banner(){
   return(
   <main className="banner">
      <section className='banner__infos'>
         <h2 className="sr-only">Promoted Content</h2>
         <p className="subtitle">No fees.</p>
         <p className="subtitle">No minimum deposit.</p>
         <p className="subtitle">High interest rates.</p>
         <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
      
   </main>)
}