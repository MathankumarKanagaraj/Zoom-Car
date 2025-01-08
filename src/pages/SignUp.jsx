import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import logo from "../assets/logo.png";

const SignupPage = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    reEnterPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/signup",
        values
      );
      if (response.status === 200) {
        // alert("Signup successful!");
        resetForm();
        navigate("/login");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container backgroudImage">
      <div className="login-box">
        <div className="d-flex justify-content-center">
          <img src={logo} alt="Logo" />
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            reEnterPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-row d-flex">
                <div className="form-group col-6 me-2">
                  <label htmlFor="name">Name</label>
                  <Field
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message text-danger"
                  />
                </div>
                <div className="form-group col-6 pl-2">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message text-danger"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message text-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="reEnterPassword">Re-Enter Password</label>
                <Field
                  name="reEnterPassword"
                  type="password"
                  className="form-control"
                  placeholder="Re-enter your password"
                />
                <ErrorMessage
                  name="reEnterPassword"
                  component="div"
                  className="error-message text-danger"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary login-button mt-2 mb-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="d-flex justify-content-center">
          <a className="text-black" href="/">
            <span className="small-text"> Already have an account?</span>
            <span className="blue-text"> Login </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
