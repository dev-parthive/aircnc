import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';

function App() {
  return (<RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
