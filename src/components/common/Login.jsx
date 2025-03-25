import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/images/360_F_692803567_M9RLcCutvQd6OJp4kYJWyYbgKuwNTC7w.jpg'; // Adjusted path
import Header from './Header'; // Import the Header component

export const Login = () => {                      
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitHandler = async(data) => {
    console.log(data);

    try {
      const res = await axios.post("/login", data);
      if(res.status === 200){
        alert("Login successful");
      navigate("/agency"); // Redirect to agency page after successful login

      } else {
      alert("Login failed. Please check your credentials and try again.");

      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
       <div style={{ 
         textAlign: "center", 
         backgroundImage: `url(${backgroundImage})`, // Use the imported image
         backgroundSize: 'cover', // Cover the entire area
         backgroundPosition: 'center', // Center the image
         height: '100vh', // Full height
         color: 'black' // Optional: Change text color for better visibility
       }}>
      <Header /> {/* Include the Header component */}
      <div style={{ 
          border: '1px solidrgb(156, 225, 174)', 
          padding: '20px', 
          borderRadius: '10px', 
          backgroundColor: '', // Match the desired background
          width: '450px', 
          margin: '0 auto',
          position: 'absolute', // Centering the box
          top: '50%', // Move down 50% of the viewport height
          left: '50%', // Move right 50% of the viewport width
          transform: 'translate(-50%, -50%)', // Adjust position to center
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' 
        }}>

        <h1>LOGIN PAGE 🔑</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <input type="email" placeholder="Email Address 📧" {...register("email", { required: "Email is required", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Email is not valid" } })} style={{ marginBottom: '10px' }} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div>
            <input type="password" placeholder="Password 🔒" {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" } })} style={{ marginBottom: '10px' }} />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <div>
            <button type="submit" style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}>Sign In</button>

          </div>
          <div>
            <p>Don't have an account? <a href="/signup"> Sign Up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};
