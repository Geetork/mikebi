# Math Learning Web Page
This web page is designed for children to practice and improve their mathematical skills. The user scenario involves presenting a math problem with text and an image. The child selects an answer (A, B, or C) and checks if the chosen answer is correct. The page aims to create an engaging and user-friendly experience for young learners.

# Features and Requirements
## Technology Stack:

1. Vue 3 + Vite
2. Bootstrap grid
3. Pinia
4. TypeScript

## Design:

1. Implement answer options as radio buttons.
Enable answer selection using the provided A, B, and C buttons.

2. Store task details in a JSON file with the format: {task text, task conditions, task image, correct_answer, answer options}.
Utilize Axios to fetch data from the JSON file.
Save data in Vuex/Pinia store for usage on the page.

3. Utilize Bootstrap/Vuetify grid system for an adaptive layout.
Ensure the page is responsive and functions well on various devices (phones, tablets, laptops).
Check Button Functionality:

4. Implement a "Check" button to verify the selected answer.
Notify the child of the correctness through an alert.
Reset all selected buttons after notification.
Lightbulb Button:

5. Add a button with a lightbulb icon.
Display a centered modal window upon clicking the lightbulb button.
Include a close button inside the modal.
Code Quality:

## Getting Started
1. Clone the repository.
2. Run npm install to install dependencies.
3. Execute npm run dev to start the development server.