import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
            </div>
        );
    }
}

function Hello2() {
    return (
        <div>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
        </div>
    );
}


ReactDOM.render(<Hello2 />, document.getElementById('root'));

//ReactDOM.render(<Hello />, document.getElementById('root'));