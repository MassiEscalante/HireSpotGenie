import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';  // Import the Nav component

function App() {
  return (
    <div>
      <Nav />  {/* Sidebar Nav component */}
      <div style={{ marginLeft: '220px', padding: '20px' }}>  {/* Add margin to push content aside */}
        <header>
         
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
