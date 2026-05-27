// Code SubmitButton Component Here
// src/components/SubmitButton.jsx
/**
 * SubmitButton Component
 * 
 * Purpose: Renders a submit button with mouse event tracking
 * for anti-botting security measures.
 * 
 * Events:
 * - onMouseEnter: Triggers handleEnter when mouse hovers over button
 * - onMouseLeave: Triggers handleLeave when mouse leaves button
 * 
 * Connected Components:
 * - Parent: App
 * - Children: None
 * 
 * @returns {JSX.Element} Submit button with mouse event handling
 */
import './SubmitButton.css'

function SubmitButton (){
    
  /**
   * handleEnter - Event handler for mouse enter events
   * Logs when user's mouse enters the button area
   * @param {MouseEvent} e - The mouse enter event object
   */
  const handleEnter = (e) => {
    // Log mouse entry for anti-botting movement analysis
    console.log('Mouse Entering')
    
    // Security engineer can extend this function to:
    // - Track mouse movement patterns
    // - Measure hover duration
    // - Detect bot-like cursor behavior
  }

  /**
   * handleLeave - Event handler for mouse leave events
   * Logs when user's mouse exits the button area
   * @param {MouseEvent} e - The mouse leave event object
   */
  const handleLeave = (e) => {
    // Log mouse exit for anti-botting movement analysis
    console.log('Mouse Exiting')
    
    // Security engineer can extend this function to:
    // - Analyze mouse trajectory
    // - Detect unnatural movement patterns
    // - Flag suspicious interaction timing
  }
    return(
        <button
      className="submit-button"
      data-testid="submit-button"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label="Submit password button"
    >
      Submit Password
    </button>
    )
}

export default SubmitButton;