// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'; 
import { ReactDOM } from 'react-dom';
import AddThoughtForm from './components/AddThoughtForm';
import Thought from './components/Thoughts';
import { generateID, getNewExpirationTime } from './components/utilities';


// App holds thought objects which can be added, deleted, or disappear
function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateID(),
      text: "This is a place for your passing thoughts.",
      expires: getNewExpirationTime(),
      color: "#eee"
    },
    {
      id: generateID(),
      text: "They'll expire after 30 seconds.",
      expires: getNewExpirationTime(),
      color: "#eee"
    }
  ]);

  const addThought = (newThought) => {
    setThoughts((prevThoughts) => [...prevThoughts, newThought])
  }

  const removeThought = (thoughtID) => {
    setThoughts((prevThoughts) => 
    prevThoughts.filter((thought) => thought.id !== thoughtID))
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {
            thoughts.map((thought) => 
            <Thought 
              key={thought.id} 
              thought={thought} 
              removeThought={removeThought}
            />
            )
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
