# 🌤 Vue 3 Weather Widget

**A lightweight and responsive weather** widget that fetches real-time weather data and displays it with a dynamic background. Built with Vue 3, TypeScript, and TailwindCSS, this project ensures a seamless and visually appealing user experience.

---

## 🚀 Technologies Used

- **Vue 3**: JavaScript framework for building the user interface.
- **Vite**: Lightning-fast build tool for modern web projects.
- **TypeScript**: Static typing for JavaScript to improve code quality.
- **TailwindCSS**: Utility-first CSS framework for flexible styling.
- **Axios** – Fetching weather and background image data.
- **Weather API** – Retrieves live weather data. [API](https://www.weatherapi.com/)
- **Unsplash API** – Fetches background images based on location. [API](https://unsplash.com/developers)
- **ESLint + Prettier**: Linting and code formatting.

---

## 🛠️ Features

- **Real-time Weather Data** – Displays temperature, min/max temperatures, weather description, and an icon.
- **Geolocation Support** – Automatically fetches weather based on the user's location.
- **Dynamic Backgrounds** – Changes based on the weather conditions using Unsplash API.
- **Temperature-based Gradients** – Background gradient adapts to the temperature range.
- **Error Handling** – Gracefully handles API errors and displays user-friendly messages.
- **Optimized Performance** – Built with Vite for fast development and production builds.
- **Mobile Responsive** – Designed to work across all screen sizes.

---

## 🔧 Project Setup

Follow these steps to set up and run the project locally:

### 1. Clone the repository:

```bash
git clone git@github.com:NatashaSolntseva/vue_3_weather_app.git
cd vue_3_weather_app
```

### 2. Install dependencies:

```bash

npm install

```

### 3. Add API Keys:

Create a .env file in the root directory and add your API keys:

```bash
VITE_WEATHER_API_KEY=your_openweather_api_key
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_api_key
```

### 4. Run the development server:

```bash
npm run dev

```

### 5. Build for production:

```bash
npm run build
```

### 6. Preview the production build:

```bash
npm run preview
```

## 🌐 Live Demo

Visit the live version of this form: [Portfolio Website](https://weather-app-3-vue.netlify.app/)

---

## 👩‍💻 Author

Natasha Solntseva

[LinkedIn](https://www.linkedin.com/in/natalia-shmatenko-2766b830)

---

## 📜 License

This project is licensed under the MIT License.
