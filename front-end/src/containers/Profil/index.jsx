import AccountCard from '../../components/AccountCard'
import { accounts } from '../../datas/accounts'
import './style.scss'

export default function Profil(){
   return (
   <main className="main bg-dark">
      <header className='header'>
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </header>

      <h2 className="sr-only">Accounts</h2>
      <section className='accounts'>
         {
            accounts.map((account)=>{
               return <AccountCard keyId={account.id} name={account.name} amount ={account.amount} description={account.description} />

            })
         }         
      </section>
   </main>
   )
}