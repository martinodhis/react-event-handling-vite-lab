// src/components/PasswordInput.jsx
import './PasswordInput.css'

function PasswordInput (){
  const handleChange = (e) => {
    console.log('Entering password...')
  }

  return(
    <input
      type="password"
      placeholder="Enter your password"
      className="password-input"
      data-testid="password-input"
      onChange={handleChange}
      aria-label="Password input field"
    />
  )
}

export default PasswordInput;