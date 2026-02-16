import { useState, useEffect } from 'react'
import StudentComponent from '../components/StudentComponent'
import './Students.css'

function Students() {
  const [apiData, setApiData] = useState([])
  const [localStudents, setLocalStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Function to load local students from localStorage
  const loadLocalStudents = () => {
    const savedStudents = localStorage.getItem('students')
    if (savedStudents) {
      try {
        const parsed = JSON.parse(savedStudents)
        setLocalStudents(parsed)
      } catch (error) {
        console.error('Error parsing local students:', error)
      }
    }
  }

  // Load local students from localStorage on mount
  useEffect(() => {
    loadLocalStudents()
  }, [])

  // Listen for storage changes (when students are added on Home page)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'students') {
        loadLocalStudents()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Also listen for custom event (for same-tab updates)
    const handleCustomStorage = () => {
      loadLocalStudents()
    }
    window.addEventListener('localStorageUpdated', handleCustomStorage)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('localStorageUpdated', handleCustomStorage)
    }
  }, [])

  // Fetch API data
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        if (!response.ok) {
          throw new Error('Failed to fetch data from API')
        }
        
        const data = await response.json()
        // Transform API data to match our StudentComponent props
        const transformedData = data.map((user, index) => ({
          id: user.id,
          name: user.name,
          course: ['Computer Science', 'Information Technology', 'Software Engineering', 'Data Science', 'Cybersecurity'][index % 5],
          year: (index % 4) + 1,
        }))
        setApiData(transformedData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [])

  const handleRefresh = () => {
    window.location.reload()
  }

  // Combine API data and local students
  const allStudents = [...apiData, ...localStudents]

  return (
    <div className="students-page">
      <div className="page-header">
        <h2 className="page-title">All Students</h2>
        <button className="refresh-button" onClick={handleRefresh}>
          Refresh Data
        </button>
      </div>
      
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading student data...</p>
        </div>
      )}

      {error && (
        <div className="error-container">
          <div className="error-message">
            <h3>Error Loading Data</h3>
            <p>{error}</p>
            <button className="retry-button" onClick={() => window.location.reload()}>
              Retry
            </button>
          </div>
        </div>
      )}

      {!loading && !error && (
        <>
          {localStudents.length > 0 && (
            <div className="students-section">
              <h3 className="section-title">Your Added Students ({localStudents.length})</h3>
              <div className="students-list">
                {localStudents.map((student) => (
                  <StudentComponent
                    key={`local-${student.id}`}
                    name={student.name}
                    course={student.course}
                    year={student.year}
                    id={student.id}
                  />
                ))}
              </div>
            </div>
          )}

          {apiData.length > 0 && (
            <div className="students-section">
              <h3 className="section-title">Students from API ({apiData.length})</h3>
              <div className="students-list">
                {apiData.map((student) => (
                  <StudentComponent
                    key={`api-${student.id}`}
                    name={student.name}
                    course={student.course}
                    year={student.year}
                    id={student.id}
                  />
                ))}
              </div>
            </div>
          )}

          {allStudents.length === 0 && (
            <p>No students found.</p>
          )}
        </>
      )}
    </div>
  )
}

export default Students

