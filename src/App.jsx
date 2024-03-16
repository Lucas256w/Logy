import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { reloginAccountAPI } from "./api/fetchApi";
import { Outlet } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  console.log(import.meta.env.VITE_MODE);
  console.log(import.meta.env.VITE_PROD_API);

  useEffect(() => {
    const reloginAccount = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const result = await reloginAccountAPI(token);
          setUser(result);
        } catch (error) {
          console.error("fetch failed", error);
          localStorage.removeItem("token");
        }
      }
    };
    reloginAccount();
  }, []);

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Outlet context={{ user, setUser }} />
    </>
  );
}

export default App;
