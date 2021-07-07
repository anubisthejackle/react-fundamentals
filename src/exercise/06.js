// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState(null)
  const usernameRef = React.useRef(null);

  const handleChange = (event) => {
    setUsername(event.target.value.toLowerCase());
  }

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSubmitUsername(usernameRef.current.value);
      }}>
      <div>
        <label>Username:</label>
        <input ref={usernameRef} type="text" onChange={handleChange} value={username} />
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
