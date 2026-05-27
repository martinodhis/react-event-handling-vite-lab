import { useState } from 'react'
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'
function App() {

  return (
    <div className="app-container">
      <h1>Password Security Lab</h1>
      <p className="instructions">
        Type in the password field and hover over the submit button to test event tracking.
        Check the console for security event logs.
      </p>
      
      <div className="form-wrapper">
        {/* PasswordInput: Handles password text input with change tracking */}
        <PasswordInput />
        
        {/* SubmitButton: Handles mouse enter/leave events for anti-botting */}
        <SubmitButton />
      </div>
    </div>
  )
}

export default App
