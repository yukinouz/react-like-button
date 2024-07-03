import React, { useState } from "react";
import "./App.css";
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}
 
function LikeButton() {
  const [count, setCount] = useState(999);
  const hundleClick = () => {
    setCount(count + 1);
  }
  return <span className="likeButton" onClick={hundleClick}>♥ {count}</span>;
}
 
export default App;
