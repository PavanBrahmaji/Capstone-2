import { Formik} from "formik"
import axios from 'axios';
import { Login } from "./Login";

export const LogIn =() =>
{

  return(
 <div className="container">
<Formik
  initialValues={{
    email:"",
    password:"",
    }}
    
    onSubmit= { values=>
    {
      console.log(values)
      axios.post("http://localhost:5000/api/login", values)
      .then((res)=>{
        console.log(res.data)
        alert(res.data.message)
        
      })
      
    }}
    component={Login}/>

</div>
 
  )
}