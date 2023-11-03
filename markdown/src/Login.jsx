import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("ⓘ Email is required"),
  password: Yup.string().required("ⓘ Password is required"),
});

function Login() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  const navigate = useNavigate();
  const initialvalues = {
    email: "",
    password: "",
  };
  return (
    <div className="container">
      <div className="row">
        <p> </p>
      </div>
      <div className="row">
        <div className="col shadow-sm p-3 mb-5 bg-white rounded details-home">
          <div className="row">
            <div className="col reg-name">Markdown Viewer</div>
          </div>
          <Formik
            initialValues={initialvalues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              try {
                let data = await axios.post(
                  "http://localhost:3150/login",
                  values
                );
                console.log(data);
                let token = data.data.token;
                console.log(token);
                if (token) {
                  console.log(token);
                  localStorage.setItem("token", token);
                  navigate("/md/add");
                }
                toast.success("Login Successful");
                actions.resetForm();
                navigate("/md/add");
                actions.setSubmitting(false);
              } catch (error) {
                if (
                  error.response &&
                  error.response.status >= 400 &&
                  error.response.status <= 500
                ) {
                  toast.error("Incorrect User Login");
                  actions.setSubmitting(false);
                }
              }
            }}
          >
            {(formikProps) => (
              <Form className="form">
                <h1 className="reg-text">Login User</h1>
                <br></br>{" "}
                <div>
                  <Field
                    type="email"
                    className="reg-input form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="errormessage"
                  />
                </div>
                <p> </p>
                <div>
                  <Field
                    type="password"
                    id="password"
                    className="reg-input form-control"
                    name="password"
                    placeholder="Password   "
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="errormessage"
                  />
                </div>
                <p> </p>
                <h6>
                  <Link to="/fp/forgotpassword" className="fp-btn ">
                    Forgotpassword ?
                  </Link>
                </h6>
                <div className="row">
                  <br />
                  <button
                    className="btn btn-success col log-btn"
                    type="submit"
                    disabled={formikProps.isSubmitting}
                  >
                    Login
                  </button>

                  <Link className="btn btn-danger col log-btn" to="/">
                    Back
                  </Link>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-info text-center"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Demo Credentials
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <h2> Demo Login Data</h2>
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body"><h6>Email: vimalkarthik315@gmail.com</h6><br/>
                      <h6>Password: 111111</h6>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <p> </p>

      <div className="row">
        <div class="sticky-bottom copyright">© Copyright @ Markdown Viewer</div>
      </div>
    </div>
  );
}

export default Login;
