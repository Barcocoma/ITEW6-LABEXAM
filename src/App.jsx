import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import Home from './pages/Home'
import Students from './pages/Students'
import './App.css'

function App() {
  // Use basename only in production (GitHub Pages)
  const basename = import.meta.env.PROD ? '/ITEW6-LABEXAM' : '/'
  
  return (
    <Router basename={basename}>
      <div className="App">
        <HeaderComponent />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

