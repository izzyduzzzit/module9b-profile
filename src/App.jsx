// Izarra Villareal CS 81 JavaScript Module 9 Assignment 9B: Custom Profile Component

// GitHub URL: https://github.com/izzyduzzzit/module9b-profile

// Importing useState for "dark mode" theme color change function from react library
// Also importing UserProfile components
import { useState } from 'react';
import UserProfile from './UserProfile';
import HealthVitals from './HealthVitals';

function App() {
  // State to track if "dark mode" color change theme is on
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Staticly entered data for three people in parent component "App" to be used via props in other components
  const person1Name = "Alice Glass";
  const person1Bio = "Co-founder and former frontwoman of the electronic band Crystal Castles.";
  const person1Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Alice_Glass_09_14_2017_-23_%2837254316745%29.jpg/500px-Alice_Glass_09_14_2017_-23_%2837254316745%29.jpg";
  const person1HeartRate = "72 bpm";
  const person1BloodPressure = "120/80";
  const person1Temperature = "98.6°F";

  const person2Name = "Hope Sandoval";
  const person2Bio = "American singer, songwriter, and the lead singer of Mazzy Star and Hope Sandoval & the Warm Inventions.";
  const person2Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hope_Sandoval.jpg/500px-Hope_Sandoval.jpg";
  const person2HeartRate = "68 bpm";
  const person2BloodPressure = "115/75";
  const person2Temperature = "98.4°F";

  const person3Name = "Björk Guðmundsdóttir";
  const person3Bio = "Icelandic singer, songwriter, composer, record producer, and actress.";
  const person3Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bjork_Orkestral_Paris_%28cropped%29.png/500px-Bjork_Orkestral_Paris_%28cropped%29.png";
  const person3HeartRate = "75 bpm";
  const person3BloodPressure = "118/78";
  const person3Temperature = "98.7°F";

  // Function to toggle between green and purple themes a.k.a. "dark mode" toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ 
      // I had to get some help with the inline CSS as I am not an expert (vh is new to me)
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5', 
      paddingTop: '20px' 
    }}>
      {/* "Dark mode" theme toggle button for green or purple */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button 
          onClick={toggleTheme}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: isDarkMode ? '#9c88ff' : '#88ff88',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {isDarkMode ? 'Green' : 'Purple'}
        </button>
      </div>

      {/* User profile cards to render statically entered user info */}
      <div style={{ /* Again, I had to get some online help with CSS; flex was new to me */
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px', gap: '20px' }}>
        <UserProfile 
          /* Passing name, bio, image, & isDarkMode props to UserProfile component for each user */
          name={person1Name}
          bio={person1Bio}
          image={person1Image}
          isDarkMode={isDarkMode}
        />
        <UserProfile 
          name={person2Name}
          bio={person2Bio}
          image={person2Image}
          isDarkMode={isDarkMode}
        />
        <UserProfile 
          name={person3Name}
          bio={person3Bio}
          image={person3Image}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Health Vitals Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px', gap: '20px' }}>
        <HealthVitals 
          name={person1Name}
          heartRate={person1HeartRate}
          bloodPressure={person1BloodPressure}
          temperature={person1Temperature}
          isDarkMode={isDarkMode}
        />
        <HealthVitals 
          name={person2Name}
          heartRate={person2HeartRate}
          bloodPressure={person2BloodPressure}
          temperature={person2Temperature}
          isDarkMode={isDarkMode}
        />
        <HealthVitals 
          name={person3Name}
          heartRate={person3HeartRate}
          bloodPressure={person3BloodPressure}
          temperature={person3Temperature}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}

export default App;
