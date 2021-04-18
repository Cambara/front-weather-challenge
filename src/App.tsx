import React from 'react';
import Header from './Components/Header';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const App:React.FC = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <GlobalStyles/>
    </div>
  );
}

export default App;
