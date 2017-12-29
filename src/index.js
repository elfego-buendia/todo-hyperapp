import { h, app } from 'hyperapp';
import 'bulma/css/bulma.css';
/** @jsx h */

import './main.css';

import appActaions from './actions';

import Header from './Header';
import Todos from './Todos';

const appState = {
  todos: [],
};

const view = (state, actions) => (
  <div>
    <Header />
    <Todos
      todos={state.todos}
      add={actions.add}
      clear={actions.clear}
      update={actions.update}
      logState={actions.logState}
    />
  </div>
);

app(appState, appActaions, view, document.body);
