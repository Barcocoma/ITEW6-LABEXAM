import { Link } from 'react-router-dom'
import './HeaderComponent.css'

function HeaderComponent() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Student Info App</h1>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/students" className="nav-link">Students</Link>
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent

