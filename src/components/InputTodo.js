import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoProps } = this.props;
    const error = document.querySelector('.error');
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
      error.textContent = '';
    } else {
      error.textContent = 'Input field cannot be empty';
    }
  };

  render() {
    const { title } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            className="input-text"
            type="text"
            placeholder="Add Todo..."
            value={title}
            name="title"
            onChange={this.onChange}
          />
          <button className="input-submit" type="button">Submit</button>
        </form>
        <p className="error" />
      </>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
