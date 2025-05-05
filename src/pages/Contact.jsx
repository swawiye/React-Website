import { useState, useEffect } from "react";

const Contact = () => {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

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

        if (!values.message) {
            errors.message = "Message is required";
        } else if (values.message.length < 301) {
            errors.message = "Message must not exceed 300 characters";
        }

        return errors;
    };

    return (
        <>
            <div className="form-container">
                {Object.keys(formErrors).length === 0 && isSubmit && (
                    <div className="success">Message sent!</div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                    <h3>Reach out to us</h3>

                    <div>
                        <label className="form-label">Name</label>
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
                        <label className="form-label">Message</label>
                        <textarea
                            type="text"
                            name="message"
                            className={`form-input ${formErrors.message ? "input-error" : ""}`}
                            value={formValues.message}
                            onChange={handleInput}
                        />
                        {formErrors.message && <p className="error">{formErrors.message}</p>}
                    </div>

                    <button type="submit">Send</button>
                </form>
            </div>
            
            <div className="contacts">
                <h3>Phone: +254707474788</h3>
                <h3>Email address: greenifyorg@gmail.com</h3>
                <h3>Twitter: Greenify</h3>
            </div>
        </>
    );
};

export default Contact;
