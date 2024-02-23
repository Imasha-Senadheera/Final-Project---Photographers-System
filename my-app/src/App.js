import React from 'react';
import './App.css';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <div className="App">
      {/* Render SignInForm */}
      <SignInForm />
      {/* Render SignUpForm */}
      <SignUpForm />
    </div>
  );
}

export default App;
