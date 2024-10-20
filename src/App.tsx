import { Outlet, Link } from 'react-router-dom';  // Keep the Link import for future use
import Nav from './components/Nav';  // Import your custom Nav component

function App() {
  return (
    <>
      {/* Use the Nav component here */}
      <Nav /> 
      
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
