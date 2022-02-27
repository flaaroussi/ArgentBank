import { Fragment } from "react";
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router from "./routes/Routes";



function App (){

   return (<Fragment>
      <Navbar />  
      <Router />
      <Footer />
   </Fragment>)

}

export default App