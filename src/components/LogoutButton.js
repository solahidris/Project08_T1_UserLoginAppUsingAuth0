import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <button
        onClick={() => logout()}
        className="font-mono font-bold text-xs bg-red-400 hover:bg-red-600 px-4 py-3 rounded-md"
      >
        Logout
      </button>
    )
  );
};

export default LogoutButton;
