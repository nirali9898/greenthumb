import React, { useState } from 'react';
import './Contact.css';
import backgroundImage from '../assets/images/HIGH_Res_Logo_955x.webp';

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
        <div style={{
        
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          padding: '100px'
        }}>
            <div className="contact-content" style={{
              backgroundColor: 'rgba(255,255,255,0.8)',
              padding: '40px',
              borderRadius: '10px',
              maxWidth: '800px',
              margin: '50px auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '60vh'
            }}>
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
        </div>
    );
};

export default Contact;
