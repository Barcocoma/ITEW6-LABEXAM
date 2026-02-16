import { useState, useEffect } from 'react'
import StudentComponent from '../components/StudentComponent'
import './Home.css'

// Default students data
const defaultStudents = [
  { id: 1, name: 'John Doe', course: 'Computer Science', year: 3 },
  { id: 2, name: 'Jane Smith', course: 'Information Technology', year: 2 },
  { id: 3, name: 'Bob Johnson', course: 'Software Engineering', year: 4 },
]

function Home() {
  // Load students from localStorage on initial render, or use default
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students')
    if (savedStudents) {
      try {
        return JSON.parse(savedStudents)
      } catch (error) {
        console.error('Error parsing saved students:', error)
        return defaultStudents
      }
    }
    return defaultStudents
  })

  // Save students to localStorage whenever students state changes
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('localStorageUpdated'))
  }, [students])

  const handleAddStudent = () => {
    // Get the maximum ID from existing students to avoid conflicts
    const maxId = students.length > 0 ? Math.max(...students.map(s => s.id)) : 0
    const newId = maxId + 1
    
    const newStudent = {
      id: newId,
      name: `Student ${newId}`,
      course: 'Computer Science',
      year: 1,
    }
    
    // Update state with new student using functional update
    setStudents(prevStudents => {
      return [...prevStudents, newStudent]
    })
  }

  return (
    <div className="home-page">
      <h2 className="page-title">Home - Student Information</h2>
      <p className="page-description">
        Welcome to the Student Info App! View and manage student information.
      </p>
      
      <div className="students-section">
        <div className="section-header">
          <h3>Local Students</h3>
          <button 
            type="button"
            className="add-button" 
            onClick={handleAddStudent}
          >
            Add Student
          </button>
        </div>
        
        <div className="students-list">
          {students.map((student) => (
            <StudentComponent
              key={student.id}
              name={student.name}
              course={student.course}
              year={student.year}
              id={student.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

