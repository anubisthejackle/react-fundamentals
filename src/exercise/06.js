// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const usernameRef = React.useRef(null);

  const handleChange = (event) => {
      const value = event.target.value;
      const isValid = value === value.toLowerCase();
      setError( isValid || "Username must be lower case" );
  }

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSubmitUsername(usernameRef.current.value);
      }}>
      <div>
        <label>Username:</label>
        <input ref={usernameRef} type="text" onChange={handleChange} />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
