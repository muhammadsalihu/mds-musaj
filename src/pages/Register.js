import React from "react"
import Logo from "../assets/mwares-logo.svg"
import LogoIllustration from "../assets/man.svg"

// Authentication
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

// Routing
import { Link, useHistory, useLocation, Redirect } from "react-router-dom"

// UI
import { Row, Col, Container, FormGroup, Label, Spinner } from "reactstrap"
const loading = false
require("./index.css")

const Register = () => {
  return (
    <>
      <Container fluid>
        <Row>
          {/* Left Section*/}
          {/* d-flex flex-column align-items-center mt-5 p-5 */}
          <Col>
            <div className="d-flex flex-column align-items-center mt-5 p-5">
              <img src={Logo} alt="Login" className="img-fluid" />
              <img
                src={LogoIllustration}
                alt="Login"
                className="md-fluid w-75 object-fit-cover"
              />
              <h3
                className="font-weight-bolder text-dark text-center pt-0 mt-0"
                style={{
                  font: "25.2px serif Eczar ",
                }}
              >
                We are a bridge that connects you to your dream job or employer.
              </h3>
            </div>
          </Col>

          {/* Right Section*/}
          <Col
            sm="5"
            className="py-5 px-md-5 d-flex justify-content-center align-items-center"
          >
            <div className="w-100 px-md-4">
              <p className="font-weight-bolder h1">Register</p>
              <p>Your dream job is a few clicks away.</p>
              {/* Form Validation*/}
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email("Email is invalid")
                    .required("Email is required"),

                  password: Yup.string().required("Password is required"),
                })}
                render={({ errors, status, touched }) => (
                  <Form>
                    {/* email */}
                    <FormGroup>
                      <Label className="mb-0 col-form-label">Email</Label>
                      <Field
                        placeholder="salihu@musaj.com"
                        name="email"
                        type="email"
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                      />

                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </FormGroup>

                    {/* Password */}
                    <FormGroup>
                      <Label className="mb-0 col-form-label myt-2">
                        Password
                      </Label>
                      <Field
                        placeholder="************"
                        name="password"
                        type="password"
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                      />

                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </FormGroup>

                    {/* Forgot Password */}
                    <div className="text-right">
                      <Link
                        to="/forgotPassword"
                        className="text-danger mb-0 font-weight-medium"
                      >
                        Forgot password
                      </Link>
                    </div>

                    <Link to="/register" className="text-dark">
                      <button
                        type="submit"
                        className="btn btn-danger py-3 btn-block my-3"
                        disabled={loading}
                      >
                        Register
                      </button>
                    </Link>

                    {/* Create new account */}
                    <Link to="/" className="text-dark">
                      Already have an account?
                      <span className="text-danger font-weight-medium">
                        Login
                      </span>
                    </Link>
                  </Form>
                )}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register
