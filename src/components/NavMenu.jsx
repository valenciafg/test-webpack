import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavMenu = () => (
  <Menu color="teal" fixed="top" stackable>
    <Menu.Item header>Víctor Valencia</Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item
        name="about"
        content="About Me"
      />
      <Menu.Item
        name="knowledge"
        content="Knowledge"
      />
      <Menu.Item
        name="portafolio"
        content="Portafolio"
      />
      <Menu.Item
        name="experience"
        content="Experience"
      />
      <Menu.Item
        name="contact"
        content="Contact"
      />
    </Menu.Menu>
  </Menu>
);

export default NavMenu;
