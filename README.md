# [🌤️Kraftshala Weather Application](https://weather-app-aakarshit.vercel.app/)

## Overview
This project is a weather application developed as part of the selection process for the Frontend Developer intern position at Kraftshala. The application uses the Open Weather API to fetch and display current weather information based on user input. It also includes a feature to toggle between dark mode and light mode.

## Features
- Display current weather information including temperature, description, humidity, wind speed, and visibility.
- Show weather icons based on the current weather conditions.
- Provide an input field for users to enter a city name or zip code.
- Allow toggling between dark mode and light mode for better user experience.

## Technologies Used
- React: For building the user interface.
- TailwindCSS: For styling the application.
- Open Weather API: For fetching weather data.
- Vite: For bundling and running the development server.

## Setup Instructions
1. **Clone the Repository:**
    ```sh
    git clone https://github.com/Aakarshit07/Kraftshala_Frontend_Intern_Aakarshit

    cd Kraftshala_Frontend_Intern_Aakarshit
    ```

2. **Install Dependencies:**
    ```sh
    npm install 
    ```
    ### Setup instructions for  tailwind

    [Tailwind official instruction Doc](https://tailwindcss.com/docs/installation)

    1. Install Tailwind CSS

    ```
    npm install -D tailwindcss postcss autoprefixer
    ```

    2. Create configure file your template paths

    ```
    npx tailwindcss init
    ```

    3. Add file extensions to tailwind Configure file in contens property

    ```
        "./src/**/*.{html,js, jsx, ts, tsx}", "./index.html"
    ```

    4. Add the tailwind firectives at the top of the `index.css`

    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

3. **Run the Application:**
    ```sh
    npm run dev
    ```
    This will start the development server and you can view the application at `http://localhost:5173`.

## Project Structure
- `src/`: Contains all the source code for the application.
  - `components/`: Contains the React components.
    - `WeatherDisplay.jsx`: Component to display the weather information.
    - `WeatherSearch.jsx`: Component for the search input and button.
    - `Loading.jsx`: Component to show a loading spinner.
  - `hooks/`: Contains custom React hooks.
    - `useWeather.js`: Custom hook to fetch weather data from the API.
  - `page/`: Contains the main page components.
    - `Home.jsx`: Main page component that uses other components and hooks.
  - `utils/`: Contains utility functions and constants.
    - `constants.js`: Contains API key, icon URL, and a function to format date and time.
  - `App.jsx`: Main App component that renders the Home component.


## Submission
- Repository link: [kraftshala-weather-app](https://github.com/your-username/kraftshala-weather-app)
