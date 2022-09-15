
import './App.css';
import {LogIn} from './Components/FormikLogin';
import Home from './Components/Home';
import Guide from './Components/Guide';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {Links} from './Components/Link'
import { Registration } from './Components/Formik.js';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Links />
      <Routes>
      <Route path=""  element ={<Home/>}/>
        <Route path='/home'  element ={<Home/>}/>
        <Route path='/guide'  element ={<Guide/>}/>
        <Route path='/aboutus'  element ={<AboutUs/>}/>
        <Route path='/contactus'  element ={<ContactUs/>}/>
        <Route path='/login'  element ={<LogIn/>}/>
        <Route path='/signup'  element ={<Registration/>}/>
        <Route path="*"  element ={<h1> No such file </h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
