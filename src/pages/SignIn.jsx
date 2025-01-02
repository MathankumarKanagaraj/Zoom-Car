import React from "react";
import axios from "axios";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string()
        .required("Email is required")
            .email("Invalid email address"),
        password: Yup.string()
        .required("Password is required")
            .min(4, "Password must be at least 4 characters"),
            
    });

    const handleSubmit = async (values) => {
        const loginData = {
            email: values.email,
            password: values.password,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', loginData);
            if (response.status === 200 && response.data.token) {
                navigate('/dashboard');
                localStorage.setItem("authToken", response.data.token);
                localStorage.setItem("refreshToken",response.data.refreshToken)
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Login failed. Please check your credentials and try again.");
        }
    };

    return (
        <div className="login-container backgroudImage ">
            <div className="login-box">
                <div className="d-flex justify-content-center">
                    <img src={logo} alt="Logo" />
                </div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="input-group">
                                <label>Email</label>
                                <Field 
                                    type="email" 
                                    name="email" 
                                    className="rounded-3" 
                                    placeholder="Enter your email"
                                />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <Field 
                                    type="password" 
                                    name="password" 
                                    className="rounded-3 " 
                                    placeholder="Enter your password"
                                />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                            </div>
                            <button type="submit" className="login-button mt-3 mb-5" >
                                {isSubmitting ? "Logging in..." : "Login"}
                            </button>
                            <div className="text-black d-flex justify-content-center mt-0" href="/signup">
                                <span className="small-text me-2">Already have an account?</span> 
                                <a className="blue-text small-text" href="/signup"> Signup</a>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignIn;