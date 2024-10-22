import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './Navbar';
import BackToTopButton from './BackToTopButton.jsx';
import { BrowserRouter } from 'react-router-dom';
import PullToRefresh from './PullToRefresh.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
