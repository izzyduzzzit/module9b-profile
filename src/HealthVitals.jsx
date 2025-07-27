// Izarra Villareal CS 81 JavaScript Module 9 Assignment 9B: Custom Profile Component

// GitHub URL: https://github.com/izzyduzzzit/module9b-profile

function HealthVitals({ name, heartRate, bloodPressure, temperature, isDarkMode }) {
  /* Using props passed from parent component App.jsx. Props being used are name, heartRate, bloodPressure, temperature, & isDarkMode */
  /* Similar to the UserProfile component I am using inline style for the HealthVitals card style div
     that changes based upong the isDarkMode prop passed to it from the parent App.jsx component.
     Again, CSS is my weak aread and I had to get help for that, so boxShadow was another new thing for me */
  const vitalCardStyle = {
    maxWidth: '300px',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: isDarkMode ? '#f0e6ff' : '#f0fff0', // Toggles theme to green or purple based on isDarkMode prop
    fontFamily: 'Arial, sans-serif',
    margin: '10px',
    border: '2px solid #ccc'
  };

  return (
    <div style={vitalCardStyle}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '15px', textAlign: 'center' }}>
        {name} - Vitals
      </h2>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>❤️ Heart Rate: {heartRate}</p>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>🩸 Blood Pressure: {bloodPressure}</p>
      <p style={{ fontSize: '16px', color: '#555', marginBottom: '8px' }}>🌡️ Body Temperature: {temperature}</p>
    </div>
  );
}

export default HealthVitals;
