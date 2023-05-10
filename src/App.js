import logo from "./logo.svg";
import "./App.css";
import AppDescription from "./AppDescription";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppDescription />
        <p>lets start again</p>
      </header>
    </div>
  );
}

export default App;
