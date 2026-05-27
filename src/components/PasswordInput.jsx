// Code PasswordInput Component Here
// src/components/PasswordInput.jsx
/**
 * PasswordInput Component
 * 
 * Purpose: Renders a password input field with change event tracking
 * for anti-botting security measures.
 * 
 * Events:
 * - onChange: Triggers handleChange when user types
 * 
 * Connected Components:
 * - Parent: App
 * - Children: None
 * 
 * @returns {JSX.Element} Password input field with event handling
 */
import './PasswordInput.css'
function PasswordInput (){
    
  /**
   * handleChange - Event handler for input change events
   * Logs typing activity for security cadence analysis
   * @param {Event} e - The change event object
   */
  const handleChange = (e) => {
    // Log typing activity for anti-botting security analysis
    console.log('Entering password…')
    
    // Security engineer can extend this function to:
    // - Track typing speed/cadence
    // - Analyze keystroke dynamics
    // - Detect automated input patterns
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