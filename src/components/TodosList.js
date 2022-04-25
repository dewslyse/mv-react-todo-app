/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/no-unused-state */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
};

export default TodoList;
