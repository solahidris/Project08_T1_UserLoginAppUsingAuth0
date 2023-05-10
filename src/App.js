import logo from "./logo.svg";
import "./App.css";
import AppDescription from "./AppDescription";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
// import { useAuth0 } from "@auth0/auth0-react";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppDescription />
        <p>lets start again</p>
        <LoginButton />
        <LogoutButton />
        <Profile />
      </header>
    </div>
  );
}

export default App;
