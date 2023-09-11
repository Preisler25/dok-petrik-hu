import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import navbar from './navBar.svg'
import './App.css';
import MainPage from './elements/pages/mainPage';
import HibaPage from './elements/pages/hibaPage';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div><img src={navbar}></img>404 Not found</div>,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "needHelp",
        element: <HibaPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
