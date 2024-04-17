import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // fetch('https://dummy.restapiexample.com/api/v1/employees')
    //fetch('http://localhost:8080')
    fetch('/api')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  )
}

export default App
