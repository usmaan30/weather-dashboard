import weatherImg from './../assets/weather_img.jpg';

function CityCard({ cities, removeCity }) {
  return (
    <div className="bg-blue-300 min-h-screen pb-2">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-blue-300 px-6 pb-2 h-full">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-gray-100 border-black border-2 rounded-md p-4 h-fit"
          >
            <img src={weatherImg} alt="" className="w-full h-28" />
            <h2 className="text-xl font-bold py-2">{city.name}</h2>
            <h3>
              <span className="text-lg font-bold">Temperature:</span>{' '}
              {city.temperature}
              °C
            </h3>
            <h3>
              <span className="text-lg font-bold">Condition:</span>{' '}
              {city.condition}
            </h3>
            <button
              onClick={() => removeCity(city.name)}
              className="bg-slate-600 text-white p-2 rounded mt-2"
            >
              Remove City
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityCard;
