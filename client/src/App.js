import './stylesheets/App.css';
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'

function Main() {
  const sendAGET = () => {
    fetch("/movies").then( r => r.json() ).then( console.log )
  }
  return (
    <div className="App">
      <header className="cool">
        <h1>LIT HARBOR</h1>
        <button onClick={sendAGET}>X</button>
      </header>
    </div>
  )
}

function NotHarbor() {
  return (
    <div className="cool">
      <h1>not harbor</h1>
    </div>
  ) 
}


function App() {
  return (
    <Routes>
      <Route path="*" element={<Main />} />
      <Route path="/not" element={<NotHarbor />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
