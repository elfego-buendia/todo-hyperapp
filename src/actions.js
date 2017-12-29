const add = () => state => (
  {
    ...state,
    todos: [...state.todos, ''],
  }
);

const clear = () => () => (
  {
    todos: [],
  }
);

const update = e => (state) => {
  if (e.type === 'change') {
    const mutatedTodos = [...state.todos];
    mutatedTodos[e.target.dataset.index] = e.target.value;

    e.target.blur();
    return {
      ...state,
      todos: mutatedTodos,
    };
  }

  return state;
};

const logState = () => state => (
  console.log(state)
);

export default {
  add,
  clear,
  update,
  logState,
};
