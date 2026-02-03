import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App'
import Header from './components/Header'
import SideBar from './components/SideBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="main">
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
        <div className="content-area">
          <Header />
          <div className="content">
            <App />
          </div>
        </div>
    </div>
  </StrictMode>
)
