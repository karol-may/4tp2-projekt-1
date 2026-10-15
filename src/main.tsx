import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Users } from './users/Users.tsx'
import { User } from './users/User.tsx'
import './App.css'
import { Navbar } from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className='container-fluid'>
        <Navbar/>
        <main>
            <Routes>        
              <Route path="/" element={<App/>} />
              <Route path="users" element={<Users/>} />
              <Route path="user/:id" element={<User/>} />
            </Routes>
        </main>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
