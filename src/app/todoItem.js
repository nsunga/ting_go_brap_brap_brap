import React from 'react';
import './css/todoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  }

  handleDelete() {
    console.log('in handle delete');
    this.props.onDelete(this.props.item);
  }
}

module.exports = TodoItem;
