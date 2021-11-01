import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.sass";
import moment from "moment";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";

import configureStore from "./store/configureStore";
import provider from "./provider";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  return getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 200,
    createdAt: moment().subtract(1, "day"),
  })
);

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 100,
    createdAt: moment().subtract(3, "day"),
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    amount: 109500,
    createdAt: moment().subtract(5, "day"),
  })
);

ReactDOM.render(provider({ store }), document.getElementById("root"));
