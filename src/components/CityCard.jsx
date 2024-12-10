import weatherImg from './../assets/weather_img.jpg';

function CityCard() {
  return (
    <div className="grid grid-cols-3 gap-6 bg-gray-200 px-6">
      <div className="bg-blue-300 border-black border-2 rounded-md">
        <img src={weatherImg} alt="" className="w-full h-[30%]" />
        <h2>City name</h2>
        <h3>Current temperature</h3>
        <h3>Weather condition (e.g., sunny, rainy)</h3>
        <button className="bg-slate-600">Remove the city</button>
      </div>
      <div className="bg-blue-300 border-black border-2 rounded-md">
        <img src={weatherImg} alt="" className="w-full h-[30%]" />
        <h2>City name</h2>
        <h3>Current temperature</h3>
        <h3>Weather condition (e.g., sunny, rainy)</h3>
        <button className="bg-slate-600">Remove the city</button>
      </div>
      <div className="bg-blue-300 border-black border-2 rounded-md">
        <img src={weatherImg} alt="" className="w-full h-[30%]" />
        <h2>City name</h2>
        <h3>Current temperature</h3>
        <h3>Weather condition (e.g., sunny, rainy)</h3>
        <button className="bg-slate-600">Remove the city</button>
      </div>
    </div>
  );
}

export default CityCard;
