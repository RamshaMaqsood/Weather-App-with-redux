Weather App
A simple and elegant weather application built with React, Redux, and styled with CSS. This app provides real-time weather information and features various optimizations for better performance and user experience.

Table of Contents
Features
Technologies Used
Installation
Usage
Optimizations
1. Redux for Global State Management
2. React Performance Optimizations
3. Paginated API Requests
4. Debounced Search Input
5. Dark Mode Toggle
Contributing
License
Features
Real-time weather data from OpenWeatherMap API
Search functionality for any city
Display of humidity, wind speed, and temperature
Dark mode toggle
Responsive design for mobile and desktop
Technologies Used
React
Redux
React Router
CSS
OpenWeatherMap API
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/weather-app.git
Navigate to the project directory:
bash
Copy code
cd weather-app
Install the dependencies:
bash
Copy code
npm install
Usage
Start the development server:
bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to view the application.
Optimizations
1. Redux for Global State Management
To manage weather data across multiple components efficiently, we replaced the useState hook with Redux. This allows for:

Centralized state management.
Easier debugging with Redux DevTools.
Enhanced performance through memoization of components.
2. React Performance Optimizations
Several techniques were implemented to optimize performance:

React.memo: Used to prevent unnecessary re-renders of components that receive the same props.

javascript
Copy code
const WeatherData = React.memo(({ data }) => {
    // Component logic...
});
React.lazy and Suspense: For code-splitting, components are loaded only when needed, improving the initial loading time.

javascript
Copy code
const WeatherData = React.lazy(() => import('./WeatherData'));
3. Paginated API Requests
Instead of loading all weather data at once, we implemented infinite scrolling to fetch historical weather data in chunks, improving load times and user experience.

The API is queried as the user scrolls, allowing for seamless access to more data.
4. Debounced Search Input
To optimize API requests while searching for city weather:

Implemented a debounce function that delays the search input processing, minimizing the number of API calls.

javascript
Copy code
const debouncedSearch = useDebounce(search, 300);
5. Dark Mode Toggle
A dark mode feature was added using useContext for easy toggling between light and dark themes. This enhances accessibility and user preference settings.

The toggle state is managed globally, making it easy to switch themes across the application.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.