import React from 'react';
import './App.css';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

class RosterModal extends React.Component {


  render(){
    //  if (this.props.rosterArray.length > 0) {
    //    console.log(this.props.rosterArray.queryResults)
    // } 
    return (
      <div className="RosterModal">
            <Modal.Header>Team Name Here</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
            <Modal.Description>
                <Header>Modal Header</Header>
                <p>
                This is an example of expanded content that will cause the modal's
                dimmer to scroll
                </p>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            <Button primary>
                Proceed <Icon name='right chevron' />
            </Button>
            </Modal.Actions>
      </div>
    );
  }
}

export default RosterModal;