import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';
import "react-datepicker/dist/react-datepicker.css";
function App() {
  return (<RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
