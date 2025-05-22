import './App.css'
import { Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import AquariumOverview from './components/AquariumOverview';

function App() {

  return (
    <>
      <Navbar />
      <AquariumOverview />
    </>
  )
}

export default App
