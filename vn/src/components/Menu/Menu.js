import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AmplifySignOut} from '@aws-amplify/ui-react';


const Menu = ({ open }) => {
  return (
      <>
    <StyledMenu open={open}>
      <Nav.Link href="post">Create a post</Nav.Link>
      <Nav.Link href="thelist">The list</Nav.Link>
      <Nav.Link href="events">Events</Nav.Link>
      <Nav.Link href="groups">Groups</Nav.Link>
      <Nav.Link href="Help">Help</Nav.Link>
      <Nav.Link href="logout"><AmplifySignOut /></Nav.Link>
    </StyledMenu>
    </>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;