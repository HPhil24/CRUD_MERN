import React from "react";
import { Route, Switch, Link } from 'react-router-dom'
import { TodoList } from './TodoList';
import { CreateTodo } from './CreateTodo';
import { EditTodo } from './EditTodo';

function App() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/create" component={CreateTodo}/>
      </Switch>
    </div>
  );
}

export default App;
