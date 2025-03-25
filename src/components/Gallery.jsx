import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h1>Gallery Page</h1>
            <p>Welcome to the Gallery Page!</p>
            <div className="gallery">
                <img src="image1.jpg" alt="Gallery Image 1" />
                <img src="image2.jpg" alt="Gallery Image 2" />
                <img src="image3.jpg" alt="Gallery Image 3" />
                <img src="image4.jpg" alt="Gallery Image 4" />
            </div>
        </div>
    );
};


export default Gallery;
