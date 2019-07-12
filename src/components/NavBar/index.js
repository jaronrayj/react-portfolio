import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu
        fixed="top"
        borderless
        size="small"
      >
        <Menu.Item
          name='personal'
          active={activeItem === 'personal'}
          onClick={this.handleItemClick}
          href="/"
          style={{marginLeft: "150px"}}
        >
          <h3>Jaron Johnson</h3>
        </Menu.Item>

        <Menu.Item
          position="right"
          name='projects'
          active={activeItem === 'projects'}
          href="/projects"
          onClick={this.handleItemClick}>
          Projects
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          href="/about"
        >
          About
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          href="/contact"
          style={{marginRight: "150px"}}
        >
          Contact
        </Menu.Item>
      </Menu>
    )
  }
}





