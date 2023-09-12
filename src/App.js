import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';


import './App.css';
import DefPage from './elements/pages/templatePage';
import MainPage from './elements/pages/mainPage';
import HibaPage from './elements/pages/hibaPage';
import ProjectsPage from './elements/pages/projectsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefPage />,
    errorElement: <div>404 Not found</div>,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "needHelp",
        element: <HibaPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
