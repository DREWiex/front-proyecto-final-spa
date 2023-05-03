import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./routers/AppRouter";
import { useLocation } from 'react-router-dom';
import { NavBar } from "./ui/NavBar";

function App() {

  const { pathname } = useLocation();


  return (
    <>

    {
      pathname === '/' && <NavBar />
    }

      <UserProvider>

        <main className="flex-column">

          <AppRouter />

        </main>

      </UserProvider>

    </>

  );

};

export default App