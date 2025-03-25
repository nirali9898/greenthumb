import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/images/360_F_692803567_M9RLcCutvQd6OJp4kYJWyYbgKuwNTC7w.jpg'; // Adjusted path
import Header from './Header'; // Import the Header component

export const Signup = () => {                      
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitHandler = async(data) => {
    console.log(data);
    data.roleId = "67c150c182056fd151421e8c";

    try {
      const res = await axios.post("/user", data);
      if(res.status === 201){
        alert("User created successfully");
        navigate("/login");
      } else {
        alert("User not created");
      }
    } catch (error) {
      console.error("Error during signup:", error);
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

        <h1>SIGNUP PAGE ✍️</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label style={{ marginBottom: '10px', display: 'block' }}>First Name ✍️</label>
            <input type="text" {...register("firstName", { minLength: { value: 1, message: "First name must be at least 1 character" }, maxLength: { value: 50, message: "First name must be at most 50 characters" } })} />
            {errors.firstName && <p className="error">{errors.firstName.message}</p>}
          </div>
          <div>
            <label style={{ marginBottom: '10px', display: 'block' }}>Last Name ✍️</label>
            <input type="text" {...register("lastName", { minLength: { value: 1, message: "Last name must be at least 1 character" }, maxLength: { value: 50, message: "Last name must be at most 50 characters" } })} />
            {errors.lastName && <p className="error">{errors.lastName.message}</p>}
          </div>

          <div>
            <label style={{ marginBottom: '10px', display: 'block' }}>Email Address 📧</label>
            <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Email is not valid" } })} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div>
            <label style={{ marginBottom: '10px', display: 'block' }}>Password 🔒</label>
            <input type="password" {...register("password", { minLength: { value: 8, message: "Password must be at least 8 characters" }, maxLength: { value: 14, message: "Password must be at most 14 characters" } })} />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          
          <div>
            <label style={{ marginBottom: '10px', display: 'block' }}>Contact 📞</label>
            <input type="text" {...register("contact", { maxLength: { value: 10, message: "Contact must be at most 10 digits" }, pattern: { value: /^[0-9]{10}$/, message: "Contact must be a 10-digit number" } })} />
            {errors.contact && <p className="error">{errors.contact.message}</p>}
          </div>

          <div>
            <button type="submit" style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Sign Up</button>

          </div>
          <div>
            <p>Already have an account? <a href="/login"> Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};
