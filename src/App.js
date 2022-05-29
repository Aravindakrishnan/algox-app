import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CardContainer from './components/CardContainer/CardContainer';
import LinearSearch from './components/LinearSearch/LinearSearch';

function App() {
  return (
    <div className="App">
      {/* <LinearSearch array={[1,2,3,4,5,6,7,8,9,10,11,12,13]} searchItem={5} ></LinearSearch> */}
      <CardContainer></CardContainer>
    </div>
  );
}

export default App;
