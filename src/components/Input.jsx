import { useState } from 'react';

function Input({ addCity }) {
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddCity = async () => {
    if (!cityName.trim()) {
      alert('Please enter a city name');
      return;
    }
    setLoading(true); // Start loading
    await addCity(cityName); // Call addCity prop
    setLoading(false); // Stop loading after addCity completes
    setCityName(''); // Clear input field
  };

  return (
    <main className="bg-blue-300 h-[50%]">
      <div className="flex items-center justify-center bg-gray-700 p-4">
        <h1 className="text-3xl font-bold text-white">Weather Dashboard</h1>
      </div>
      <div className="flex flex-col w-[80%] md:w-[40%] lg:w-[30%] mt-4 p-4">
        <label htmlFor="city-input" className="m-2 text-xl">
          Enter your City Name:
        </label>
        <input
          id="city-input"
          placeholder="City Name"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="m-2 p-2 border rounded"
        />
        <button
          onClick={handleAddCity}
          className="flex justify-center bg-blue-800 m-2 p-2 rounded text-white w-[30%] 
          transition-all duration-300 ease-in-out 
          hover:bg-blue-600 
          hover:scale-105"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Add City'}
        </button>
      </div>
    </main>
  );
}

export default Input;
