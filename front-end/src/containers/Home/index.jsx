import Banner from '../../components/Banner'
import Feature from '../../components/Feature'
import './style.scss'
import { features } from '../../datas/features'

export default function Home(){
   return<main className="main-home">
      <Banner />
      <section className='features'>
            {features.map((item)=>{
               return  <Feature key={item.id} image={item.icone} title={item.title} description={item.description}/>
            })}
      </section>
   </main>
}