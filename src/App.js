import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';


import './App.css';
import DefPage from './elements/pages/templatePage';
import MainPage from './elements/pages/mainPage';
import HibaPage from './elements/pages/hibaPage';
import ProjectPage from './elements/pages/projectPage';

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
        element: <ProjectPage />,
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
