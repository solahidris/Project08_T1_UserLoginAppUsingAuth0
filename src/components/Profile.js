import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <article className="py-6 px-2 pb-20 font-mono text-xs center">
        {user?.picture && (
          <img
            className="mx-auto block"
            width="100"
            height="100"
            src={user.picture}
            alt={user?.name}
          />
        )}
        <h2 className="py-2 px-2 font-mono text-xl uppercase italic">
          {user?.name}
        </h2>
        <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul>
      </article>
    )
  );
};

export default Profile;
