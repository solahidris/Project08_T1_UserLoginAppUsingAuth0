import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
        className="font-mono font-bold text-xs bg-green-400 hover:bg-green-600 px-4 py-3 rounded-md"
      >
        Login
      </button>
    )
  );
};

export default LoginButton;
