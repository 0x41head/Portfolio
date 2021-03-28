import './App.css';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import Box from './Components/Box';
import Dateandtime from './Components/Dateandtime';

function App() {
  return (
    <>
    <div className="entire">
    <Background />
    <Box content="Placeholder" inix={window.innerWidth-370} iniy={(window.innerHeight*0.9575)-235}/>
    <Dateandtime />
    <Navbar />
    
    </div>
    </>
  );
}

export default App;
