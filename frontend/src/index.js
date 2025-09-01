import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Hello from React frontend!</h1>
      <p>Backend API is available at /api</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
