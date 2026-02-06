import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState("");

  const checkFlag = async () => {
    const response = await fetch('http://localhost:5000/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: "1", submission: input })
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', height: '100vh', padding: '40px' }}>
      <h1>CTF Challenge #1: Hidden in Plain Sight</h1> {/* [cite: 6] */}
      <p>Category: OSINT / Steganography</p> {/* [cite: 7] */}
      <p>Description: Find the hidden text in the metadata of the image.</p> {/* [cite: 7] */}
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="FLAG{...}" 
      />
      <button onClick={checkFlag}>Submit Flag</button>
    </div>
  );
}
export default App;