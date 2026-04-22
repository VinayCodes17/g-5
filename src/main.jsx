import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WatchPage from './pages/WatchPage/WatchPage'
import CommunityPage from './pages/CommunityPage/CommunityPage'
import CommunityChat from './pages/CommunityChat/CommunityChat'
import Home from './pages/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/community/:domain' element={<CommunityChat />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)