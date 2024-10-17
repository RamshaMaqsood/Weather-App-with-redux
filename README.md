This project is a React-based weather application that provides real-time weather data for a specified city. The app allows users to search for a city's weather, including temperature, humidity, wind speed, and a weather icon representing the conditions. This README explains how the app was refactored, the form validation techniques employed, and how performance monitoring was implemented to ensure an optimized user experience.

Table of Contents
Refactoring
Form Validation
Performance Monitoring
Technologies Used
Installation
Usage
Contributing
Refactoring
The application underwent significant refactoring to improve maintainability, code readability, and modularity. Below are some key areas that were improved:

1. Separation of Concerns:
Icons Logic: Initially, the logic for managing weather icons based on weather codes was embedded directly in Weather.js. This was refactored to a new utility file called icons.jsx, which now contains a function getWeatherIcon() that handles the mapping of weather condition codes to the appropriate icons. This centralizes the icon management, making it easier to maintain and update.

Before: Icon logic was inline in Weather.js.
After: Icon logic moved to icons.jsx.
SearchBar Component: The search input and button were refactored into a dedicated SearchBar.jsx component. This separation allows better modularity and makes the search bar reusable in other parts of the application if needed.

2. Code Cleanliness:
Component Breakdown: The app was divided into smaller, more manageable components. For example:
Weather.js: Handles fetching weather data and rendering the main weather UI.
WeatherData.jsx: A memoized component that renders weather details (temperature, humidity, wind speed) and ensures that it only re-renders when data changes.
SearchBar.jsx: Manages the search input and form submission.
This modular approach improves code organization and makes it easier to test and debug individual components.
Form Validation
To ensure proper input handling and validation in the search form, the following validation techniques were applied:

1. React Hook Form for Validation:
The app uses react-hook-form for managing the form input and validating the city name.
The city name field is required, and the form will not submit if the field is empty. If the user attempts to submit the form without entering a city name, an error message ("City name is required") is displayed.
2. Debounced Search Input:
To prevent unnecessary API calls when users are typing, the search input is debounced using lodash.debounce. This waits for the user to stop typing for 300 milliseconds before making the API call. This prevents flooding the API with requests and improves performance.
Example of Validation:
In the SearchBar.jsx component:

<input
  {...register("city", { required: "City name is required" })}
  type="text"
  placeholder="Search city"
/>
This ensures that the user must enter a city name before submitting the form.

Performance Monitoring
To ensure the app is performant and responsive, we implemented the following performance monitoring techniques:

1. React Profiler:
React Profiler was used to monitor and analyze component rendering behavior. The tool helped identify unnecessary re-renders and potential performance bottlenecks.
Memoization was applied to the WeatherData.jsx component using React.memo to prevent it from re-rendering unless the weather data changes. This improves rendering efficiency by only updating the DOM when necessary.
2. Lazy Loading:
The weather data component (WeatherData.jsx) is loaded lazily using React.lazy and Suspense. This defers loading until it’s needed, improving the initial load time of the app and reducing the overall bundle size.
Example:
const WeatherData = React.lazy(() => import("./WeatherData"));
3. Debounced Search:
Debouncing the search input (as mentioned in the form validation section) not only prevents unnecessary API requests but also reduces the strain on the UI, making the app more responsive.
Technologies Used
React: JavaScript library for building user interfaces.
Redux: For managing the application state.
Redux Toolkit: Simplifies Redux logic with pre-built functions and tools.
React Hook Form: Simplified form handling and validation.
React Profiler: For performance monitoring and optimization.
Lodash (debounce): To debounce the search input and prevent unnecessary API calls.
CSS Flexbox & Grid: For creating a responsive layout.
OpenWeatherMap API: To fetch real-time weather data.
Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/weather-app.git
Navigate to the project directory:

bash
Copy code
cd weather-app
Install the dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add your OpenWeatherMap API key:

makefile
Copy code
VITE_APP_ID=your_api_key_here
Start the development server:

bash
Copy code
npm run dev

Usage
Enter a city name in the search bar and press the search button or hit "Enter" to fetch the weather information.

Toggle between light and dark mode using the button provided.

Contributing
Contributions are welcome! If you have suggestions for improvements or find bugs, feel free to open an issue or submit a pull request.

