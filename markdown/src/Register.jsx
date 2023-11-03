import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, resolvePath, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('ⓘ First Name is required'),
  lastname: Yup.string().required('ⓘ Last Name is required'),
  email: Yup.string().email('ⓘ Invalid email format').required('ⓘ Email is required'),
  password: Yup.string().required('ⓘ Password is required'),
});

function Register() {
  const [res, setRes] = useState({});
  const navigate = useNavigate();

  async function handleSubmit(values) {
    try {
      await axios.post('http://localhost:3150/register', values);
      toast.success('Registration Successful');
      
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        toast.error('User Already Exists');
      }
    }
  }

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  return (
    <div className="container">
      <div className="row">
        <p></p>
      </div>
      <div className="row">
        <div className="col-12 shadow-sm p-3 mb-5 bg-white rounded details-home">
          <div className="row">
            <div className="col">
              <h1 className='reg-name'>Markdown Viewer</h1>
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                try {
                    await axios.post('http://localhost:3150/register', values);
                    toast.success('Registration Successful');
                    actions.resetForm();
                    navigate('/login');
                    actions.setSubmitting(false);
                  } catch (error) {
                    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                      toast.error('User Already Exists');
                      actions.setSubmitting(false);
                    }
                  }
              
            }}>
            {(formikProps) => (
              <Form className='form'>
                <h1 className='reg-text'>Register User</h1>
                <br />
                <div>
                  <Field
                    className='reg-input form-control'
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder='First Name'
                  />
                  <ErrorMessage name="firstname" component="div" className='errormessage' />
                </div>
                <p> </p>
                <div>
                  <Field
                    className='reg-input form-control'
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder='Last Name'
                  />
                  <ErrorMessage name="lastname" component="div" className='errormessage' />
                </div>
                <p> </p>
                <div>
                  <Field
                    type="email"
                    className='reg-input form-control'
                    id="email"
                    name="email"
                    placeholder='Email'
                  />
                  <ErrorMessage name="email" component="div" className='errormessage' />
                </div>
                <p> </p>
                <div>
                  <Field
                    type="password"
                    id="password"
                    className='reg-input form-control'
                    name="password"
                    placeholder='Password'
                  />
                  <ErrorMessage name="password" component="div" className='errormessage' />
                </div>
                <p> </p>
                <div className='row'>
                  <br />
                  <button className='btn btn-success col log-btn' type="submit" disabled={formikProps.isSubmitting}>
                    Register
                  </button>
                  <Link className='btn btn-danger col log-btn' to='/'>
                    Back
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <p> </p>
      <div className="row">
        <div className="sticky-bottom copyright">© Copyright @ Markdown Viewer</div>
      </div>
    </div>
  );
}

export default Register;
