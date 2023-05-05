import React from "react";
import './App.css'
import Scene from './components/scene/Scene'
import stories from "./data/storiesdata";

function App() {
  return (
    <div>
      {stories.map((story, index) => (
        <Scene key={index} text={story.text} />
      ))}
    </div>
  );
}


export default App
