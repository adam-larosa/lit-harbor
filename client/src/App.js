import './stylesheets/App.css';

function App() {
  const sendAGET = () => {
    fetch("/movies").then( r => r.json() ).then( console.log )
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>LIT HARBOR</h1>
       <button onClick={sendAGET}>X</button>
      </header>
    </div>
  );
}

export default App;
