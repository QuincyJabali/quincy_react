import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import StudentScore from './components/StudentScores';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
      <StudentScore/>
      </header>
      
    </div>
    
   
  );
}

export default App;
