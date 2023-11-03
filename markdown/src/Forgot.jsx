import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'; // Import axios

const validationSchema = Yup.object().shape({
  email: Yup.string().required('ⓘ Email is required')
});

function Forgot() {
  const initialvalues = {
    email: '',
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
            initialValues={initialvalues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              try {
                let data =  axios.post('http://localhost:3150/fp/forgotpassword', values);
                if (data) {
                  console.log(data);
                  toast("Email Sent");
                  actions.resetForm();actions.setSubmitting(false);
                }
              } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                  toast.error('Email Not Found');
                  actions.setSubmitting(false);
                }
              }
            }}
          >
            {(formikProps) => (
              <Form className='form'>
                <h1 className='reg-text'>Forgot Password</h1>
                <br></br>
                <div>
                  <Field type="email" className='reg-input form-control' id="email" name="email" placeholder='Email' />
                  <ErrorMessage name="email" component="div" className='errormessage' />
                </div>
                <p> </p>
                <div className='row'>
                  <br />
                  <button className='btn btn-success col log-btn' type="submit" disabled={formikProps.isSubmitting}>
                    Reset Password
                  </button>
                  <Link className='btn btn-danger col log-btn' to='/login'>
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

export default Forgot;
