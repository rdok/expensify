import { Provider } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import AppRouter from './routers/AppRouter';

const provider = ({ store }) => (
  <Provider store={store}>
    {' '}
    <AppRouter />
    {' '}
  </Provider>
);

provider.propTypes = {
  store: PropTypes.func.isRequired,
};

export default provider;
