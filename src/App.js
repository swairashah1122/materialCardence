import './App.css';
import Calculater from './components/Calculater';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import Stackrecords from './components/Stackrecords';
import Bottom from './components/Bottom';

function App() {
  return (
    <div >    
      <Navbar></Navbar>    
    <Home></Home>    
      <Calculater></Calculater>
      <Statistics></Statistics>
      <Stackrecords></Stackrecords>
        <Bottom></Bottom>

        
      </div>
  );
}

export default App;


