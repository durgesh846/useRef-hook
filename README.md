# UseRef Demo

This is a small React app that demonstrates the use of the useRef hook.

## To start this application

1:- Clone the repository to your local machine.

2:- In the project directory, run npm install to install the required dependencies.

3:- Run npm start to start the app in development mode.

4:- Open http://localhost:3000 in your web browser to view the app.

In the project directory, you can run:

## Usage

The app consists of a single component called UseRefDemo that demonstrates the use of the useRef hook.

When you open the app in your web browser, you'll see a button labeled "Increment Count". Clicking the button will increment a counter that is displayed on the page. There are two counters: one that uses the useState hook and one that uses the useRef hook. The useState counter is updated using the setCount function, while the useRef counter is updated using the countRef.current value.

## Testing

To run the test cases, you'll need to have Cypress installed on your machine. If you don't have Cypress installed, follow these steps:

1:- Install Cypress by running the command npm install cypress --save-dev.

2:- Run npm test to open the Cypress test runner.

The test cases are located in the cypress/integration directory. There is one test case that verifies the functionality of the UseRefDemo component. The test case simulates clicking the "Increment Count" button and checks that the values of count and countRef update correctly.

## Credits
This app was created by Durgesh Agnihotri.
