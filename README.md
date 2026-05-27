# Lab: Password Input
src/
├── __tests__/                    # Test files
│   ├── PasswordInput.test.jsx   # PasswordInput component tests
│   └── SubmitButton.test.jsx    # SubmitButton component tests
├── assets/                       # Static assets
│   └── react.svg
├── components/                   # React components (isolated)
│   ├── PasswordInput.jsx        # Password input with change tracking
│   ├── PasswordInput.css        # PasswordInput styles
│   ├── SubmitButton.jsx         # Submit button with mouse tracking
│   └── SubmitButton.css         # SubmitButton styles
├── App.jsx                       # Main app component (composition)
├── App.css                       # App-level styles
├── index.css                     # Global base styles
├── main.jsx                      # React entry point
└── ...config files


# screenshot
![Screenshot](./src/Images/Screenshot.png)


# 📄 License
- MIT License - Feel free to use this educational 


---

## ▶️ How to Run the Project

### Step 1: Set Up the Project
```bash
# 1. Create project directory
mkdir react-password-input-lab
cd react-password-input-lab

# 2. Initialize npm (if starting fresh)
npm init -y

# 3. Create all the files listed above in their respective paths
# (Copy/paste each file content into the correct location)

# 4. Install dependencies
npm install

# Start Development Server
npm run dev

# → Opens at http://localhost:5173

Step 3: Verify Functionality
Open browser DevTools (F12) → Console tab
Type in password field → See "Entering password…" in console
Hover over "Submit Password" button → See "Mouse Entering"
Move mouse away → See "Mouse Exiting"



## Task 5: Document and Maintain

## Tools and Resources
- **GitHub Repository:** [React Event Handling Vite Lab](https://github.com/learn-co-curriculum/react-event-handling-vite-lab)
- **Event Handling in React:** [React Documentation](https://react.dev/learn/responding-to-events#adding-event-handlers)


### Test
NPM TEST
then output must be-
 ✓ src/__tests__/SubmitButton.test.jsx (3)

 Test Files  2 passed (2)
      Tests  6 passed (6)
   Start at  20:56:13
   Duration  59.31s (transform 2.05s, setup 35.06s, collect 622ms, tests 154ms, environment 67.39s, prepare 7.39s)

 PASS  Waiting for file changes...
       press h to show help, press q to quit