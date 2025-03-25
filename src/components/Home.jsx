import React from 'react';

const Home = () => {
    return (
       <div>
          <a href="/desired-link"> {/* Add a link to make the image clickable */}
            <img src="../../assets/images/your-image.jpg" alt="Clickable Home Image" style={{ width: '100%', height: 'auto' }} /> {/* Add your image here */}
          </a>


            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
        </div>
    );
};

export default Home;
