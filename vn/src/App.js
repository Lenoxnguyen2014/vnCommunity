import React , {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { Burger, Menu, List, Groups, Events, Help} from './components';
import { theme } from './theme';
import { UseOnClickOutside } from './Hook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withAuthenticator, AmplifySignOut,  } from '@aws-amplify/ui-react';


function App() {
  const [open, setOpen] = useState(false);
  const node = useRef(); 
UseOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>

      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        <Router>
        <Switch>
        <Route path="/thelist">
            <List />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/groups">
            <Groups />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
      </Router>

</div>
    </>

    </ThemeProvider>

  );
}

export default withAuthenticator(App);
