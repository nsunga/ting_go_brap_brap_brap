import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoItem.js';
import AddItem from './addItem.js';
import Ting from './ting.js';
import {Router, Route, browserHistory, Link} from 'react-router';
import './css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/ting'} component={Ting}></Route>
      </Router>
    );
  }
}

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['get ting', 'strap ting', 'wine and dine a ting']
    }
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  render() {
    let todos = this.state.todos;
    todos = todos.map((item, index) => {
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    });
    return (
      <div id="todo-list">
        <Link to={'/ting'}>DA TING</Link>
        <p>ting go grah, BRAP BRAP BRAP BRRRRRRRAAP</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  }

  onDelete(item) {
    let updatedTodos = this.state.todos.filter((val, index) => {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  onAdd(item) {
    let updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    // any grabbing of external data
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
}

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
