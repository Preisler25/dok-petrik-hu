import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';


import './App.css';
import MainPage from './elements/pages/mainPage';
import HibaPage from './elements/pages/hibaPage';
import DefPage from './elements/pages/templatePage';

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
        element: <div>Projects</div>,
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
