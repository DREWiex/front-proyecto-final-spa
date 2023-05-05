import { AppRouter } from "./routers/AppRouter";
import { useLocation } from 'react-router-dom';
import { Footer, NavBar } from './ui';

function App() {

  const { pathname } = useLocation();


  return (
    <>

      {
        pathname !== '/login' && pathname !== '/register' && (<NavBar />)
      }

        <main className="flex-column">

          <AppRouter />

        </main>

      {/* {
        pathname !== '/login' && pathname !== '/register' && (<Footer />)
      } */}

    </>

  );

};

export default App