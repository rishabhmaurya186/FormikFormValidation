import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  
  lastName: Yup.string().required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  mobileNumber: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits').required('Required'),

  password: Yup.string().min(8, 'Too Short!').matches(/[a-z]/, "Must contain at least one lowercase letter").matches(/[A-Z]/, "Must contain at least one Uppercase letter").matches(/\d/, "Must contain at least one number").matches(/(?=.*[!@#$%^&*()_+\-=\[\]{};':",./<>?])/, "Must contain at least one special character").required('Required'),

  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
});

const SignUpForm = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
    <div className="max-w-md w-full mx-auto bg-white p-12 rounded-lg shadow-lg">
      <div className="text-center font-medium text-xl mb-6">Sign Up</div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          mobileNumber: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="  ">

            <div className='text-center mb-10  flex justify-center min-h-20 '>
                <div className='w-{200} h-{200} rounded-full border-gray-300 border-2  flex justify-center items-center min-w-20'><i className="fa-solid fa-user text-purple-700 text-5xl "></i></div>
                 
            </div>

            <div className="mb-4 flex gap-8">
            <div className="mb-4">
              <Field name="firstName" placeholder="First Name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              {errors.firstName && touched.firstName ? (<div className="text-red-500 text-xs italic">{errors.firstName}</div>) : null}
            </div>
            
            <div className="mb-4">
              <Field name="lastName" placeholder="Last Name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              {errors.lastName && touched.lastName ? (<div className="text-red-500 text-xs italic">{errors.lastName}</div>) : null}
            </div>
            </div>          

            <div className="mb-4 flex gap-8">
            <div className="mb-4">
              <Field name="email" type="email" placeholder="Email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              {errors.email && touched.email ? <div className="text-red-500 text-xs italic">{errors.email}</div> : null}
            </div>
            
            <div className="mb-4">
              <Field name="mobileNumber" placeholder="Mobile Number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              {errors.mobileNumber && touched.mobileNumber ? <div className="text-red-500 text-xs italic">{errors.mobileNumber}</div> : null}
            </div>
            </div>

            
            <div className="mb-4 flex gap-8">

            <div className="mb-4">
              <Field name="password" type="password" placeholder="Password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              {errors.password && touched.password ? <div className="text-red-500 text-xs italic">{errors.password}</div> : null}
            </div>
            
            <div className="mb-6">
              <Field name="confirmPassword" type="password" placeholder="Confirm Password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-500 text-xs italic">{errors.confirmPassword}</div> : null}
            </div>
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-700 transition duration-150 ease-in-out">
                Sign Up
              </button>
            </div>
           <div className='mt-6 text-center text-blue-800'> 
           <NavLink to={'/login'}> Already have an account?
           </NavLink>
           </div> 
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default SignUpForm;
