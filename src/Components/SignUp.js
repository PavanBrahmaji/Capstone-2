import React from 'react'
import   {Form, Field} from "formik";

export const Signup = (errors, touched) => {
  
  return (
    <div>
    <div className="container">
    <div className='Register'>
   <h1>Registration!</h1>

    <Form >
    <div className="form-group">
    

    <label> Name </label>
    <Field type="text" name="name" className="form-control"/>
    {/* <small className='text-danger'> {errors.errors.studentname} </small>  */}
    </div>

    <div className="form-group">
    <label> Email </label> 
    <Field type="email" name="email" className="form-control"/>
    {/* <small className='text-danger'> {errors.errors.address} </small>  */}
    </div>

    <div className="form-group">
    <label> Password </label> 
    <Field type="password" name="password" className="form-control"/>
    {/* <small className='text-danger'> {errors.errors.number} </small>  */}
    </div>

    <button className='btn btn-primary'> Register </button>
    </Form>
    </div>
    </div>
    </div>
  )
}