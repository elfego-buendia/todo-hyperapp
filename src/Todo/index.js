/* eslint jsx-a11y/label-has-for: 0 */
import { h } from 'hyperapp';
/** @jsx h */

import './Todo.css';

const Todo = ({ text, index, update }) => (
  <label class="todo panel-block">
    <input type="checkbox" />
    <input
      type="text"
      class="is-size-5"
      rows="1"
      data-index={index}
      value={text}
      placeholder="Click to add text"
      onchange={update}
    />
  </label>
);

export default Todo;
