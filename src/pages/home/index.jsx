import React from "react";
import { useAuth } from "../../Authentications";
import { Link } from "react-router-dom";
const Home = () => {
  const { user, logout,loadingLoagout } = useAuth();

  return (
    <div className="w-full h-screen bg-gray-400 flex justify-center  items-center">
      <div className="p-10 md:rounded-md flex flex-col bg-white items-center justify-center">
        <div className="text-md text-center">
          Bonjour <b>{user?.username}</b> votre email est <b>{user?.email} </b>
          ceci est un compte un <b>{user?.role}</b>
        </div>
        {user?.role === "admin" && (
          <div className="my-4">
            <Link to={"/admin"}>Aller au dashboard admin</Link>
          </div>
        )}
        {user?.role === "chercheur" && (
          <div className="my-4">
            <Link to={"/conversations"}>Discuter un bot</Link>
          </div>
        )}
        {!loadingLoagout ? (
          <button
            className="bg-red-500 p-2 text-white my-2"
            onClick={logout}
            type="button"
          >
            Logout
          </button>
        ) : (
          <div
            className="inline-block h-4 w-4 animate-spin rounded-full 
                    border-2 border-solid border-current border-e-transparent align-[-0.125em]
                     motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        )}

        <div className="my-4">
          <Link to={"/introduction"}>Decouvrer qui nous some</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
