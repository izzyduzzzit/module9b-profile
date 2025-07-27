// Izarra Villareal CS 81 JavaScript Module 9 Assignment 9B: Custom Profile Component

// GitHub URL: https://github.com/izzyduzzzit/module9b-profile

// UserProfile component function that accepts props from the parent component (statically entered in App.jsx)
function UserProfile({ name, bio, image, isDarkMode }) { /* using props for name, bio, image, & isDarkMode */
  /* Constant variable used for inline style on return of div for UserProfile cards */
  const cardStyle = {
    maxWidth: '300px',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: isDarkMode ? '#e6d7ff' : '#e6ffe6', /* Using the prop for isDarkMode to set the card theme color */
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    margin: '10px'
  };

  return (
    <div style={cardStyle}>
      <img 
        /* Inline style for image within the cardStyle div (objectFit was new for me) */
        src={image} /* Using the prop for user's image */
        style={{ 
          width: '120px', 
          height: '120px', 
          borderRadius: '50%', 
          objectFit: 'cover', 
          border: '4px solid #ddd', 
          marginBottom: '16px' 
        }} 
      />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' } /* Using the prop for user's name */}>{name}</h1> 
      <p style={{ fontSize: '16px', color: '#555' /* Using the prop for user's bio */}}>{bio}</p>
    </div>
  );
}

export default UserProfile;
