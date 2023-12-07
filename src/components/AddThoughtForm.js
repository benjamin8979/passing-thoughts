import React, {useState} from 'react';
import { getNewExpirationTime, generateID, generateColor} from './utilities';

// Add a new thought in a form and submit
function AddThoughtForm(props) {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const thought = {
            id: generateID(),
            text: text,
            expires: getNewExpirationTime(),
            color: generateColor()
        }
        if (text) {
            props.addThought(thought);
        }
        setText("");
    }

    return (
        <form className="AddThoughtForm" onSubmit={handleSubmit}>
            <input 
              type="text"
              aria-label="What's on your mind?"
              placeholder="What's on your mind?"
              value={text}
              onChange={handleChange}
            />
            <input 
              type="submit"
              value="Add"
            />
        </form>
    );
}

export default AddThoughtForm;
