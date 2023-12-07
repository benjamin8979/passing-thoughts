import React, {useEffect} from 'react';

// Thought can be deleted manually or disappear automatically after 30 seconds
function Thought(props) {
    const {thought, removeThought} = props;

    const handleClick = () => {
        removeThought(thought.id);
    }

    useEffect(() => {
        const timeLeft = thought.expires - Date.now();
        const timeout = setTimeout(() => removeThought(thought.id), timeLeft);
        return(() => clearTimeout(timeout));
    },[thought, removeThought])

    return(
        <li className="Thought" style={{backgroundColor: thought.color}}>
            <button 
              aria-label="Remove thought" 
              className="remove-button" 
              onClick={handleClick}>
            &times;</button>
            <div className="text">{thought.text}</div>
        </li>
    );
}

export default Thought;