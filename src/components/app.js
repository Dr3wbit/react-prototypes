import React, { Component } from 'react';
import Contactlist from './contact_list'
import ContactForm from './contact_form'
import contactData from '../data/contact'

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                        <ContactForm add={this.addContact}/>
                    </div>
                    <Contactlist contacts={this.state.contacts}/>
                </div>
            </div>
        );
    }
    constructor (props){
        super(props);
        this.addContact = this.addContact.bind(this);
        this.state = {
            contacts: contactData,
        }
    }
    addContact(contact){
        this.setState({
            contacts: [contact,...this.state.contacts]
        });
        console.log('App: addComponent:', contact );
    }
}

export default App;

