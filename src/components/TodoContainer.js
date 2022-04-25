/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/no-unused-state */

import React, { PureComponent } from 'react';
import TodoList from './TodosList';
import Header from './Header';

class TodoContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default TodoContainer;
