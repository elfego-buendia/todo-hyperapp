import { h } from 'hyperapp';
/** @jsx h */

import Todo from '../Todo';

import './Todos.css';

const Todos = ({
  todos,
  add,
  clear,
  update,
  logState,
}) => (
  <div class="container columns">
    <div class="column is-half is-offset-one-third">
      <div class="todos card is-size-5">
        <header class="card-header">
          <p class="card-header-title">My ToDos</p>
        </header>
        <div class="card-content is-paddingless">
          <ul class="panel">
            {todos.map((todo, index) => (
              <li>
                <Todo
                  text={todo}
                  index={index}
                  update={update}
                />
              </li>
            ))}
          </ul>
        </div>
        <footer class="card-footer">
          <a onclick={add} class="card-footer-item">New</a>
          <a onclick={logState} class="card-footer-item">State</a>
          <a onclick={clear} class="card-footer-item">Clear All</a>
        </footer>
      </div>
    </div>
  </div>
);

export default Todos;
