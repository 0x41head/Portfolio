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
    <Box content="Placeholder" inix={window.innerWidth-270} iniy={(window.innerHeight*0.9575)-235} width={260} height={225} 
      font= "PT Sans Narrow" fsize="18px"  ft="normal"/>
    <Dateandtime />
    <Navbar />
    </div>
    </>
  );
}

export default App;
