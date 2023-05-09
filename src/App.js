import logo from "./logo.svg";
import "./App.css";
import AppDescription from "./AppDescription";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppDescription />
        <h1 className="font-mono py-2 px-4 m-3 rounded bg-gray-950/25">User Auth0 Login</h1>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p className="font-mono">Loading...</p>}
        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogoutButton />
            <Profile />
          </>
        )}
        <p>this is the experiment-branch // 1st push didnt work. need to add push set upstream</p>
        <p>trying to push again // 2nd push "git push"</p>
      </header>
    </div>
  );
}

export default App;
