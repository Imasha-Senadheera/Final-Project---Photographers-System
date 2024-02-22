import React from 'react';
import './App.css';
import SignInForm from './components/SignInForm/SignInForm';

function App() {
  return (
    <div className="App">
      <SignInForm /> {/* Add this line to render the SignInForm */}
    </div>
  );
}

export default App;
