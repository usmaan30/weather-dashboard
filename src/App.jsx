import Input from './components/Input';
import CityCard from './components/CityCard';
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY; // Replace with your OpenWeather API key

function App() {
  const [cities, setCities] = useState([]);

  // Function to fetch weather data and add a city
  const addCity = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`,
      );

      if (response.status === 404) {
        throw new Error('City not found');
      }

      if (!response.ok) {
        throw new Error('Failed to fetch weather data. Please try again.');
      }

      const data = await response.json();

      // Extract required data
      const cityData = {
        name: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].description,
      };

      // Check if the city is already added
      if (cities.some((city) => city.name === cityData.name)) {
        alert(`${cityData.name} is already in the dashboard.`);
        return;
      }

      // Add city data to the cities array
      setCities([...cities, cityData]);
    } catch (error) {
      alert(error.message);
    }
  };

  // Function to remove a city
  const removeCity = (cityName) => {
    setCities(cities.filter((city) => city.name !== cityName));
  };

  return (
    <div>
      <Input addCity={addCity} />
      <CityCard cities={cities} removeCity={removeCity} />
    </div>
  );
}

export default App;
