import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles/global.js';
import Navbar from './components/navbar/index.jsx';
import Footer from './components/Footer/index.jsx';

function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
