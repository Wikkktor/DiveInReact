// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import SeasonDisplay from './SeasonDisplay';


// Create a react component

class App extends React.Component {
    state = { lat: null, long: null, errorMessage: ''};


    componentDidMount() {
        
    }

    componentDidUpdate() {
        
    }


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
            err => this.setState({ errorMessage: err.message})
        );
    }


    // I have to render something after class
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div>Loading!</div>
    };
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
        </div>
    );
};


// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<Comments />, document.querySelector('#comments'));


