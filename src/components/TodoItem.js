import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends PureComponent {
  render() {
    const { todo } = this.props;

    return (
      <li>{todo.title}</li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
};

export default TodoItem;
