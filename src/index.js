// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


// Create a react component
const Hello_world = () => {
    return (
        <div>
            <label className="label" htmlFor='name'>
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
            <ApprovalCard>
                <h2>Warning</h2>
                Are you sure you want to do this?
            </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Sam"
                text="Wow" 
                time="Yesterday" 
                avatar={faker.image.avatar()}
                />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                text="Great one" 
                time="Month ago" 
                avatar={faker.image.avatar()}
                />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Albert" 
                text="Nice" 
                time="Today"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(<Hello_world />, document.querySelector('#root'));
ReactDOM.render(<Comments />, document.querySelector('#comments'));

