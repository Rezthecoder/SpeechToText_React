import './App.css'
import React from 'react'


function  App() {
  return (
    <>
      <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>A React hook that converts speech from the microphone to text and makes it available to your React
                    components.</p>

                <div className="main-content"></div>

                <div className="btn-style">
                    <button>Copy to ClipBoard</button>
                    <button >Start Listening</button>
                    <button >Stop Listening</button>
                </div>
        
</div>
    </>
    
  )
}

export default App;
