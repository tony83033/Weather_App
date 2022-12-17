import logo from './logo.svg';
import './App.css';
import './component/Navbar'
import Navbar from './component/Navbar';
import Body from './component/Body';
import WeatherState from './context/WeatherState';
function App() {
  return (
    <>
    <WeatherState>
    <Navbar></Navbar>
    <Body></Body>
    </WeatherState>
    </>
  );
}

export default App;
