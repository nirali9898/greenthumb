import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, message });
    };

    return (
        <div className="contact-container">
            <h1>Contact Page</h1>
            <p>Welcome to the Contact Page!</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <button type="submit">Submit</button> {/* Ensure button is within the form */}
                </div>
            </form>
        </div>
    );
};

export default Contact;
