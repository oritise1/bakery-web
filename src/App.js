
import './App.css';
import NavBar from './components/navBar/NavBar';
import { ReactComponent as Background } from './images/Background.svg'

function App() {
  return (
    <div className="App">
       <NavBar />
      <Background className='backgd' />
    </div>
  );
}

export default App;
