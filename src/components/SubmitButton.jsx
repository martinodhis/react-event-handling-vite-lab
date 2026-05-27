// src/components/SubmitButton.jsx
import './SubmitButton.css'

function SubmitButton (){
  const handleEnter = (e) => {
    console.log('Mouse Entering')
  }

  const handleLeave = (e) => {
    console.log('Mouse Exiting')
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