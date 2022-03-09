import Banner from '../../components/Banner'
import Feature from '../../components/Feature'
import './style.scss'
import { features } from '../../datas/features'
import {useEffect} from 'react'
import React from 'react'

/**
 * 
 * @returns 
 */
export default function Home(){

   useEffect(() => {    
      document.title = `Argent Bank - Home Page`
      }, []);
      
   return<main className="main">
      <Banner />
      <section className='features'>
            {features.map((item)=>{
               return  <Feature key={item.id} image={item.icone} title={item.title} description={item.description}/>
            })}
      </section>
   </main>
}