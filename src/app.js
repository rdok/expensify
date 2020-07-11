import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.sass';
import moment from 'moment';

import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 200,
  createdAt: moment().subtract(1, 'day'),
}));

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 100,
  createdAt: moment().subtract(3, 'day'),
}));

store.dispatch(addExpense({
  description: 'Rent',
  amount: 109500,
  createdAt: moment().subtract(5, 'day'),
}));

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>
      The info is:
      {info}
    </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => (props) => (
  <div>
    {props.isAdmin && <p>This is private info. Please don't share!</p>}
    <WrappedComponent {...props} />
  </div>
);

const AdminInfo = withAdminWarning(Info);

const requireAuth = (WrappedComponent) => (props) => (
  <div>
    {
            props.isAuthenticated ? (<p>Redirect to auth page</p>)
              : <WrappedComponent {...props} />
        }
  </div>
);

const AuthInfo = requireAuth(Info);

const jsx = (
  <Provider store={store}>
    {' '}
    <AppRouter />
    {' '}
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
