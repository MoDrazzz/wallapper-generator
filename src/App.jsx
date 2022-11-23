import './App.css'

const App = () => {
  const getDaysInMonth = (year, monthIndex) => Array.from(
    // Create an array based on array-like object (having length property of last day of provided month).
    { length: new Date(year, monthIndex + 1, 0).getDate() },
    // Each element of created array is Date object of next day in the month.
    (_, arrIndex) => new Date(year, monthIndex, arrIndex + 1)
  );

  console.log(getDaysInMonth(2023, 4));

  return (
    <div className="App">
      <h1>Test!</h1> 
    </div>
  )
}

export default App
