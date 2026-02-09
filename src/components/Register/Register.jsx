import React, { useEffect, useState } from 'react'
import Style from'./Register.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export default function Register() {
    const [count, setcount] = useState(0)
    useEffect(()=>{},[])
      let navigate = useNavigate()

      let validationSchema = Yup.object().shape({
        name:Yup.string().min(3).max(10).required('name is required'),
        email:Yup.string().email().required('email is required'),
        phone:Yup.string().matches(/^01[0125][0-9]{8}$/,'phone num must be Egp Number').required('phone is Required'),
        password:Yup.string().matches(/^[A-Z][a-z]{5,10}$/ , 'password Must Start With UpperCase').required(),
        rePassword:Yup.string().oneOf([Yup.ref('password')]).required('rePassword Is Required')

      })
            
   async function handleRegister(formValues) {

    let { data} = await axios.post(`https://it-gate-academy.up.railway.app/api/auth/register`,formValues)
           console.log(data);

           if (data.msg === 'User registered successfully') {
            navigate('/')
           }
           
                
   }
          let formik = useFormik({
            initialValues:{
              name:'',
              email:'',
              phone:'',
              password:'',
              rePassword:''
            },
            validationSchema:validationSchema,
            onSubmit:handleRegister
          })
  return (
    <>
      <div className='py-6 max-xl mx-auto'>

        <h2 className='text-3xl font-bold text-green-600 text-center'> Register Now</h2>


        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">


      <div className="relative z-0 w-full mb-5 group">
      <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}  name="name"  className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
      <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Enter Your Name</label>
      </div>
        {formik.errors.name?<div class="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft" role="alert">
              {formik.errors.name}  
</div>  :null}

       <div className="relative z-0 w-full mb-5 group">
      <input type="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  name="email"  className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
      <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Enter Your Email</label>
      </div>

   {formik.errors.email?<div class="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft" role="alert">
                          {formik.errors.email}
          </div>:null}
      <div className="relative z-0 w-full mb-5 group">
      <input type="tel" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone}  name="phone"  className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
      <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Enter Your Phone Num</label>
      </div>


   {formik.errors.phone?<div class="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger" role="alert">
                          {formik.errors.phone}
          </div>:null}
         <div className="relative z-0 w-full mb-5 group">
      <input type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}  name="password"  className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
      <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Enter Your Password</label>
      </div>


   {formik.errors.password?<div class="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft" role="alert">
                          {formik.errors.password}
          </div>:null}
       <div className="relative z-0 w-full mb-5 group">
      <input type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword}  name="rePassword"  className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" "  />
      <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"> Confirm Password</label>
      </div>
        
           {formik.errors.rePassword?<div class="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft" role="alert">
                          {formik.errors.rePassword}
          </div>:null}

        <button type="submit" className="text-white bg-green-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>


  </form>


      </div>
    </>
  )
}
