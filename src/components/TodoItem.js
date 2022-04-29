import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.scss';

class TodoItem extends PureComponent {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li className={styles.item}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>
          Delete
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape(
    {
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    },
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
