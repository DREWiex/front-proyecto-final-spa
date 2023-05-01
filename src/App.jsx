import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./routers/AppRouter";

function App() {

  return (

    <>

      <header>
        Header
      </header>

      <UserProvider>

        <AppRouter />

      </UserProvider>

      <footer>
        Footer
      </footer>

    </>

  );

};

export default App