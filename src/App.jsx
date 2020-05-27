import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

const ContactInfo = (props) => {
  return (
    <div className="box">
      <div className="mini-box">
        <img src={props.pictureUrl} alt="img" width="100px" />
      </div>
      <div className="mini-box">
        <p>{props.name}</p>
      </div>
      <div className="mini-box">
        <p>{props.popularity}</p>
      </div>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [...contacts],
    };
  }

  addRandom = () => {
    const contacts = [...this.state.contacts];
    contacts.push(ContactInfo);
    this.setState({
      contacts: contacts,
    });
  };

  render() {
    var size = 5;
    return (
      <div>
        {this.state.contacts.slice(0, size).map((contacts) => {
          return (
            <ContactInfo
              key={contacts.id}
              pictureUrl={contacts.pictureUrl}
              name={contacts.name}
              popularity={contacts.popularity}
            />
          );
        })}
        <button onClick={this.addRandom}>Add Random Contact</button>
        {/* <button onClick={this.removeLastStudent}>Remove last student</button> */}
      </div>
    );
  }
}

export default App;
