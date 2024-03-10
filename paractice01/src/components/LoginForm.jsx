import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-gray-900 mb-6 text-center">Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-6">
            <div>
            
            </div>
            <div>
              <Field name="email" type="email" placeholder="Email" className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} />
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
            </div>
            
            <div>
              <Field name="password" type="password" placeholder="Password" className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`} />
              <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
            </div>
            
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </button>
            </div>
            <div className='flex justify-center gap-8 text-blue-800 '>
                
                <NavLink>Forgotten account?</NavLink>
                <NavLink to={'/'}>Sign Up</NavLink>
            </div>

           


          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default LoginForm;
