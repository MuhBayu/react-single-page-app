import React, { Component } from "react";
import {Row, Input, Button, Icon} from 'react-materialize';
class Contact extends Component {
   constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: {
         ip:null,
      },
    };
    this.klikButton = this.klikButton.bind(this);
  }
   klikButton() {
      fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
            console.log(this.state.items);
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
   }
   componentDidMount() {
    }
    render() {
      return (
        <div>
          <h4>GOT QUESTIONS?</h4><hr/>
          <Row>
              <Input placeholder="Placeholder" s={6} label="First Name" />
              <Input s={6} label="Last Name" value={this.state.items.ip} />
              <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
              <Input type="password" label="password" s={12} />
              <Input type="email" label="Email" s={12} />
              <Button waves='light' onClick={this.klikButton}>
                  Button
              <Icon left>cloud</Icon></Button>
          </Row>
        </div>
      );
    }
}

export default Contact;
