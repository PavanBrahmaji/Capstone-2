import { Formik} from "formik"
import { Signup } from "./SignUp";
import axios from 'axios';

export const Registration =() =>
{

  return(
 <div className="container">
<Formik
  initialValues={{
    name :"",
    email:"",
    password:""
    }}
    
    onSubmit= {values=>
    {
      console.log(values)
      axios.post("http://localhost:5000/api/signup/create", values)
      .then((res)=>{
        res.text((response)=>{
            console.log(response)
        })
        
      })
      
    }}
    component={Signup}/>

</div>
 
  )
}