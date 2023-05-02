import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./routers/AppRouter";

function App() {

  return (

    <UserProvider>

      <main className="flex-column">

        <AppRouter />

      </main>

    </UserProvider>

  );

};

export default App