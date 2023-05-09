import React from "react";

const AppDescription = () => {
  return (
    <div>
      <p className="text-xs px-32 py-3 font-mono">
        Create a simple authentication app where users can log in using Auth0
        and view the user data with an option to log out
      </p>
      <p> ---------------------------------- </p>
      <p className="uppercase underline text-xs px-8 py-1 font-mono font-bold">
        steps breakdown
      </p>
      <p className="text-xs text-left px-32 py-0 font-mono">
        0- check what is auth0
      </p>
      <p className="text-xs text-left px-32 py-0 font-mono">
        1- install auth0 dependencies, url, index.js
      </p>
      <p className="text-xs text-left px-32 py-0 font-mono">
        2- create components (login,logout,profile)
      </p>
      <p className="text-xs text-left px-32 py-0 font-mono">
        3- import auth0 on all components
      </p>
      <p className="text-xs text-left px-32 py-0 font-mono">
        4- add all to app.js
      </p>
      <p className="text-xs text-left px-32 py-0 font-mono">
        5- add if error,isLoading,Finish Loading
      </p>
      <p className="text-xs text-left px-32 py-0 font-mono">
        6- all done
      </p>
      <p> ---------------------------------- </p>
    </div>
  );
};

export default AppDescription;
