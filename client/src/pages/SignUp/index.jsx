import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import "./index.scss"
import Search from '../../components/Search';
import ShopNavbar from '../../layout/ShopNavbar';
import Footer from '../../layout/Footer';
import axios from 'axios';

export const SignupForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async () => {
        const resp = await axios.post("http://localhost:8000/api/user/", {
            "username": username,
            "password": password,
            "email": email
        })
    }

    return (
        <div className='formikyup'>
            <Search />
            <ShopNavbar />
            <Formik
                initialValues={{ username: '', password: '', email: '' }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            {...formik.getFieldProps('firstName')}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                        ) : null}

                        <label htmlFor="lastName">Password</label>
                        <input
                            id="lastName"
                            type="password"
                            {...formik.getFieldProps('lastName')}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div>{formik.errors.lastName}</div>
                        ) : null}

                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            {...formik.getFieldProps('email')}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}

                        <button type="submit" onClick={() => handleRegister()}>Submit</button>
                    </form>
                )}
            </Formik>
            <Footer />
        </div>
    );
};
