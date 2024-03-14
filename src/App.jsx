import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { reloginAccount } from "./api/fetchApi";
import { Outlet } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const reLogin = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const result = await reloginAccount(token);
          setUser(result);
        } catch (error) {
          console.error("fetch failed", error);
        }
      }
    };
    reLogin();
  }, []);

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Outlet context={{ user, setUser }} />
    </>
  );
}

export default App;
