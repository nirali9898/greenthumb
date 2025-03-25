import React from 'react';

const BackGroundImage = () => {
  const style = {
    width: '100%',
    height: '100vh', // Full height of the viewport
    backgroundImage: 'url(image.jpg)', // Updated path

    backgroundSize: 'cover', // Covers entire area
    backgroundPosition: 'center', // Center the image
  };

  return (
    <div style={style}>
      {/* Your content goes here */}
    </div>
  );
};

export default BackGroundImage;
