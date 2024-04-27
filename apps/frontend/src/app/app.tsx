import { RouterProvider } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import NxWelcome from './nx-welcome';
import router from '../router';

export function App() {
  return (
    <RouterProvider router={router} />
    // <div>
    //   <NxWelcome title="frontend" />
    // </div>
  );
}

export default App;
