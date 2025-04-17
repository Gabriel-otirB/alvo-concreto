import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles/global.js';
import Navbar from './components/Layout/navbar/index.jsx';
import Footer from './components/Layout/Footer/index.jsx';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </>
  )
}

export default App
