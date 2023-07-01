import './App.css';

function message(){
  console.log("Button clicked")
}

function App() {  
  return (    
    <div className="App">
      <header className="App-header">
        <h1>Button event example</h1>
        <button onClick={() => message()}>Click Me</button>
      </header>
    </div>
  );
}

export default App;

