import React from 'react'
import   {Form, Field} from "formik";

export const Login = (errors, touched) => {
  
  return (
    <div>
    <div className="container">
    <div className='Login'>
   <h1>Login</h1>

    <Form >

    <div className="form-group">
    <label> Email </label> 
    <Field type="email" name="email" className="form-control"/>
    
    </div>

    <div className="form-group">
    <label> Password </label> 
    <Field type="password" name="password" className="form-control"/>
    </div>
    <span>Not have an account? </span><a href="http://localhost:3000/signup">Signup</a>
    <button className='btn btn-primary'> Login </button>
    </Form>
    </div>
    </div>
    </div>
  )
}