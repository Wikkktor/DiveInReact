// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import SeasonDisplay from './SeasonDisplay';


// Create a react component

class App extends React.Component {
    // The very first function that is called before everything else
    constructor(props) {
        // super cuz app extends React.Component so I have something and I am overriding that. I have to call it.
        super(props);
        
        // The only time I can direct assign value to state
        this.state = { lat: null, long: null };


        window.navigator.geolocation.getCurrentPosition(
            position => {

                // the only way to update a State !( setState )!
                this.setState({ lat: position.coords.latitude, long: position.coords.longitude })
            },
            err => console.log(err));
    }

    // I have to render something after class
    render() {
        
        return <div>Latitude: {this.state.lat} Longtitude: {this.state.long}</div>;
    }
}

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
            <SeasonDisplay/>
        </div>
    );
};


// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<Comments />, document.querySelector('#comments'));


