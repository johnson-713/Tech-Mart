import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { RegisterLoginForm } from './components/RegisterLoginForm'

function App() {
  

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/register' element={<RegisterLoginForm />} />
          <Route path='/login' element={<RegisterLoginForm isLogin />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
