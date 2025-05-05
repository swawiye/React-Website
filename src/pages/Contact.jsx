// import React from "react";
// 
// //Class based components
// class ReachOut extends React.Component {
//     render() {
//         return <h4>Email address: {this.props.email}, Phone: {this.props.phone} & LinkedIn: {this.props.linkedin}</h4>
//     }
// }
// export default ReachOut;
//import { useState } from "react";

import { useState, useEffect } from "react";

const Contact = () => {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("Form submitted successfully:", formValues);
            setFormValues(initialValues); // Clear the form
    
            const timer = setTimeout(() => {
                setIsSubmit(false); // Hide success message after 3s
            }, 3000);
    
            return (() => clearTimeout(timer)); // Cleanup on unmount
        }
    }, [formErrors, isSubmit, formValues]);
    

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!values.username) {
            errors.username = "Username is required";
        } else if (values.username.length < 3) {
            errors.username = "Username must be at least 3 characters";
        }

        if (!values.email) {
            errors.email = "Email address is required";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (!passwordRegex.test(values.password)) {
            errors.password = "Password must be more than 8 characters, include uppercase and lowercase characters & a number";
        }

        return errors;
    };

    return (
        <div className="form-container">
            {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="success">Sign In successful</div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
                <h3>Reach out to me</h3>

                <div>
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className={`form-input ${formErrors.username ? "input-error" : ""}`}
                        value={formValues.username}
                        onChange={handleInput}
                    />
                    {formErrors.username && <p className="error">{formErrors.username}</p>}
                </div>

                <div>
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        className={`form-input ${formErrors.email ? "input-error" : ""}`}
                        value={formValues.email}
                        onChange={handleInput}
                    />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                </div>

                <div>
                    <label className="form-label">Password</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className={`form-input ${formErrors.password ? "input-error" : ""}`}
                            value={formValues.password}
                            onChange={handleInput}
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    {formErrors.password && <p className="error">{formErrors.password}</p>}
                </div>

                <button type="submit">Send</button>
            </form>

            <h3>Phone: +254701374708</h3>
            <h3>Email address: sovereign.wawiye@gmail.com</h3>
            <h3>LinkedIn: Sovereign Wawiye</h3>
        </div>
    );
};

export default Contact;
