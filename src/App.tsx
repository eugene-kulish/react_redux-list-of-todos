import React from 'react';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { TodoModal } from './components/TodoModal';
import { Loader } from './components/Loader';

import { store } from './app/store';
import { useAppSelector } from './app/hooks';

import { Todo } from './types/Todo';

export const App: React.FC = () => {
  const todos: Todo[] = useAppSelector(state => state.todos);
  const currentTodo = useAppSelector(state => state.currentTodo);

  return (
    <Provider store={store}>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">
              {!todos.length && (
                <Loader />
              )}

              <TodoList />
            </div>
          </div>
        </div>
      </div>

      {currentTodo && (
        <TodoModal />
      )}
    </Provider>
  );
};
