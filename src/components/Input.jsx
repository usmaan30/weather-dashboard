function Input() {
  return (
    <main className="bg-gray-200 h-[50%]">
      <div className="flex items-center justify-center bg-blue-300 p-4">
        <h1 className="text-3xl font-bold">Weather Dashboard</h1>
      </div>
      <div className="flex flex-col w-[30%] mt-4 p-4">
        <label htmlFor="" className="m-2">
          Enter your City Name:
        </label>
        <input placeholder="City Name" type="text" className="m-2 p-2" />
        <button className="flex justify-center bg-blue-500 m-2 p-2 rounded text-white w-[30%]">
          Add City
        </button>
      </div>
    </main>
  );
}

export default Input;
