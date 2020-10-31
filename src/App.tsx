import React from 'react';
import { Card } from './components/Card';
import { Button } from './components/Form';
import { Nav, NavLink } from './components/Menu';

function App() {
  return (
    <div>
      <Button>test</Button>

      <br />
      <br />

      <Card
        title="Shrimp and Chorizo Paella"
        intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
      />

      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </Nav>
    </div>
  );
}

export default App;
