import './App.css';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';

function App() {
  return (
    <div className="App">
      <div className='Bg'></div>
      <Banner/>
      <div className='MainBody'> 
        <Exhibit/>
      </div>
    </div>
  );
}

export default App;
