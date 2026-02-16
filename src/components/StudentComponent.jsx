import { useState } from 'react'
import './StudentComponent.css'

function StudentComponent({ name, course, year, id }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleDetails = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="student-card">
      <div className="student-info">
        <h3 className="student-name">{name}</h3>
        <p className="student-detail"><strong>Course:</strong> {course}</p>
        <p className="student-detail"><strong>Year:</strong> {year}</p>
        <p className="student-detail"><strong>ID:</strong> {id}</p>
      </div>
      <button 
        className="toggle-button"
        onClick={handleToggleDetails}
      >
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      {isExpanded && (
        <div className="student-details">
          <p>This is additional information about {name}.</p>
          <p>Student is currently enrolled in {course} program, year {year}.</p>
        </div>
      )}
    </div>
  )
}

export default StudentComponent

