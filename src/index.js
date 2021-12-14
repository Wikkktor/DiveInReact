// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


// Create a react component
const Hello_world = () => {
    return (
        <div>
            <label class="label" for='name'>
                Enter name
            </label>
            <input id='name' type='text' />
            <button style={{ backgroundColor: "blue", color: "white"}}> Submit </button>
            <br></br>
            <h2>Hi There</h2>
        </div>
        
        
    )
};

const Comments = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" text="Wow" time="Yesterday"/>
            <CommentDetail author="Alex" text="Great one" time="Month ago" />
            <CommentDetail author="Albert" text="Nice" time="Today"/>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(<Hello_world />, document.querySelector('#root'));
ReactDOM.render(<Comments />, document.querySelector('#comments'));

