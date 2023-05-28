import React from "react";

import "./Todoitem.css";

class Todoitem extends React.Component {
  state = {
    isEditing: false,
    inputValue: this.props.todo.content
  }

  handleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
    if (this.state.isEditing) {
      this.props.onEdit({...this.props.todo, content: this.state.inputValue});
    }
  };

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    const { todo, onDelete, onComplete, onEdit } = this.props;
    return (
      <li className="todoitem">
        {this.state.isEditing ? (
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        ) : (
          <span>{todo.content}</span>
        )}
        <button className="edit-btn" onClick={() => this.handleEdit()}>✏️</button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>🗑️</button>
        <button className="switch-btn" onClick={() => onComplete(todo)}>🔄</button>
      </li>
    );
  }
}

export default Todoitem;
