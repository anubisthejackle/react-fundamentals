// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef(null);
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSubmitUsername(usernameRef.current.value);
        }}>
      <div>
        <label>Username:</label>
        <input ref={usernameRef} type="text" />
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
