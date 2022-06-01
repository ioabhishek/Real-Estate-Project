import './App.css';
import HomePage from './Components/property-listing/HomePage';
import SignIn from './Components/Authentication/SignIn';
function App() {
  return (
    <div className="App">
      <HomePage/>
      <SignIn/>
    </div>
  );
}

export default App;