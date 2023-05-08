import logo from "./logo.svg";
import "./App.css";
import AppDescription from "./AppDescription";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-bold">so this is Tailwind huh</p>
        <AppDescription />
      </header>
    </div>
  );
}

export default App;
