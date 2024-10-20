import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // Renders the App component, which includes Nav
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,  // CandidateSearch should load by default at root (/)
        element: <CandidateSearch />,
      },
      {
        path: '/savedcandidates',  // Saved Candidates route
        element: <SavedCandidates />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}